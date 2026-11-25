import Card from '@/components/common/Card';
import RewardsTimeline from '@/components/sidebar/RewardsTimeline';
import RecentActivityList from '@/components/sidebar/RecentActivityList';
import QuickActionsGrid from '@/components/sidebar/QuickActionsGrid';
import OverviewStats from '@/components/sidebar/OverviewStats';
import styles from './DashboardSidebar.module.css';

export default function DashboardSidebar() {
  return (
    <div className={styles.sidebarCard}>
      <div className={styles.sections}>
        <div className={styles.sectionBlock}>
          <RewardsTimeline />
        </div>
        <div className={styles.sectionBlock}>
          <RecentActivityList />
        </div>
        <div className={styles.sectionBlock}>
          <QuickActionsGrid />
        </div>
        <div className={styles.sectionBlock}>
          <OverviewStats />
        </div>
      </div>
    </div>
  );
}