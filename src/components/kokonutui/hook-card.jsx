import { motion } from "framer-motion";

export function HookCard({ hook, index }) {
  if (!hook || !hook.text) {
    return null;
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="p-4 rounded-lg border border-black/10 dark:border-white/10 space-y-4"
    >
      <p className="text-lg font-medium">{hook.text}</p>

      <div className="flex flex-wrap gap-2">
        <span className="px-2 py-1 text-sm rounded-full bg-blue-100 text-blue-700">
          {hook.hook_type}
        </span>
        <span className="px-2 py-1 text-sm rounded-full bg-green-100 text-green-700">
          {hook.professional_segment}
        </span>
        <span className="px-2 py-1 text-sm rounded-full bg-purple-100 text-purple-700">
          {hook.engagement_focus}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 text-sm">
        <div className="text-center">
          <div className="font-medium">Relevance</div>
          <div className="text-lg">
            {hook.performance_metrics.professional_relevance}/10
          </div>
        </div>
        <div className="text-center">
          <div className="font-medium">Story</div>
          <div className="text-lg">
            {hook.performance_metrics.story_strength}/10
          </div>
        </div>
        <div className="text-center">
          <div className="font-medium">Value</div>
          <div className="text-lg">
            {hook.performance_metrics.value_proposition}/10
          </div>
        </div>
      </div>
    </motion.div>
  );
}
