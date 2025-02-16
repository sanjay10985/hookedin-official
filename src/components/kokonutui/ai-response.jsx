import { HookCard } from "./hook-card";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo } from "react";

export function AIResponse({ response, isLoading }) {
  const parsedHooks = useMemo(() => {
    if (!response) return [];
    try {
      // Remove the ```json prefix and ``` suffix if present
      const cleanJson = response.replace(/```json\n|\n```/g, "");
      const parsed = JSON.parse(cleanJson);
      return parsed.hooks || [];
    } catch (error) {
      console.error("Error parsing hooks:", error);
      return [];
    }
  }, [response]);

  return (
    <div className="w-full max-w-3xl space-y-4 overflow-y-auto">
      <AnimatePresence>
        {parsedHooks.map((hook, index) => (
          <HookCard key={index} hook={hook} index={index} />
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
