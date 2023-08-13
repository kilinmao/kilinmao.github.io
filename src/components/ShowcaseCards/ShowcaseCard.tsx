import React from 'react';
import styles from './showcaseCard.module.scss';
import { Image,  } from "../../components";

export interface Card {
  title: string;
  description?: string;
  imageUrl: string;
  demoUrl: string;
  githubUrl: string;
}

const ShowcaseCard: React.FC<Card> = ({
  title,
  description,
  imageUrl,
  demoUrl,
  githubUrl
}) => {
  return (
    <div className={styles.showcaseCard}>
      <h3 className={styles.title}>{title}</h3>
    {description &&<p className={styles.description}>{description}</p>}
                        <Image
                  src={imageUrl}
                  alt={title}
                  className="my-5"
                />
          <div className={styles.linksContainer}>
      <a href={demoUrl} className={styles.demoLink} target="_blank">
        Demo
      </a>
      <a href={githubUrl} className={styles.githubLink} target="_blank">
        Code
              </a>
            </div>
    </div>
  );
};

export default ShowcaseCard;
