"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";
import { useAIGenerationContext } from "@/context/AIGenerationContext";
import { ArrowUpCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AIInput_17() {
  const [value, setValue] = useState("");

  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 80,
    maxHeight: 250,
  });

  const { generateContent, isLoading } = useAIGenerationContext();

  const handleSubmit = async () => {
    if (!value.trim()) return;

    try {
      await generateContent(value);
      setValue("");
      adjustHeight(true);
    } catch (error) {
      console.error("Error generating content:", error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="relative w-full"
    >
      <div className="relative flex justify-between border border-black/10 dark:border-white/10 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="overflow-y-auto w-full">
          <Textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              adjustHeight();
            }}
            onKeyDown={handleKeyDown}
            placeholder="Ask me for LinkedIn post ideas..."
            className={cn(
              "w-full px-4 py-3",
              "resize-none",
              "bg-transparent",
              "border-none",
              "focus:outline-hidden",
              "focus-visible:ring-0 focus-visible:ring-offset-0",
              "placeholder:text-black/50 dark:placeholder:text-white/50",
              "align-top leading-normal",
              "min-h-[80px]"
            )}
            style={{ outline: "none" }}
          />
        </div>

        <div className="h-14 flex items-center pr-2">
          <AnimatePresence>
            {value.trim() && (
              <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1.05 }}
                onClick={handleSubmit}
                disabled={isLoading}
                type="button"
                className={cn(
                  "p-2 transition-colors rounded-full",
                  isLoading ? "cursor-not-allowed opacity-50" : "",
                  "p-2 transition-colors",
                  value.trim()
                    ? "text-blue-500 hover:text-blue-600"
                    : "text-black/30 dark:text-white/30"
                )}
              >
                {isLoading ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  <ArrowUpCircle className="w-6 h-6" />
                )}
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
