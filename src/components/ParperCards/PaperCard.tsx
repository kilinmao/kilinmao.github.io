import React from 'react';
import styles from './paperCard.module.scss';
import { Image,  } from "../../components";
import { ImageSize } from '../../shared/enums';

export interface PaperCardProps {
  title: string;
  description: string;
  pdfUrl: string;
  imageUrl: string;
}

const PaperCard: React.FunctionComponent<PaperCardProps> = ({ title, description, pdfUrl, imageUrl }) => {
  return (
    <div className={styles.paperCardContainer}>
      <div className={styles.leftContent}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <a className={styles.pdfLink} href={pdfUrl} target="_blank" rel="noreferrer">
          View PDF
        </a>
      </div>
      <div className={styles.rightContent}>
              <Image
                  src={imageUrl}
          alt={title}
          size={ImageSize.MEDIUM}
                  className="my-5"
                />
      </div>
    </div>
  );
}

export default PaperCard;
