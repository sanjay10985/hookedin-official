"use client";

import React from "react";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";
import { ArrowUpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const InputDemo = () => {
  const [value, setValue] = useState("");
  const router = useRouter();
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 80,
    maxHeight: 350,
  });

  const handleSubmit = async () => {
    if (!value.trim()) return;
    localStorage.setItem("pendingPrompt", value);
    router.push("/app");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };
  return (
    <div className="p-4 w-full h-full flex flex-col items-center justify-center gap-6">
      <div className="relative w-full max-w-3xl">
        <div className="relative flex justify-between border border-black/10 dark:border-white/10 rounded-xl">
          <div className="overflow-y-auto w-full">
            <Textarea
              ref={textareaRef}
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                adjustHeight();
              }}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything..."
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

          <div className="h-14">
            <AnimatePresence>
              {value.trim() && (
                <motion.button
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={handleSubmit}
                  type="button"
                  className={cn(
                    "p-2 transition-colors",

                    value.trim()
                      ? "text-blue-500 hover:text-blue-600"
                      : "text-black/30 dark:text-white/30"
                  )}
                >
                  <ArrowUpCircle className="w-6 h-6" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputDemo;
