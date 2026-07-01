const LOGO_SRC = "/logo-mark.png";

export function Logo({ size = 72 }: { size?: number }) {
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
