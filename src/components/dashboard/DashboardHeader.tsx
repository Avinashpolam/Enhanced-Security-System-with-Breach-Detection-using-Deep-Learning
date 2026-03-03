import { motion } from "framer-motion";
import { Shield, Bell, Settings } from "lucide-react";

const DashboardHeader = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center justify-between border-b border-border px-6 py-4"
    >
      <div className="flex items-center gap-3">
        <div className="relative">
          <Shield className="h-8 w-8 text-primary" />
          <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-accent animate-pulse-glow" />
        </div>
        <div>
          <h1 className="text-lg font-bold tracking-tight text-foreground">
            SENTINEL<span className="text-primary">AI</span>
          </h1>
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
            Enhanced Security · Breach Detection · Deep Learning
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="hidden sm:flex items-center gap-2 mr-4 px-3 py-1.5 rounded-md bg-accent/10 border border-accent/20">
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse-glow" />
          <span className="text-xs font-mono text-accent">ALL SYSTEMS OPERATIONAL</span>
        </div>
        <button className="relative rounded-md p-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
          <Bell className="h-4.5 w-4.5" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-destructive" />
        </button>
        <button className="rounded-md p-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
          <Settings className="h-4.5 w-4.5" />
        </button>
      </div>
    </motion.header>
  );
};

export default DashboardHeader;
