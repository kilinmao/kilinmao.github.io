import React from 'react';
import PaperCard, { PaperCardProps } from './PaperCard';



interface PaperCardsProps {
  papers: PaperCardProps[];
}

const PaperCards: React.FunctionComponent<PaperCardsProps> = ({ papers }) => {
  return (
    <div>
      {papers.map((paper, index) => (
        <PaperCard key={index} title={paper.title} description={paper.description} pdfUrl={paper.pdfUrl} imageUrl={paper.imageUrl} />
      ))}
    </div>
  );
}

export default PaperCards;
