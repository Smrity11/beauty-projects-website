import  { useState } from 'react';
import Banner from "../components/Banner";
import ExtraSection from "../components/ExtraSection";
import Brand from "../layout/Brand";
import Shipping from "../layout/Shipping";
import SpecialProduct from "../layout/SpecialProduct";


const Home = () => {
  const [isDarkMode, setDarkMode] = useState(false);



  const toggleMode = () => {
    setDarkMode(!isDarkMode);
  };

  const onCheck = () => {
    toggleMode();
  };


//   const toggleMode = () => {
//     setDarkMode(!isDarkMode);
//   };
//   const onCheck = (e) => {
//     toggleMode();
//   };
  return (
    <div className={`home-container App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <button className="toggle-button absolute z-10 p-3" onClick={toggleMode}>
      <input checked={isDarkMode}
            onChange={onCheck}  type="checkbox" className="toggle toggle-error "  />
       
      </button>
      <Banner />
      <Shipping />
      <Brand />
      <ExtraSection />
      <SpecialProduct />
    </div>
  );
};

export default Home;
