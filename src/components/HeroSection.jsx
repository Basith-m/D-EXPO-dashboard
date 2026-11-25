import { ChevronRight, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Avatar from '@/components/common/Avatar';
import { heroBalances, promoterProfile } from '@/data/dashboardData';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <header className={styles.heroSection}>
      <div className={styles.heroBackdrop} aria-hidden="true" />

      <Navbar />

      <div className={styles.heroInner}>
        <div className={styles.leftColumn}>
          <p className={styles.locationRow}>
            <MapPin size={15} className={styles.locationPin} aria-hidden="true" />
            <span>{promoterProfile.location}</span>
          </p>

          <h1 className={styles.greeting}>
            Welcome back, <strong>{promoterProfile.name}</strong>
          </h1>

          <div className={styles.balanceGrid} aria-label="Account balances">
            {heroBalances.map((item) => (
              <div key={item.id} className={styles.balanceCard}>
                <p className={styles.balanceLabel}>{item.label}</p>
                <p className={`${styles.balanceValue} tabular-nums`}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <section
          className={styles.profileCard}
          aria-label="Promoter profile and total income"
        >
          <div className={styles.profileTop}>
            <div className={styles.profileIdentity}>
              <Avatar
                src={promoterProfile.avatar}
                alt={promoterProfile.name}
                initials={promoterProfile.initials}
                size={54}
                ring
              />
              <div>
                <p className={styles.profileLocation}>
                  <MapPin size={12} aria-hidden="true" />
                  <span>{promoterProfile.location}</span>
                </p>
                <h2 className={styles.profileName}>{promoterProfile.name}</h2>
              </div>
            </div>

            <div className={styles.incomeBlock}>
              <p className={styles.incomeLabel}>Total Income</p>
              <p className={`${styles.incomeValue} tabular-nums`}>
                {promoterProfile.totalIncome}
              </p>
              <p className={styles.incomeTrend}>{promoterProfile.earningsTrend}</p>
            </div>
          </div>

          <div className={styles.profileBottom}>
            <div className={styles.metaStack}>
              <div className={styles.metaRow}>
                <span className={styles.promoterCode}>
                  {promoterProfile.code}
                </span>
                {promoterProfile.badges.map((badge) => (
                  <span key={badge} className={styles.statusPill}>
                    {badge}
                  </span>
                ))}
              </div>
              <span className={styles.rolePill}>{promoterProfile.role}</span>
            </div>

            <button type="button" className={styles.withdrawBtn}>
              <span>Withdraw</span>
              <ChevronRight size={16} aria-hidden="true" />
            </button>
          </div>
        </section>
      </div>
    </header>
  );
}