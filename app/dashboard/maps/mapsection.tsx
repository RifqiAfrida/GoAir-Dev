"use client";

import dynamic from "next/dynamic";

const MapLeaflet = dynamic(() => import("./mapleaflet"), {
  ssr: false,
  loading: () => <p></p>,
});

export default function MapSection() {
  return (
    <div style={{ height: "calc(100vh - 64px)" }}>
      <MapLeaflet />
    </div>
  );
}
