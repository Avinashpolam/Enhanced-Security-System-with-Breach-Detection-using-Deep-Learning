import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from "recharts";

const detectionData = [
  { name: "Facial", value: 847, accuracy: 97.2 },
  { name: "Thermal", value: 623, accuracy: 94.8 },
  { name: "Iris", value: 412, accuracy: 99.1 },
  { name: "Height", value: 531, accuracy: 91.5 },
];

const colors = [
  "hsl(180, 70%, 50%)",
  "hsl(160, 60%, 45%)",
  "hsl(200, 70%, 55%)",
  "hsl(140, 50%, 45%)",
];

const modelMetrics = [
  { label: "TensorFlow", version: "2.15.0", status: "active" },
  { label: "Keras", version: "3.1.0", status: "active" },
  { label: "OpenCV", version: "4.9.0", status: "active" },
  { label: "CNN Model", version: "FaceNet v2.1", status: "training" },
];

const DetectionAnalytics = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="rounded-lg border border-border bg-card p-5"
    >
      <h3 className="text-sm font-mono uppercase tracking-widest text-primary text-glow-primary mb-4">
        Detection Analytics
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart */}
        <div>
          <p className="text-xs text-muted-foreground mb-3 font-mono">Detections by Module (24h)</p>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={detectionData} barSize={32}>
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "hsl(215, 15%, 50%)", fontSize: 11, fontFamily: "JetBrains Mono" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "hsl(215, 15%, 50%)", fontSize: 10, fontFamily: "JetBrains Mono" }}
              />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {detectionData.map((_, index) => (
                  <Cell key={index} fill={colors[index]} opacity={0.8} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          {/* Accuracy bars */}
          <div className="space-y-2 mt-4">
            {detectionData.map((d, i) => (
              <div key={d.name} className="flex items-center gap-3">
                <span className="text-[10px] font-mono text-muted-foreground w-14">{d.name}</span>
                <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${d.accuracy}%` }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: colors[i] }}
                  />
                </div>
                <span className="text-[10px] font-mono text-foreground">{d.accuracy}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Model Status */}
        <div>
          <p className="text-xs text-muted-foreground mb-3 font-mono">Framework Status</p>
          <div className="space-y-2.5">
            {modelMetrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-center justify-between rounded-md border border-border bg-background/50 px-3 py-2.5"
              >
                <div>
                  <p className="text-sm font-medium text-foreground">{m.label}</p>
                  <p className="text-[10px] font-mono text-muted-foreground">{m.version}</p>
                </div>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                  m.status === "active"
                    ? "bg-accent/10 text-accent"
                    : "bg-warning/10 text-warning"
                }`}>
                  {m.status.toUpperCase()}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Data Augmentation Stats */}
          <div className="mt-4 rounded-md border border-primary/20 bg-primary/5 p-3">
            <p className="text-[10px] font-mono uppercase tracking-widest text-primary mb-2">
              Data Augmentation Pipeline
            </p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "Training Samples", value: "124,847" },
                { label: "Augmented", value: "498,388" },
                { label: "False Alert Rate", value: "0.23%" },
                { label: "Processing", value: "Real-time" },
              ].map(item => (
                <div key={item.label} className="text-center">
                  <p className="text-lg font-bold font-mono text-foreground">{item.value}</p>
                  <p className="text-[9px] text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DetectionAnalytics;
