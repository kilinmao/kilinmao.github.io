// ShowcaseCards.tsx

import React from 'react';
import ShowcaseCard from './ShowcaseCard';
import styles from './ShowcaseCards.module.scss';

const ShowcaseCards: React.FC = () => {
  const cards = [
    {
      title: 'My Project 1',
      description: 'A cool project I have been working on.',
      imageUrl: 'https://via.placeholder.com/150',
      demoUrl: 'https://example.com/demo1',
      githubUrl: 'https://github.com/user/example-repo1',
    },
    {
      title: 'My Project 2',
      description: 'Another cool project I have been working on.',
      imageUrl: 'https://via.placeholder.com/150',
      demoUrl: 'https://example.com/demo2',
      githubUrl: 'https://github.com/user/example-repo2',
    },
    // More projects ...
  ];

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
