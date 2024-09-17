import styles from './Card.module.scss';

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

export const Card = ({ imageSrc, title, description }: CardProps) => {
  return (
    <figure className={styles.card}>
      <img
        src={imageSrc}
        alt={title}
        loading="lazy"
        className={styles.cardImage}
      />
      <figcaption className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </figcaption>
    </figure>
  );
};
