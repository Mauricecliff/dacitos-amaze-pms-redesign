import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: string;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase",
        "bg-blue-500/10 text-blue-400 border border-blue-500/20",
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
      {children}
    </div>
  );
}
