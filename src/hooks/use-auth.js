import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function useAuth() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch("/api/auth/session");
        const data = await response.json();

        if (data.authenticated) {
          setUser(data.user);
        } else {
          router.push("/auth");
        }
      } catch (error) {
        router.push("/auth");
      } finally {
        setIsLoading(false);
      }
    };

    checkSession();
  }, [router]);

  return { user, isLoading };
}
