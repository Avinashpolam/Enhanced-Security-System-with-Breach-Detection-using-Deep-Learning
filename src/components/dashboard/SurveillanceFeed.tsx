import { motion } from "framer-motion";
import { Camera, Shield, ShieldAlert, Wifi } from "lucide-react";

interface FeedProps {
  id: string;
  zone: string;
  status: "secure" | "alert" | "offline";
  detections: number;
  model: string;
}

const feeds: FeedProps[] = [
  { id: "CAM-001", zone: "Zone A — Server Room", status: "alert", detections: 3, model: "CNN-FaceNet v2.1" },
  { id: "CAM-002", zone: "Zone B — Main Entrance", status: "secure", detections: 0, model: "ResNet-Iris v1.4" },
  { id: "CAM-003", zone: "Zone C — East Corridor", status: "secure", detections: 1, model: "ThermalNet v3.0" },
  { id: "CAM-004", zone: "Zone D — Parking Level", status: "offline", detections: 0, model: "HeightMap v1.2" },
  { id: "CAM-005", zone: "Zone E — Research Lab", status: "alert", detections: 2, model: "CNN-FaceNet v2.1" },
  { id: "CAM-006", zone: "Zone F — Roof Access", status: "secure", detections: 0, model: "ThermalNet v3.0" },
];

const statusConfig = {
  secure: { icon: Shield, color: "text-accent", bg: "bg-accent/5", border: "border-accent/20", label: "SECURE" },
  alert: { icon: ShieldAlert, color: "text-destructive", bg: "bg-destructive/5", border: "border-destructive/30", label: "ALERT" },
  offline: { icon: Wifi, color: "text-muted-foreground", bg: "bg-muted/30", border: "border-muted-foreground/20", label: "OFFLINE" },
};

const SurveillanceFeed = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="rounded-lg border border-border bg-card p-5"
    >
      <h3 className="text-sm font-mono uppercase tracking-widest text-primary text-glow-primary mb-4">
        Surveillance Grid
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {feeds.map((feed, i) => {
          const config = statusConfig[feed.status];
          const Icon = config.icon;
          return (
            <motion.div
              key={feed.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08 }}
              className={`relative rounded-md border ${config.border} ${config.bg} p-4 overflow-hidden group cursor-pointer hover:border-primary/40 transition-colors`}
            >
              {/* Simulated feed area */}
              <div className="aspect-video bg-background/50 rounded mb-3 flex items-center justify-center relative overflow-hidden">
                <Camera className="h-8 w-8 text-muted-foreground/30" />
                {feed.status === "alert" && (
                  <div className="absolute inset-0 border-2 border-destructive/50 rounded animate-pulse-glow" />
                )}
                <div className="absolute top-1.5 left-1.5 flex items-center gap-1">
                  <span className={`h-1.5 w-1.5 rounded-full ${feed.status === "offline" ? "bg-muted-foreground" : feed.status === "alert" ? "bg-destructive animate-pulse-glow" : "bg-accent"}`} />
                  <span className="text-[9px] font-mono text-muted-foreground">{feed.id}</span>
                </div>
                <div className="absolute top-1.5 right-1.5">
                  <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${config.color} bg-background/80`}>
                    {config.label}
                  </span>
                </div>
                {feed.status !== "offline" && <div className="absolute inset-0 scanline opacity-20" />}
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5">
                  <Icon className={`h-3.5 w-3.5 ${config.color}`} />
                  <p className="text-xs font-medium text-foreground truncate">{feed.zone}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-mono text-muted-foreground">{feed.model}</p>
                  {feed.detections > 0 && (
                    <span className="text-[10px] font-mono text-destructive bg-destructive/10 px-1.5 py-0.5 rounded">
                      {feed.detections} detections
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default SurveillanceFeed;
