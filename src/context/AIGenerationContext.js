import { createContext, useContext } from "react";
import { useAIGeneration } from "../hooks/use-ai-generation";

const AIGenerationContext = createContext();

export function AIGenerationProvider({ children }) {
  const aiGeneration = useAIGeneration();

  return (
    <AIGenerationContext.Provider value={aiGeneration}>
      {children}
    </AIGenerationContext.Provider>
  );
}

export function useAIGenerationContext() {
  return useContext(AIGenerationContext);
}
