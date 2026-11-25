import styles from './Card.module.css';

export default function Card({
  as: Component = 'section',
  noPadding = false,
  className = '',
  children,
  ...props
}) {
  return (
    <Component
      className={`${styles.card} ${noPadding ? styles.noPadding : ''} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}