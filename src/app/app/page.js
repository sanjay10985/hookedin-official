"use client";

import AIInput_17 from "@/components/kokonutui/ai-input-17";
import { useAIGenerationContext } from "@/context/AIGenerationContext";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function AppHome() {
  // const searchParams = useSearchParams();
  const { generateContent } = useAIGenerationContext();

  useEffect(() => {
    const processPrompt = async () => {
      const pendingPrompt = localStorage.getItem("pendingPrompt");
      console.log(pendingPrompt);

      if (pendingPrompt) {
        await generateContent(pendingPrompt);
        localStorage.removeItem("pendingPrompt");
      }
    };

    processPrompt();
  }, []);

  return (
    <div className="w-full h-screen">
      <AIInput_17 />
    </div>
  );
}
