import React from 'react';
import styles from './ShowcaseCard.module.scss';

interface Props {
  title: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
  githubUrl: string;
}

const ShowcaseCard: React.FC<Props> = ({
  title,
  description,
  imageUrl,
  demoUrl,
  githubUrl
}) => {
  return (
    <div className={styles.showcaseCard}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={title} className={styles.image} />
      </div>
      <a href={demoUrl} className={styles.demoLink}>
        Demo
      </a>
      <a href={githubUrl} className={styles.githubLink}>
        GitHub
      </a>
    </div>
  );
};

export default ShowcaseCard;
