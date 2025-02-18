"use client";

import { useAIGenerationContext } from "@/context/AIGenerationContext";
import { useAuth } from "@/hooks/use-auth";
import { useActionState } from "react";

export default function AppLayout({ children }) {
  // const { user, isLoading } = useAuth();

  const { isLoading } = useAIGenerationContext();

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900" />
      </div>
    );
  }

  return <div>{children}</div>;
}
