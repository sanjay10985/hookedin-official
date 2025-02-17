"use client";

import { HookCard } from "./hook-card";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState, useEffect } from "react";

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

  useEffect(() => {
    if (parsedHooks.length > 0) {
      onSelectHook(parsedHooks[0]);
    }
  }, [parsedHooks, onSelectHook]);

  const handleSelectHook = (hook, index) => {
    setSelectedIndex(index);
    onSelectHook(hook);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full space-y-4 overflow-y-auto p-4"
    >
      <AnimatePresence>
        {parsedHooks.map((hook, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ delay: index * 0.1 }}
          >
            <HookCard
              hook={hook}
              index={index}
              isSelected={index === selectedIndex}
              onSelect={() => handleSelectHook(hook, index)}
            />
          </motion.div>
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
    </motion.div>
  );
}
