"use client";

import { useState } from "react";
import { continueConversation } from "@/app/actions";
import { readStreamableValue } from "ai/rsc";
export default function Test() {
  const [conversation, setConversation] = useState([]);
  const [input, setInput] = useState("");

  return (
    <div>
      <div>
        {conversation.map((message, index) => (
          <div key={index}>
            {message.role}: {message.content}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <button
          onClick={async () => {
            const { messages, newMessage } = await continueConversation([
              ...conversation,
              { role: "user", content: input },
            ]);
            let textContent = "";
            for await (const delta of readStreamableValue(newMessage)) {
              textContent = `${textContent}${delta}`;
              setConversation([
                ...messages,
                { role: "assistant", content: textContent },
              ]);
            }
          }}
        >
          Send Message
        </button>
      </div>
    </div>
  );
}
