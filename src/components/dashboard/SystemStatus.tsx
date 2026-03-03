import { motion } from "framer-motion";
import { Cpu, HardDrive, Thermometer, Zap } from "lucide-react";

const metrics = [
  { icon: Cpu, label: "GPU Utilization", value: 78, unit: "%", status: "normal" as const },
  { icon: HardDrive, label: "Model Memory", value: 12.4, unit: "GB", status: "normal" as const },
  { icon: Thermometer, label: "GPU Temperature", value: 72, unit: "°C", status: "warning" as const },
  { icon: Zap, label: "Inference Speed", value: 23, unit: "ms", status: "normal" as const },
];

const statusColor = {
  normal: "text-accent",
  warning: "text-warning",
  critical: "text-destructive",
};

const barColor = {
  normal: "bg-accent",
  warning: "bg-warning",
  critical: "bg-destructive",
};

const SystemStatus = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="rounded-lg border border-border bg-card p-5"
    >
      <h3 className="text-sm font-mono uppercase tracking-widest text-primary text-glow-primary mb-4">
        System Health
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m, i) => {
          const Icon = m.icon;
          const percentage = m.label === "GPU Utilization" ? m.value : m.label === "GPU Temperature" ? (m.value / 100) * 100 : 60;
          return (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="text-center space-y-2"
            >
              <Icon className={`h-5 w-5 mx-auto ${statusColor[m.status]}`} />
              <div>
                <p className={`text-2xl font-bold font-mono ${statusColor[m.status]}`}>
                  {m.value}
                  <span className="text-xs text-muted-foreground ml-0.5">{m.unit}</span>
                </p>
                <p className="text-[10px] text-muted-foreground font-mono mt-0.5">{m.label}</p>
              </div>
              <div className="h-1 bg-muted rounded-full overflow-hidden mx-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.8 }}
                  className={`h-full rounded-full ${barColor[m.status]}`}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default SystemStatus;
