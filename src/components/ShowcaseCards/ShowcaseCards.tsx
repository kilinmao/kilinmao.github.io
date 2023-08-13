import React from 'react';
import ShowcaseCard, { Card } from './ShowcaseCard';
import styles from './showcaseCards.module.scss';



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
