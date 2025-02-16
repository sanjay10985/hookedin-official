"use client";

import AIInput_17 from "@/components/kokonutui/ai-input-17";
import { useAIGenerationContext } from "@/context/AIGenerationContext";
import { useEffect, useState } from "react";
import { AIResponse } from "@/components/kokonutui/ai-response";
import { LinkedInPost } from "@/components/linkedin-post";
import { motion, AnimatePresence } from "framer-motion";

export default function AppHome() {
  const { generateContent, response, isLoading } = useAIGenerationContext();
  const [selectedHook, setSelectedHook] = useState(null);

  useEffect(() => {
    const processPrompt = async () => {
      const pendingPrompt = localStorage.getItem("pendingPrompt");
      if (pendingPrompt) {
        await generateContent(pendingPrompt);
        localStorage.removeItem("pendingPrompt");
      }
    };

    processPrompt();
  }, [generateContent]);

  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex flex-col">
        <div className="flex-grow overflow-y-auto p-4">
          <AIResponse
            response={response}
            isLoading={isLoading}
            onSelectHook={setSelectedHook}
          />
        </div>
        <div className="p-4">
          <AIInput_17 />
        </div>
      </div>
      <div className="w-1/2 bg-gray-100 p-4 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {selectedHook && (
            <motion.div
              key={selectedHook.text}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <LinkedInPost
                author={{
                  name: "John Doe",
                  title: "Software Engineer at Tech Co.",
                }}
                hook={selectedHook.text}
                metrics={{
                  likes: 42,
                  comments: 7,
                  reposts: 3,
                }}
                timeAgo="2h"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
