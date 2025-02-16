"use client";

import { AIGenerationProvider } from "@/context/AIGenerationContext";

export function Providers({ children }) {
  return <AIGenerationProvider>{children}</AIGenerationProvider>;
}
