import React from 'react';
import ShowcaseCard from './ShowcaseCard';
import styles from './showcaseCards.module.scss';

interface Card {
  title: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
  githubUrl: string;
}

interface Props {
  cards: Card[];
}

const ShowcaseCards: React.FC<Props> = ({ cards }) => {
  return (
    <div className={styles.showcaseCards}>
      {cards.map((card, index) => (
        <ShowcaseCard
          key={index}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
          demoUrl={card.demoUrl}
          githubUrl={card.githubUrl}
        />
      ))}
    </div>
  );
};

export default ShowcaseCards;
