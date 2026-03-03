import { Shield, Eye, Scan, Users } from "lucide-react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatsCard from "@/components/dashboard/StatsCard";
import AlertPanel from "@/components/dashboard/AlertPanel";
import SurveillanceFeed from "@/components/dashboard/SurveillanceFeed";
import DetectionAnalytics from "@/components/dashboard/DetectionAnalytics";
import SystemStatus from "@/components/dashboard/SystemStatus";

const Index = () => {
  return (
    <div className="min-h-screen bg-background grid-bg">
      <DashboardHeader />

      <main className="p-6 space-y-6 max-w-[1600px] mx-auto">
        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard
            title="Active Zones"
            value="5/6"
            subtitle="1 camera offline"
            icon={Eye}
            variant="primary"
          />
          <StatsCard
            title="Intrusions Detected"
            value={7}
            subtitle="Last 24 hours"
            icon={Shield}
            trend={{ value: 12, positive: false }}
            variant="destructive"
          />
          <StatsCard
            title="Scans Processed"
            value="2,413"
            subtitle="Facial · Thermal · Iris · Height"
            icon={Scan}
            trend={{ value: 8, positive: true }}
            variant="accent"
          />
          <StatsCard
            title="Personnel Verified"
            value={184}
            subtitle="Authorized access granted"
            icon={Users}
            variant="primary"
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <SurveillanceFeed />
            <DetectionAnalytics />
          </div>
          <div>
            <AlertPanel />
          </div>
        </div>

        {/* System Status */}
        <SystemStatus />
      </main>
    </div>
  );
};

export default Index;
