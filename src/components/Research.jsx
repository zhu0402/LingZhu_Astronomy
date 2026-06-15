// src/components/Research.jsx
import React, { useState } from 'react';
import ResearchItem from './ResearchItem';
import ScrollReveal from './ScrollReveal';
import { useTranslation } from '../hooks/useTranslation'; // Implementation note.

export default function Research() {
  const [visibleCount, setVisibleCount] = useState(2);
  
  // Implementation note.
  const { research: researchConfig, researchData, isEnglish } = useTranslation();

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 2);
  };

  return (
    <div className="flex flex-col" id="research">
      {/* Internal layout marker. */}
      {researchData.slice(0, visibleCount).map((item, index) => (
        <ScrollReveal key={item.id} delay={index * 100}>
          <ResearchItem
            index={index}
            {...item}
            isEnglish={isEnglish} // Implementation note.
            sectionTitle={researchConfig.sectionTitle}
            exploreText={researchConfig.exploreText}
            linkText={researchConfig.linkText}
            readMoreText={researchConfig.readMoreText}
            readLessText={researchConfig.readLessText}
            isLastVisible={index === visibleCount - 1}
            hasMore={visibleCount < researchData.length}
            onLoadMore={handleLoadMore}
          />
        </ScrollReveal>
      ))}
    </div>
  );
}
