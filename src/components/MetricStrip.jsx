import {
  Calendar,
  Filter,
  MapPin,
  TrendingUp,
  Users,
} from 'lucide-react';
import Card from '@/components/common/Card';
import { quickMetrics } from '@/data/dashboardData';
import styles from './MetricStrip.module.css';

const iconMap = {
  users: Users,
  filter: Filter,
  mapPin: MapPin,
  calendar: Calendar,
  trending: TrendingUp,
};

export default function MetricStrip() {
  return (
    <Card className={styles.card} aria-label="Key performance metrics">
      <ul className={styles.grid}>
        {quickMetrics.map((metric) => {
          const IconComponent = iconMap[metric.icon] || Users;

          return (
            <li key={metric.id} className={styles.item}>
              <span
                className={`${styles.iconTile} ${styles[metric.color]}`}
                aria-hidden="true"
              >
                <IconComponent size={18} strokeWidth={2} />
              </span>
              <span className={styles.label}>{metric.label}</span>
              <strong className={`${styles.value} tabular-nums`}>
                {metric.value}
              </strong>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}