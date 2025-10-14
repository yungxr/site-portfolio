export default function BackgroundBlobs() {
  return (
    <div
      className="absolute inset-0 pointer-events-none -z-10 overflow-hidden will-change-transform"
      style={{ transform: "translateZ(0)" }}
    >
      <div
        className="absolute -left-72 -top-40 w-96 h-96 rounded-full animate-blob"
        style={{
          background:
            "radial-gradient(closest-side, rgba(99,102,241,0.16), rgba(10,10,20,0.6))",
          filter: "blur(56px) saturate(1.1)",
          mixBlendMode: "soft-light",
        }}
      />
      <div
        className="absolute right-10 top-20 w-80 h-80 rounded-full animate-blob"
        style={{
          background:
            "radial-gradient(closest-side, rgba(168,192,255,0.18), rgba(10,10,20,0.6))",
          filter: "blur(42px)",
          mixBlendMode: "soft-light",
        }}
      />
      <div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[52rem] h-[26rem] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(closest-side, rgba(59,130,246,0.10), rgba(10,10,20,0.6))",
          filter: "blur(48px)",
          mixBlendMode: "soft-light",
        }}
      />
      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
}