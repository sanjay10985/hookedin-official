import { google } from "@ai-sdk/google";
import { streamText } from "ai";
// import { createStreamableValue } from "ai/rsc";

export async function continueConversation(history) {
  const stream = createStreamableValue();
  const model = google("gemini-2.0-flash-lite-preview-02-05");
  (async () => {
    const { textStream } = await streamText({
      model: model,
      messages: history,
    });
    for await (const text of textStream) {
      stream.update(text);
    }
    stream.done();
  })().then(() => {});
  return {
    messages: history,
    newMessage: stream.value,
  };
}
