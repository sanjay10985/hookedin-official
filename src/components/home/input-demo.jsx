"use client";

import { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";
import { ArrowUpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const placeholders = [
  {
    text: "I just launched my first SaaS product! 🚀",
    duration: 5000,
  },
  {
    text: "Excited to share 5 lessons I learned from my startup journey...",
    duration: 5000,
  },
  {
    text: "AI is changing everything. Here’s my take on the future of work...",
    duration: 5000,
  },
  {
    text: "Just wrapped up a major project—here’s what I learned...",
    duration: 5000,
  },
  {
    text: "Networking on LinkedIn has transformed my career. Here’s how...",
    duration: 5000,
  },
];
const InputDemo = () => {
  const [value, setValue] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const router = useRouter();
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 80,
    maxHeight: 350,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, placeholders[placeholderIndex].duration);

    return () => clearInterval(interval);
  }, [placeholderIndex]);

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
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="relative flex justify-between border items-end border-black/10 dark:border-white/10 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="overflow-y-auto w-full relative">
          <Textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              adjustHeight();
            }}
            onKeyDown={handleKeyDown}
            className={cn(
              "w-full px-4 py-3",
              "resize-none",
              "bg-transparent",
              "border-none",
              "focus:outline-hidden",
              "focus-visible:ring-0 focus-visible:ring-offset-0",
              "text-black dark:text-white",
              "align-top leading-normal",
              "min-h-[120px]"
            )}
            style={{ outline: "none" }}
          />
          <AnimatePresence mode="wait">
            {!value && (
              <motion.div
                key={placeholderIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute top-0 left-0  px-4 py-3 pointer-events-none text-black/50 dark:text-white/50"
              >
                {placeholders[placeholderIndex].text}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="h-14 flex items-center pr-2">
          <AnimatePresence>
            {/* {value.trim() && ( */}
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              onClick={handleSubmit}
              type="button"
              className={cn(
                "p-2 transition-colors rounded-full",
                value.trim()
                  ? "text-blue-500 hover:text-blue-600"
                  : "text-black/30 dark:text-white/30"
              )}
            >
              <ArrowUpCircle className="w-6 h-6" />
            </motion.button>
            {/* )} */}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default InputDemo;
