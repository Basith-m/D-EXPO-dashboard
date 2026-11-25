import Image from 'next/image';
import styles from './Avatar.module.css';

export default function Avatar({
  src,
  alt,
  initials = 'U',
  size = 40,
  ring = false,
  className = '',
}) {
  return (
    <div
      className={`${styles.avatar} ${ring ? styles.ring : ''} ${className}`}
      style={{
        width: size,
        height: size,
        fontSize: Math.max(12, Math.round(size * 0.34)),
      }}
      aria-label={!src ? alt : undefined}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={`${size}px`}
          className={styles.image}
        />
      ) : (
        <span aria-hidden="true">{initials}</span>
      )}
    </div>
  );
}