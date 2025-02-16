"use client";

import { HookCard } from "./hook-card";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";

export function AIResponse({ response, isLoading, onSelectHook }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const parsedHooks = useMemo(() => {
    if (!response) return [];
    try {
      const cleanJson = response.replace(/```json\n|\n```/g, "");
      const parsed = JSON.parse(cleanJson);
      return parsed.hooks || [];
    } catch (error) {
      console.error("Error parsing hooks:", error);
      return [];
    }
  }, [response]);

  useMemo(() => {
    if (parsedHooks.length > 0) {
      onSelectHook(parsedHooks[0]);
    }
  }, [parsedHooks, onSelectHook]);

  const handleSelectHook = (hook, index) => {
    setSelectedIndex(index);
    onSelectHook(hook);
  };

  return (
    <div className="w-full space-y-4 overflow-y-auto p-8 ">
      <AnimatePresence>
        {parsedHooks.map((hook, index) => (
          <HookCard
            key={index}
            hook={hook}
            index={index}
            isSelected={index === selectedIndex}
            onSelect={() => handleSelectHook(hook, index)}
          />
        ))}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-4 text-center text-gray-500"
          >
            Generating more hooks...
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
