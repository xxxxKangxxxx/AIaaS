// src/pages/Home.jsx
import React from 'react';
import Header from '../components/home/Header';
import MainSection from '../components/home/MainSection';
import SecondSection from '../components/home/SecondSection';
import ThirdSection from '../components/home/ThirdSection';
import FourthSection from '../components/home/FourthSection';
import FifthSection from '../components/home/FifthSection';
import SixthSection from '../components/home/SixthSection';
import SeventhSection from '../components/home/SeventhSection';
import LoanSection from '../components/home/LoanSection';
import Footer from '../components/home/Footer';
import CreditScoreSection from '../components/home/CreditScoreSectioin';
import '../styles/global.css'
import InvestmentSection from '../components/home/InvestmentSection';
import FinanceSection from '../components/home/FinanceSection';


const Home = () => {
  return (
    <>
      <div className="gradient-overlay"></div>
      <Header />
      <MainSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <LoanSection />
      <CreditScoreSection />
      <InvestmentSection />
      <FinanceSection />
      <Footer />
    </>
  );
};

export default Home;
