// src/pages/SupportSearch.jsx
import React from 'react';
import SupportSearchHeader from '../components/support_search/SupportSearchHeader';
import SupportSearchHero from '../components/support_search/SupportSearchHero';
import SupportSearchCategory from '../components/support_search/SupportSearchCategory';
import SupportSearchList from '../components/support_search/SupportSearchList';
import SupportFooter from '../components/support/SupportFooter';

const SupportSearch = () => {
  return (
    <>
      <SupportSearchHeader />
      <SupportSearchHero />
      <SupportSearchCategory />
      <SupportSearchList />
      <SupportFooter />
    </>
  );
};

export default SupportSearch;
