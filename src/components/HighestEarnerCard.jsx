import Image from 'next/image';
import Avatar from '@/components/common/Avatar';
import { highestEarners } from '@/data/dashboardData';
import styles from './HighestEarnerCard.module.css';

export default function HighestEarnerCard() {
  return (
    <section
      className={styles.card}
      aria-labelledby="highest-earner-heading"
    >
      <div className={styles.header}>
        <div className={styles.trophyBox} aria-hidden="true">
          <Image
            src="/icons/trophy.svg"
            alt=""
            width={22}
            height={22}
            unoptimized
            className={styles.trophyIcon}
          />
        </div>

        <div>
          <h2 id="highest-earner-heading" className={styles.title}>
            Highest Earner
          </h2>
          <p className={styles.period}>{highestEarners.period}</p>
        </div>
      </div>

      <ol className={styles.list}>
        {highestEarners.list.map((earner) => (
          <li key={earner.code} className={styles.row}>
            <div className={styles.left}>
              <span className={`${styles.rankNumber} tabular-nums`}>
                {earner.rank}
              </span>

              <Avatar
                src={earner.avatar}
                alt={earner.name}
                initials={earner.initials}
                size={36}
                className={styles.earnerAvatar}
              />

              <div className={styles.identity}>
                <p className={styles.name}>{earner.name}</p>
                <p className={styles.code}>{earner.code}</p>
              </div>
            </div>

            <div className={styles.right}>
              <strong className={`${styles.amount} tabular-nums`}>
                {earner.amount}
              </strong>
              <span
                className={`${styles.rankBadge} ${
                  earner.rank === 1 ? styles.rankBadgeFirst : ''
                } tabular-nums`}
              >
                #{earner.rank}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}