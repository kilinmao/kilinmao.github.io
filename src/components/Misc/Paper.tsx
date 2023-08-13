import React from 'react';
import PaperCards from '../ParperCards/PaperCards';
import Text from "../Text"


const Paper: React.FC = () => {
  const papers = [
    {
      title: '[Thesis] Deep Learning 3D Reconstruction of Icosahedral Meshes from Single Images',
      description: 'Proposed the TL embedding network, which is mainly composed of a generative network and a predictive network. Used an autoencoder to learn the embedding of 3D models and introduced a deterministic function through ConvNets to convert images into learned embeddings.',
      pdfUrl: 'https://drive.google.com/file/d/1Uvxg3Cn_qvG9Fs6uy7ENAxtUJOOx5l8o/view',
      imageUrl: '/public/images/thesis.png',
      },
        {
      title: '[Project] Integration of Obstacle Avoidance into ROS Navigation Stack',
      description: 'Implemented state-of-the-art obstacle avoidance methods (MPC, TEB, CADRL, and RLCA) within the ROS navigation stack, developed interfaces to integrate obstacle avoidance with existing ROS planners',
      pdfUrl: 'https://drive.google.com/file/d/1WvSDuQfi0kVgrHgfxdrgxkbaFtFTio3q/view?pli=1',
      imageUrl: '/public/images/vis.png',
    },
    {
      title: '[Project] Graph-based Roof Classification using GNN Models',
      description: 'Preprocessed dataset of spatial vector maps and applied Graph Isomorphism Network (GIN) and other GNN models (DiffPool, DiffSort, PHTCHY-SAN, and DGCNN) for roof classification tasks.',
      pdfUrl: 'https://drive.google.com/file/d/1xof5VazDZKDSvZCckI7eojW7jzsLRfRk/view',
      imageUrl: '/public/images/roof.png',
    },
  ];

  return (
      <div className="App">
                         <Text subtitle className="mb-5 md:!text-4xl text-3xl w-full px-3 !font-medium">
                Thesis & Projects
          </Text>
          <hr className='border-1 mb-5 w-[98%] mx-auto' />
      <PaperCards papers={papers} />
    </div>
  );
};

export default Paper;
