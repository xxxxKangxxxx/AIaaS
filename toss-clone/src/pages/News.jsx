import React from 'react';
import NewsHeader from '../components/news/NewsHeader';
import Pagination from '../components/news/Pagination';
import NewsFooter from '../components/news/NewsFooter'
import NewsMain from '../components/news/NewsMain';
import styles from './News.module.css';

const News = () => {
  return (
    <div className={styles.newsPageWrapper}>
      <NewsHeader />
      <NewsMain />
      <Pagination />
      <NewsFooter />
    </div>
  );
};

export default News;
