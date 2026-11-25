import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, MapPin } from 'lucide-react';
import Card from '@/components/common/Card';
import { featuredProperty } from '@/data/dashboardData';
import styles from './PropertyFeatureCard.module.css';

export default function PropertyFeatureCard() {
  return (
    <Card noPadding aria-labelledby="featured-property-title">
      <div className={styles.wrapper}>
        <div className={styles.mediaBox}>
          {featuredProperty.image && (
            <Image
              src={featuredProperty.image}
              alt={`${featuredProperty.name} aerial view`}
              fill
              sizes="(max-width: 820px) 100vw, 360px"
              className={styles.image}
              priority
            />
          )}
          <div className={styles.mediaOverlay} aria-hidden="true" />
          <span className={styles.flagshipBadge}>{featuredProperty.badge}</span>
        </div>

        <div className={styles.content}>
          <h2 id="featured-property-title" className={styles.title}>
            {featuredProperty.name}
          </h2>

          <p className={styles.location}>
            <MapPin size={14} className={styles.locationIcon} aria-hidden="true" />
            <span>{featuredProperty.location}</span>
          </p>

          <dl className={styles.statsGrid}>
            {featuredProperty.stats.map((stat) => (
              <div key={stat.label} className={styles.statItem}>
                <dd className={`${styles.statValue} tabular-nums`}>
                  {stat.value}
                </dd>
                <dt className={styles.statLabel}>{stat.label}</dt>
              </div>
            ))}
          </dl>

          <Link href="#property-details" className={styles.ctaBtn}>
            <span>View Property Details</span>
            <ChevronRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </Card>
  );
}