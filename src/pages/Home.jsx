import Banner from "../components/Banner";
import Brand from "../layout/Brand";

import Shipping from "../layout/Shipping";
import SpecialProduct from "../layout/SpecialProduct";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Shipping></Shipping>
            <Brand></Brand>
            <SpecialProduct></SpecialProduct>
            
        </div>
    );
};

export default Home;