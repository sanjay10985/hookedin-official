import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request) {
  const body = await request.json();
  try {
    const notion = new Client({ auth: process.env.NOTION_SECRET });

    // Query the database for the email
    const response = await notion.databases.query({
      database_id: `${process.env.NOTION_DB}`,
      filter: {
        property: "Email",
        email: {
          equals: body.email,
        },
      },
    });

    const userExists = response.results.length > 0;

    if (userExists) {
      const pageId = response.results[0].id;
      const userName = response.results[0].properties.Name.title[0].plain_text;

      // Now update the user analytics
      await notion.pages.update({
        page_id: pageId,
        properties: {
          LastLogin: {
            date: {
              start: new Date().toISOString(),
            },
          },
          LoginCount: {
            number:
              (response.results[0].properties.LoginCount?.number || 0) + 1,
          },
          LastDevice: {
            rich_text: [
              {
                text: {
                  content: body.userAgent || "Unknown Device",
                },
              },
            ],
          },
        },
      });

      cookies().set(
        "auth-session",
        JSON.stringify({
          email: body.email,
          name: userName,
          lastLogin: new Date().toISOString(),
        }),
        {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          maxAge: 7 * 24 * 60 * 60, // 1 week
        }
      );

      return NextResponse.json(
        {
          success: true,
          exists: true,
          name: userName,
          email: body.email,
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        exists: false,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Authentication failed",
      },
      { status: 500 }
    );
  }
}
