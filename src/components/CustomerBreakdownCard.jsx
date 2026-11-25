import Link from 'next/link';
import { ChevronRight, Info } from 'lucide-react';
import Card from '@/components/common/Card';
import DonutChart from '@/components/common/DonutChart';
import { customerSummary } from '@/data/dashboardData';
import styles from './CustomerBreakdownCard.module.css';

export default function CustomerBreakdownCard() {
  return (
    <Card aria-labelledby="my-customers-heading">
      <div className={styles.header}>
        <h2 id="my-customers-heading" className={styles.title}>
          My Customers
        </h2>

        <Link href="#customers" className={styles.viewAllLink}>
          <span>View all customers</span>
          <ChevronRight size={14} aria-hidden="true" />
        </Link>
      </div>

      <div className={styles.body}>
        <dl className={styles.customerList}>
          {customerSummary.rows.map((row) => (
            <div key={row.label} className={styles.customerRow}>
              <dt className={styles.rowLabel}>{row.label}</dt>
              <dd className={`${styles.rowValue} tabular-nums`}>{row.value}</dd>
            </div>
          ))}
        </dl>

        <div className={styles.incomeSection}>
          <div className={styles.incomeTop}>
            <DonutChart
              segments={customerSummary.chartSegments}
              size={146}
              strokeWidth={22}
              centerValue={customerSummary.totalValue}
              centerLabel="Total Value"
              ariaLabel={`Income breakdown totaling ${customerSummary.totalValue}: 58% Direct Bonus, 42% Pending Payout`}
            />

            <div className={styles.breakdownBlock}>
              <h3 className={styles.breakdownTitle}>Income Breakdown</h3>

              <ul className={styles.breakdownList}>
                {customerSummary.incomeBreakdown.map((item) => (
                  <li key={item.label} className={styles.breakdownRow}>
                    <span className={styles.breakdownLabel}>{item.label}</span>
                    <span
                      className={`${styles.breakdownPercent} ${
                        item.percent === '—' ? styles.breakdownPercentMuted : ''
                      } tabular-nums`}
                    >
                      {item.percent}
                    </span>
                    <strong className={`${styles.breakdownAmount} tabular-nums`}>
                      {item.amount}
                    </strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className={styles.settlementNote}>
            <Info size={13} className={styles.noteIcon} aria-hidden="true" />
            <span>{customerSummary.settlementNote}</span>
          </p>
        </div>
      </div>
    </Card>
  );
}