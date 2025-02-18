"use client";

import AIInput_17 from "@/components/kokonutui/ai-input-17";
import { useState } from "react";
import { AIResponse } from "@/components/kokonutui/ai-response";
import { LinkedInPost } from "@/components/linkedin-post";
import { motion, AnimatePresence } from "framer-motion";
import { useAIGeneration } from "@/hooks/use-ai-generation";
import { useAIGenerationContext } from "@/context/AIGenerationContext";

export default function AppHome() {
  const { response, isLoading } = useAIGenerationContext();

  const [selectedHook, setSelectedHook] = useState(null);

  const hasContent = response || isLoading;

  return (
    <div className="flex h-screen">
      <AnimatePresence>
        {hasContent ? (
          <>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-1/2 flex flex-col"
            >
              <div className="flex-grow overflow-y-auto p-8 pt-16">
                <AIResponse
                  response={response}
                  isLoading={isLoading}
                  onSelectHook={setSelectedHook}
                />
              </div>

              <div className="p-4">
                <AIInput_17 />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="w-1/2 bg-gray-100 p-4 flex items-center justify-center"
            >
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
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="w-full flex items-center flex-col justify-center gap-8"
          >
            <div className="container mx-auto">
              <h1 className="text-4xl text-center font-medium tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Craft LinkedIn hooks that{" "}
                <span className="inline-block bg-gradient-to-r from-[#C47D19] to-[#E5A44D] bg-clip-text text-transparent">
                  capture attention
                </span>
              </h1>
            </div>
            <div className="w-full max-w-2xl p-4">
              <AIInput_17 />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
