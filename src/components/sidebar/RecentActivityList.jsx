import { CreditCard, FileText, Receipt, UserPlus } from 'lucide-react';
import { sidebarData } from '@/data/dashboardData';
import styles from './RecentActivityList.module.css';

const activityIcons = {
  wallet: CreditCard,
  userPlus: UserPlus,
  receipt: Receipt,
  fileText: FileText,
};

export default function RecentActivityList() {
  return (
    <section aria-labelledby="recent-activity-heading">
      <h2 id="recent-activity-heading" className={styles.heading}>
        Recent Activity
      </h2>

      <ul className={styles.list}>
        {sidebarData.activities.map((activity) => {
          const IconComponent = activityIcons[activity.icon] || FileText;

          return (
            <li key={activity.id} className={styles.item}>
              <span
                className={`${styles.iconBox} ${styles[activity.tone]}`}
                aria-hidden="true"
              >
                <IconComponent size={15} strokeWidth={2} />
              </span>

              <div className={styles.content}>
                <div className={styles.topRow}>
                  <p className={styles.title}>{activity.title}</p>
                  <time className={styles.time}>{activity.time}</time>
                </div>
                <p className={styles.description}>{activity.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}