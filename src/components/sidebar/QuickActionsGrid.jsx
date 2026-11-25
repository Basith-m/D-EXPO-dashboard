import { ArrowDownToLine, CreditCard, Wallet } from 'lucide-react';
import { sidebarData } from '@/data/dashboardData';
import styles from './QuickActionsGrid.module.css';

const quickActionIcons = {
  withdraw: Wallet,
  commissions: CreditCard,
  downline: ArrowDownToLine,
};

export default function QuickActionsGrid() {
  return (
    <section aria-labelledby="quick-actions-heading">
      <h2 id="quick-actions-heading" className={styles.heading}>
        Quick Actions
      </h2>

      <div className={styles.grid}>
        {sidebarData.quickActions.map((action) => {
          const IconComponent = quickActionIcons[action.icon] || Wallet;

          return (
            <button key={action.id} type="button" className={styles.actionBtn}>
              <span className={styles.iconTile} aria-hidden="true">
                <IconComponent size={19} strokeWidth={1.8} />
              </span>
              <span className={styles.label}>{action.label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}