"use client";

import { useLenis } from "@/hooks/useLenis";
import type { ReactNode } from "react";

export function SmoothScroll({ children }: { children: ReactNode }) {
  useLenis();
  return <>{children}</>;
}
