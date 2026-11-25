import styles from './DonutChart.module.css';

export default function DonutChart({
  segments = [],
  size = 148,
  strokeWidth = 22,
  gapPx = 3.5,
  startAngle = -90,
  centerValue = null,
  centerLabel = null,
  ariaLabel = 'Donut chart',
}) {
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const activeSegments = segments.filter((seg) => seg.percentage > 0);
  const gap = activeSegments.length > 1 ? gapPx : 0;

  let cumulativePercentage = 0;

  return (
    <div
      className={styles.wrapper}
      style={{ width: size, height: size }}
      role="img"
      aria-label={ariaLabel}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className={styles.svg}
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="var(--color-border-subtle)"
          strokeWidth={strokeWidth}
        />

        <g transform={`rotate(${startAngle} ${center} ${center})`}>
          {activeSegments.map((segment) => {
            const segmentLength = (segment.percentage / 100) * circumference;
            const dashLength = Math.max(0, segmentLength - gap);
            const dashOffset =
              -((cumulativePercentage / 100) * circumference) - gap / 2;

            cumulativePercentage += segment.percentage;

            return (
              <circle
                key={segment.label}
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke={segment.color}
                strokeWidth={strokeWidth}
                strokeDasharray={`${dashLength} ${circumference - dashLength}`}
                strokeDashoffset={dashOffset}
                strokeLinecap="butt"
              />
            );
          })}
        </g>
      </svg>

      {(centerValue || centerLabel) && (
        <div className={styles.centerContent}>
          {centerValue && (
            <strong className={`${styles.centerValue} tabular-nums`}>
              {centerValue}
            </strong>
          )}
          {centerLabel && (
            <span className={styles.centerLabel}>{centerLabel}</span>
          )}
        </div>
      )}
    </div>
  );
}