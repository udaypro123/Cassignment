
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Analytices from './components/body/bodysection/Analytices';
import Customization from './components/body/bodysection/Customization';
import MarketingAuto from './components/body/bodysection/MarketingAuto';
import MobileApp from './components/body/bodysection/MobileApp';
import Performance from './components/body/bodysection/Performance';
import PredSales from './components/body/bodysection/PredSales';
import Processmanage from './components/body/bodysection/Processmanage';
import Security from './components/body/bodysection/Security';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Homepage from './components/homepage/Homepage';


function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<>
          <div className="App">
            <Header />
            <Processmanage />
            <Analytices />
            <Performance />
            <PredSales />
            <Customization />
            <MarketingAuto />
            <MobileApp />
            <Security />
            <Footer />
          </div>
        </>}></Route>
        
        <Route path="/home" element={<Homepage />}></Route>
      </Routes>
    </>
  );
}

export default App;
