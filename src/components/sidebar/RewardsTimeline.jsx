import Image from 'next/image';
import { sidebarData } from '@/data/dashboardData';
import styles from './RewardsTimeline.module.css';

export default function RewardsTimeline() {
  return (
    <section aria-labelledby="rewards-heading">
      <h2 id="rewards-heading" className={styles.heading}>
        Rewards
      </h2>

      <ol className={styles.list}>
        {sidebarData.rewards.map((reward) => (
          <li key={reward.id} className={styles.item}>
            <span className={styles.marker} aria-hidden="true" />
            <div className={styles.content}>
              <div className={styles.thumbWrap}>
                {reward.image && (
                  <Image
                    src={reward.image}
                    alt={reward.title}
                    width={34}
                    height={34}
                    unoptimized
                    className={styles.thumb}
                  />
                )}
              </div>
            
              <div className={styles.textGroup}>
                <p className={styles.title}>{reward.title}</p>
                <p className={styles.milestone}>{reward.milestone}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}