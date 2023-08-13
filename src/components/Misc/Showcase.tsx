import React from 'react';
import ShowcaseCards from '../ShowcaseCards/ShowcaseCards';


const Showcase: React.FC = () => {
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
    <div>
      <ShowcaseCards cards={cards} />
    </div>
  );
};

export default Showcase;
