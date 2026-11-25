import Card from '@/components/common/Card';
import DonutChart from '@/components/common/DonutChart';
import { paymentStatusData } from '@/data/dashboardData';
import styles from './PaymentStatusCard.module.css';

export default function PaymentStatusCard() {
  return (
    <Card className={styles.card} aria-labelledby="payment-status-heading">
      <div className={styles.header}>
        <h2 id="payment-status-heading" className={styles.title}>
          Payment Status
        </h2>
        <span className={styles.period}>{paymentStatusData.period}</span>
      </div>

      <div className={styles.body}>
        <div className={styles.infoColumn}>
          <div className={styles.headlineStat}>
            <p className={`${styles.headlinePercent} tabular-nums`}>
              {paymentStatusData.headlinePercent}
            </p>
            <p className={styles.headlineLabel}>
              {paymentStatusData.headlineLabel}
            </p>
          </div>

          <ul className={styles.legendList}>
            {paymentStatusData.segments.map((item) => (
              <li key={item.label} className={styles.legendItem}>
                <span
                  className={styles.swatch}
                  style={{ backgroundColor: item.color }}
                  aria-hidden="true"
                />
                <span className={styles.legendLabel}>{item.label}</span>
                {item.displayPercent && (
                  <span className={`${styles.legendPercent} tabular-nums`}>
                    {item.displayPercent}
                  </span>
                )}
                <strong className={`${styles.legendAmount} tabular-nums`}>
                  {item.amount}
                </strong>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.chartWrap}>
          <DonutChart
            segments={paymentStatusData.segments}
            size={196}
            strokeWidth={30}
            gapPx={4}
            startAngle={-82}
            ariaLabel="Payment status breakdown: 70% Paid, 15% Unpaid, 15% Overdue"
          />
        </div>
      </div>
    </Card>
  );
}