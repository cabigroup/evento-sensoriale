export function Logo({ size = 56 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Unique Parfume"
      role="img"
    >
      <circle
        cx="60"
        cy="60"
        r="57"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="1"
      />
      <text
        x="60"
        y="58"
        textAnchor="middle"
        fill="var(--gold)"
        fontFamily="'Cormorant Garamond', serif"
        fontStyle="italic"
        fontSize="30"
        fontWeight="400"
      >
        unique.
      </text>
      <line
        x1="38"
        y1="70"
        x2="82"
        y2="70"
        stroke="var(--gold)"
        strokeWidth="0.6"
        opacity="0.7"
      />
      <text
        x="60"
        y="86"
        textAnchor="middle"
        fill="var(--gold)"
        fontFamily="'Inter', sans-serif"
        fontSize="9"
        letterSpacing="4"
        fontWeight="300"
      >
        PARFUME
      </text>
    </svg>
  );
}
