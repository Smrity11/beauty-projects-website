import { useEffect, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const Brand = () => {
    const [brand ,setBrand ] = useState([])
    useEffect(() => {
        fetch('/brand.json')
        .then(res => res.json())
        .then(data => setBrand(data))
    }
    ,[])
    return (
       <div >
       <div className="text-center mt-32 mb-12">
        <h1 className="text-3xl font-bold">Popular Brands</h1>
        <div className="flex gap-2 justify-center">
      <p className="border-b-4 border-b-[#ffbf47] w-[100px]"></p>
      <AiFillCheckCircle className="text-[#ffbf47]"></AiFillCheckCircle>
      <p className="border-b-4 border-b-[#ffbf47] w-[100px]"></p>
    </div>
        <p className="md:w-[790px] mx-auto text-sm text-gray-500 mt-4">Cosmetics and beauty products have become essential components of modern self-care and personal expression. From skincare routines that nurture the skin to makeup products that enhance individual features, the cosmetics and beauty industry offers a vast array of options to cater to diverse needs and styles.</p>
       </div>
         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1 my-[60px] justify-center items-center mx-auto ">
          {
            brand.map(brandData => <div key={brandData.id}>
  
  
  <div className="max-w-xs w-full bg-gray-100 p-4 m-4 rounded-lg shadow-md mx-auto">
  <div className="text-center mt-4">
    <h1 className="text-xl font-semibold">{brandData?.brand}</h1>
    <p className="text-gray-600">{brandData?.type}</p>
    <div className="border-b-2 border-[#ffbf47] my-4 mx-auto w-8"></div>
  </div>
  <div className="bg-gray-200 p-2 rounded-md overflow-hidden">
    <img
      src={brandData.image}
      alt="Katrina"
      className="w-full h-52 object-cover transform transition-transform hover:scale-110"
    />
  </div>
</div>
  
                </div>)
           }
          </div>
       </div>
    );
};

export default Brand;
