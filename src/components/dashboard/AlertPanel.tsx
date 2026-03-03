import { motion } from "framer-motion";
import { AlertTriangle, ShieldAlert, ShieldCheck, Clock } from "lucide-react";

interface Alert {
  id: string;
  type: "critical" | "warning" | "info";
  message: string;
  location: string;
  time: string;
  detectionType: string;
}

const alerts: Alert[] = [
  { id: "1", type: "critical", message: "Unidentified individual detected", location: "Zone A - Server Room", time: "00:12s ago", detectionType: "Facial Recognition" },
  { id: "2", type: "warning", message: "Thermal anomaly detected", location: "Zone C - East Corridor", time: "02:45s ago", detectionType: "Thermal Imaging" },
  { id: "3", type: "info", message: "Authorized personnel verified", location: "Zone B - Main Entrance", time: "05:30s ago", detectionType: "Iris Scan" },
  { id: "4", type: "warning", message: "Height profile mismatch", location: "Zone D - Parking Level", time: "08:15s ago", detectionType: "Height Analysis" },
  { id: "5", type: "critical", message: "Multiple intrusion attempts", location: "Zone A - Restricted Lab", time: "12:00s ago", detectionType: "CNN Pattern Match" },
];

const typeConfig = {
  critical: { icon: ShieldAlert, color: "text-destructive", bg: "bg-destructive/10", border: "border-destructive/30", badge: "bg-destructive/20 text-destructive" },
  warning: { icon: AlertTriangle, color: "text-warning", bg: "bg-warning/10", border: "border-warning/30", badge: "bg-warning/20 text-warning" },
  info: { icon: ShieldCheck, color: "text-accent", bg: "bg-accent/10", border: "border-accent/30", badge: "bg-accent/20 text-accent" },
};

const AlertPanel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="rounded-lg border border-border bg-card p-5"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-mono uppercase tracking-widest text-primary text-glow-primary">
          Live Threat Feed
        </h3>
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-destructive animate-pulse-glow" />
          <span className="text-xs font-mono text-destructive">LIVE</span>
        </div>
      </div>

      <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
        {alerts.map((alert, i) => {
          const config = typeConfig[alert.type];
          const Icon = config.icon;
          return (
            <motion.div
              key={alert.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-md border ${config.border} ${config.bg} p-3 space-y-2`}
            >
              <div className="flex items-start gap-2.5">
                <Icon className={`h-4 w-4 mt-0.5 ${config.color} shrink-0`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">{alert.message}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{alert.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 pl-6">
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${config.badge}`}>
                  {alert.detectionType}
                </span>
                <span className="text-[10px] font-mono text-muted-foreground flex items-center gap-1">
                  <Clock className="h-2.5 w-2.5" /> {alert.time}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default AlertPanel;
