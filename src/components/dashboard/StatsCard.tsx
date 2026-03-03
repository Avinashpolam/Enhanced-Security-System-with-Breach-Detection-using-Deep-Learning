import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: { value: number; positive: boolean };
  variant?: "primary" | "accent" | "warning" | "destructive";
}

const variantStyles = {
  primary: "border-primary/20 glow-primary",
  accent: "border-accent/20 glow-accent",
  warning: "border-warning/20 glow-warning",
  destructive: "border-destructive/20 glow-destructive",
};

const iconVariantStyles = {
  primary: "text-primary bg-primary/10",
  accent: "text-accent bg-accent/10",
  warning: "text-warning bg-warning/10",
  destructive: "text-destructive bg-destructive/10",
};

const StatsCard = ({ title, value, subtitle, icon: Icon, trend, variant = "primary" }: StatsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative overflow-hidden rounded-lg border bg-card p-5 ${variantStyles[variant]}`}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold font-mono text-foreground">{value}</p>
          {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
          {trend && (
            <p className={`text-xs font-mono ${trend.positive ? "text-accent" : "text-destructive"}`}>
              {trend.positive ? "▲" : "▼"} {Math.abs(trend.value)}% from last hour
            </p>
          )}
        </div>
        <div className={`rounded-lg p-2.5 ${iconVariantStyles[variant]}`}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div className="absolute inset-0 scanline opacity-30" />
    </motion.div>
  );
};

export default StatsCard;
