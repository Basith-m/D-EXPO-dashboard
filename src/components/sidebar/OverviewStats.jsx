import {
  ArrowDownToLine,
  Banknote,
  Clock,
  CreditCard,
  Users,
  Wallet,
} from 'lucide-react';
import { sidebarData } from '@/data/dashboardData';
import styles from './OverviewStats.module.css';

const overviewIcons = {
  earnings: Banknote,
  pending: Clock,
  paid: Wallet,
  month: CreditCard,
  downline: ArrowDownToLine,
  team: Users,
};

export default function OverviewStats() {
  return (
    <section aria-labelledby="overview-heading">
      <h2 id="overview-heading" className={styles.heading}>
        Overview
      </h2>

      <dl className={styles.list}>
        {sidebarData.overview.map((item) => {
          const IconComponent = overviewIcons[item.icon] || Banknote;

          return (
            <div key={item.label} className={styles.row}>
              <dt className={styles.labelGroup}>
                <IconComponent
                  size={14}
                  strokeWidth={1.8}
                  className={styles.icon}
                  aria-hidden="true"
                />
                <span>{item.label}</span>
              </dt>
              <dd className={`${styles.value} tabular-nums`}>{item.value}</dd>
            </div>
          );
        })}
      </dl>
    </section>
  );
}