import React, { useState, useEffect, useRef } from 'react';
import styles from './SupportSearchHero.module.css';

const STORAGE_KEY = 'searchHistory';

const SupportSearchHero = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef(null);

  // 로컬스토리지에서 검색어 불러오기
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    setHistory(stored);
  }, []);

  // 바깥 클릭 시 추천창 닫기
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 검색 실행 (Enter 키 눌렀을 때)
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const keyword = input.trim();
      if (!keyword) return;

      let updated = history.filter((item) => item !== keyword);
      updated.unshift(keyword);
      if (updated.length > 5) updated = updated.slice(0, 5);

      setHistory(updated);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (keyword) => {
    setInput(keyword);
    setShowSuggestions(false);
  };

  const handleClearHistory = () => {
    setHistory([]);
    localStorage.removeItem(STORAGE_KEY);
    setShowSuggestions(false);
  };

  return (
    <section className={styles.searchHero}>
      <h1>자주 묻는 질문</h1>
      <div className={styles.searchBarWrapper} ref={wrapperRef}>
        <input
          type="text"
          placeholder="무엇이든 찾아보세요"
          className={styles.searchBar}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onKeyDown={handleKeyDown}
        />
        {showSuggestions && history.length > 0 && (
          <div className={styles.searchSuggestions}>
            <div className={styles.suggestionHeader}>
              <span>최근 검색어</span>
              <button onClick={handleClearHistory}>전체 삭제</button>
            </div>
            <ul>
              {history.map((item, index) => (
                <li key={index} onClick={() => handleSuggestionClick(item)}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default SupportSearchHero;
