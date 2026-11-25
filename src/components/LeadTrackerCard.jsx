import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Card from '@/components/common/Card';
import { leadTrackerData } from '@/data/dashboardData';
import styles from './LeadTrackerCard.module.css';

export default function LeadTrackerCard() {
  return (
    <Card aria-labelledby="lead-tracker-heading">
      <div className={styles.header}>
        <div>
          <h2 id="lead-tracker-heading" className={styles.title}>
            Lead Tracker
          </h2>
          <p className={styles.subtitle}>
            Track your leads from enquiry to conversion
          </p>
        </div>

        <Link href="#leads" className={styles.viewAllLink}>
          <span>View all Leads</span>
          <ChevronRight size={14} aria-hidden="true" />
        </Link>
      </div>

      <ul className={styles.stagesGrid}>
        {leadTrackerData.map((stage) => {
          const isGold = stage.tone === 'gold';
          const isDanger = stage.tone === 'danger';

          return (
            <li key={stage.label} className={styles.stageItem}>
              <strong
                className={`${styles.stageValue} ${
                  isGold ? styles.gold : ''
                } ${isDanger ? styles.danger : ''} tabular-nums`}
              >
                {stage.value}
              </strong>
              <span
                className={`${styles.stageLabel} ${
                  isDanger ? styles.danger : ''
                }`}
              >
                {stage.label}
              </span>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}