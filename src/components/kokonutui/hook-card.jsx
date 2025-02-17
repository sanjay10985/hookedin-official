import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function HookCard({ hook, isSelected, onSelect }) {
  if (!hook || !hook.text) {
    return null;
  }
  return (
    <motion.div
      className={cn(
        "p-4 rounded-lg border space-y-4 cursor-pointer transition-all duration-200 ease-in-out",
        isSelected
          ? "border-blue-500 bg-blue-50 shadow-md"
          : "border-black/10 dark:border-white/10 hover:bg-gray-50 hover:shadow-sm"
      )}
      onClick={onSelect}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <p className="text-lg font-medium">{hook.text}</p>

      {/* <div className="flex flex-wrap gap-2">
        <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
          {hook.hook_type}
        </span>
        <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
          {hook.professional_segment}
        </span>
        <span className="px-2 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-700">
          {hook.engagement_focus}
        </span>
      </div> */}

      <div className="grid grid-cols-3 gap-2 text-sm">
        {/* <div className="text-center">
          <div className="font-medium text-gray-600">Relevance</div>
          <div className="text-lg font-bold text-blue-600">
            {hook.performance_metrics.professional_relevance}/10
          </div>
        </div>
        <div className="text-center">
          <div className="font-medium text-gray-600">Story</div>
          <div className="text-lg font-bold text-green-600">
            {hook.performance_metrics.story_strength}/10
          </div>
        </div>
        <div className="text-center">
          <div className="font-medium text-gray-600">Value</div>
          <div className="text-lg font-bold text-purple-600">
            {hook.performance_metrics.value_proposition}/10
          </div>
        </div> */}
      </div>
    </motion.div>
  );
}
