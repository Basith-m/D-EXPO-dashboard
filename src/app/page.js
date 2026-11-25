import HeroSection from '@/components/HeroSection';
import PropertyFeatureCard from '@/components/PropertyFeatureCard';
import MetricStrip from '@/components/MetricStrip';
import CustomerBreakdownCard from '@/components/CustomerBreakdownCard';
import LeadTrackerCard from '@/components/LeadTrackerCard';
import HighestEarnerCard from '@/components/HighestEarnerCard';
import PaymentStatusCard from '@/components/PaymentStatusCard';
import DashboardSidebar from '@/components/sidebar/DashboardSidebar';
import styles from './page.module.css';

export default function DashboardPage() {
  return (
    <div className={styles.page}>
      <HeroSection />

      <main className={styles.workspace}>
        <div className={styles.mainColumn}>
          <PropertyFeatureCard />
          <MetricStrip />
          <CustomerBreakdownCard />
          <LeadTrackerCard />

          <div className={styles.bottomSplit}>
            <HighestEarnerCard />
            <PaymentStatusCard />
          </div>
        </div>

        <aside className={styles.sidebarColumn} aria-label="Rewards, activity, and summary">
          <DashboardSidebar />
        </aside>
      </main>
    </div>
  );
}