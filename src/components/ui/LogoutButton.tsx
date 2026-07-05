"use client";

import { useAuth } from "@/hooks/useAuth";
import { Button } from "./Button";

export function LogoutButton() {
  const { logout, isLoading } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <Button variant="secondary" onClick={handleLogout} disabled={isLoading} className="px-3 py-1.5 h-auto text-xs">
      {isLoading ? "Signing out..." : "Sign Out"}
    </Button>
  );
}
