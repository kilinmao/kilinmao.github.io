import React from 'react';
import ShowcaseCards from '../ShowcaseCards/ShowcaseCards';
import Text from "../Text"


const Showcase: React.FC = () => {
  const cards = [
    {
        title: 'Shader',
        imageUrl: '/public/images/shader.png',
        demoUrl: 'https://kilinmao.github.io/shader/',
        githubUrl:'https://github.com/kilinmao/shader',
      
    },
    {
      title: 'Texture',
      imageUrl: '/public/images/texture.png',
      demoUrl: 'https://kilinmao.github.io/texture/',
      githubUrl: 'https://github.com/kilinmao/texture',
      },
        {
            title: 'Ray Trace',
                  imageUrl: '/public/images/ray-trace.png',
      demoUrl: 'https://kilinmao.github.io/ray-trace/',
      githubUrl: 'https://github.com/kilinmao/ray-trace',        
      },
                {
            title: 'Spatial Data Structures',
                  imageUrl: '/public/images/kd-tree.png',
      demoUrl: 'https://kilinmao.github.io/Spatial-Data-Structures/',
      githubUrl: 'https://github.com/kilinmao/Spatial-Data-Structures/',        
    },
   
   
  ];

  return (
      <div>
                       <Text subtitle className="mb-5 md:!text-4xl text-3xl w-full px-3 !font-medium">
                    Showcase
          </Text>
          <hr className='border-1 mb-5 w-[98%] mx-auto' />
      <ShowcaseCards cards={cards} />
    </div>
  );
};

export default Showcase;
