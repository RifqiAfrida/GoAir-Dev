"use client";

import MapView from "./map";

export default function DashboardPage() {
  return (
    <div style={{ height: "100%", padding: 16 }}>
      <div
        style={{
          height: "100%",
          background: "#ffffff",
          borderRadius: 8,
          overflow: "hidden",
          border: "1px solid #e5e7eb",
        }}
      >
        <MapView />
      </div>
    </div>
  );
}
