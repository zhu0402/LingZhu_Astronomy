import { createContext, createElement, useContext, useMemo, useState } from 'react';
import { siteContent as siteEn } from '../data/siteContent';
import { memberData as membersEn } from '../data/memberData';
import { researchData as researchEn } from '../data/researchData';
import { siteContent as siteZh } from '../data/siteContentZH';
import { memberData as membersZh } from '../data/memberDataZH';
import { researchData as researchZh } from '../data/researchDataZH';

const TranslationContext = createContext(null);

const memberLabelText = {
  en: {
    exploreText: 'Explore More Members',
    labels: {
      viewCV: 'View Personal CV',
      researchTitle: 'RESEARCH',
      placementTitle: 'PLACEMENT',
      readMore: 'Read More',
      showLess: 'Show Less',
    },
    langLabel: '中文',
  },
  zh: {
    exploreText: '探索更多成员',
    labels: {
      viewCV: '个人履历',
      researchTitle: '研究方向',
      placementTitle: '去向',
      readMore: '查看更多',
      showLess: '收起详情',
    },
    langLabel: 'EN',
  },
};

function getInitialLang() {
  if (typeof window === 'undefined') return 'zh';
  return localStorage.getItem('app_lang') || 'zh';
}

function buildTranslationValue(lang, toggleLanguage) {
  const isEnglish = lang === 'en';
  const site = isEnglish ? siteEn : siteZh;
  const membersData = isEnglish ? membersEn : membersZh;
  const researchData = isEnglish ? researchEn : researchZh;
  const text = isEnglish ? memberLabelText.en : memberLabelText.zh;

  return {
    lang,
    isEnglish,
    ...site,
    member: site.member
      ? {
          ...site.member,
          exploreText: site.member.exploreText || text.exploreText,
          labels: {
            ...text.labels,
            ...(site.member.labels || {}),
          },
        }
      : site.member,
    membersData,
    researchData,
    langLabel: text.langLabel,
    toggleLanguage,
  };
}

export function TranslationProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  const toggleLanguage = () => {
    setLang((currentLang) => {
      const nextLang = currentLang === 'en' ? 'zh' : 'en';
      if (typeof window !== 'undefined') {
        localStorage.setItem('app_lang', nextLang);
      }
      return nextLang;
    });
  };

  const value = useMemo(
    () => buildTranslationValue(lang, toggleLanguage),
    [lang]
  );

  return createElement(
    TranslationContext.Provider,
    { value },
    children
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within TranslationProvider');
  }
  return context;
}
