export default function AnimatedCardBorder() {
  return (
    <svg
      className="
        pointer-events-none
        absolute
        inset-0
        z-20
        h-full
        w-full
        opacity-0
        transition-opacity
        duration-150
        group-hover:opacity-100
      "
      aria-hidden="true"
    >
      <rect
        x="1"
        y="1"
        width="calc(100% - 2px)"
        height="calc(100% - 2px)"
        rx="16"
        ry="16"
        pathLength="1"
        className="card-animated-stroke"
      />
    </svg>
  );
}