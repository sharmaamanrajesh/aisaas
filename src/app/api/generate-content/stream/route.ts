import { NextRequest, NextResponse } from "next/server";
import { generateLongFormContentStream } from "@/utils/openai";
import { generateBlogPrompt } from "@/prompts/blogPrompts";

export async function POST(req: NextRequest) {
  const { topic, maxTokens, temperature } = await req.json();

  if (!topic || typeof topic !== "string") {
    return NextResponse.json(
      { error: "Invalid topic. Topic must be a non-empty string." },
      { status: 400 }
    );
  }

  const prompt = generateBlogPrompt(topic);

  const encoder = new TextEncoder();
  const readableStream = new ReadableStream({
    async start(controller) {
      try {
        await generateLongFormContentStream(
          prompt,
          maxTokens,
          temperature,
          (content) => {
            controller.enqueue(encoder.encode(content));
          }
        );
        controller.close();
      } catch (error) {
        controller.error(error);
      }
    },
  });

  return new Response(readableStream, {
    headers: { "Content-Type": "text/plain" },
  });
}
