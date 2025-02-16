import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

export async function GET() {
  const sessionCookie = cookies().get("auth-session");

  if (!sessionCookie) {
    return NextResponse.json({ authenticated: false });
  }

  try {
    const session = JSON.parse(sessionCookie.value);

    // Verify against Notion
    const notion = new Client({ auth: process.env.NOTION_SECRET });
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DB,
      filter: {
        property: "Email",
        email: {
          equals: session.email,
        },
      },
    });

    if (response.results.length > 0) {
      return NextResponse.json({
        authenticated: true,
        user: {
          email: session.email,
          name: session.name,
          lastLogin: session.lastLogin,
        },
      });
    }

    return NextResponse.json({ authenticated: false });
  } catch {
    return NextResponse.json({ authenticated: false });
  }
}
