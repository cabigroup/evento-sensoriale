const LOGO_SRC = "/logo.jpeg";

export function Logo({ size = 56 }: { size?: number }) {
  return (
    <img
      src={LOGO_SRC}
      alt="Unique Parfume"
      width={size}
      height={size}
      className="object-contain"
      style={{ width: size, height: size }}
      decoding="async"
    />
  );
}
