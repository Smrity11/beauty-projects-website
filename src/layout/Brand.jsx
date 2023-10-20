import { useEffect } from "react";

import { AiFillCheckCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";

const Brand = () => {
  //  const loadedBrand =useLoaderData()
  //  console.log(loadedBrand);
  // const [brand ,setBrand ] = useState([])
  // useEffect(() => {
  //     fetch('http://localhost:5000/brand')
  //     .then(res => res.json())
  //     .then(data => setBrand(data))
  // }
  // ,[])

  useEffect(() => {
    fetch("http://localhost:5000/brand")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  // console.log(brand)

  return (
    <div>
      <div className="text-center mt-32 mb-12">
        <h1 className="text-3xl font-bold">Popular Brands</h1>
        <div className="flex gap-2 justify-center">
          <p className="border-b-4 border-b-[#ffbf47] w-[100px]"></p>
          <AiFillCheckCircle className="text-[#ffbf47]"></AiFillCheckCircle>
          <p className="border-b-4 border-b-[#ffbf47] w-[100px]"></p>
        </div>
        <p className="md:w-[790px] mx-auto text-sm text-gray-500 mt-4">
          Cosmetics and beauty products have become essential components of
          modern self-care and personal expression. From skincare routines that
          nurture the skin to makeup products that enhance individual features,
          the cosmetics and beauty industry offers a vast array of options to
          cater to diverse needs and styles.
        </p>
      </div>
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1 my-[60px] justify-center items-center mx-auto ">
        
           
              <NavLink to="/loreal">
              <div className="max-w-xs w-full bg-gray-100 p-4 m-4 rounded-lg shadow-md mx-auto">
                <div className="text-center mt-4">
                  <h1 className="text-xl font-semibold">LOréal</h1>
                  {/* <p className="text-gray-600">{brandData?.type}</p> */}
                  <div className="border-b-2 border-[#ffbf47] my-4 mx-auto w-8"></div>
                </div>
                <div className="bg-gray-200 p-2 rounded-md overflow-hidden">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjAoBx-YUvvdbwCildUEhAEVmjTWPxmbX6f7Y3XcFpVkvOBGmLBFbweKOl22oY8TZ6C9w&usqp=CAU"
                    alt="Katrina"
                    className="w-full h-52 object-cover transform transition-transform hover:scale-110"
                  />
                </div>
              </div>
              </NavLink>
              <NavLink to="/estelauder">
              <div className="max-w-xs w-full bg-gray-100 p-4 m-4 rounded-lg shadow-md mx-auto">
                <div className="text-center mt-4">
                  <h1 className="text-xl font-semibold">Estée Lauder</h1>
                  {/* <p className="text-gray-600">{brandData?.type}</p> */}
                  <div className="border-b-2 border-[#ffbf47] my-4 mx-auto w-8"></div>
                </div>
                <div className="bg-gray-200 p-2 rounded-md overflow-hidden">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS36kTaMJ5hdgf3yq8KZ--JDoo_RF4YSmEcLg&usqp=CAU"
                    alt="Katrina"
                    className="w-full h-52 object-cover transform transition-transform hover:scale-110"
                  />
                </div>
              </div>
              </NavLink>
             <NavLink to="/chanel">
             <div className="max-w-xs w-full bg-gray-100 p-4 m-4 rounded-lg shadow-md mx-auto">
                <div className="text-center mt-4">
                  <h1 className="text-xl font-semibold">Chanel</h1>
                  {/* <p className="text-gray-600">{brandData?.type}</p> */}
                  <div className="border-b-2 border-[#ffbf47] my-4 mx-auto w-8"></div>
                </div>
                <div className="bg-gray-200 p-2 rounded-md overflow-hidden">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqARSjGwsJUn9GNvImDnGSO2xSlkLbFdcUpw&usqp=CAU"
                    alt="Katrina"
                    className="w-full h-52 object-cover transform transition-transform hover:scale-110"
                  />
                </div>
              </div>
             </NavLink>
             <NavLink to="/dior">
             <div className="max-w-xs w-full bg-gray-100 p-4 m-4 rounded-lg shadow-md mx-auto">
                <div className="text-center mt-4">
                  <h1 className="text-xl font-semibold">Dior</h1>
                  {/* <p className="text-gray-600">{brandData?.type}</p> */}
                  <div className="border-b-2 border-[#ffbf47] my-4 mx-auto w-8"></div>
                </div>
                <div className="bg-gray-200 p-2 rounded-md overflow-hidden">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYgUHP-JyW3rsKKnz2NQx227Kc8_OpVqXtbw&usqp=CAU"
                    alt="Katrina"
                    className="w-full h-52 object-cover transform transition-transform hover:scale-110"
                  />
                </div>
              </div>
             </NavLink>
             <NavLink to="/beautyglazed">
             <div className="max-w-xs w-full bg-gray-100 p-4 m-4 rounded-lg shadow-md mx-auto">
                <div className="text-center mt-4">
                  <h1 className="text-xl font-semibold">beauty glazed</h1>
                  {/* <p className="text-gray-600">{brandData?.type}</p> */}
                  <div className="border-b-2 border-[#ffbf47] my-4 mx-auto w-8"></div>
                </div>
                <div className="bg-gray-200 p-2 rounded-md overflow-hidden">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAYOvtLxQe0h7GeZTGh55FOToF4q5Zw3Pdog&usqp=CAU"
                    alt="Katrina"
                    className="w-full h-52 object-cover transform transition-transform hover:scale-110"
                  />
                </div>
              </div>
             </NavLink>
             <NavLink to="/luiosvuttion">
             <div className="max-w-xs w-full bg-gray-100 p-4 m-4 rounded-lg shadow-md mx-auto">
                <div className="text-center mt-4">
                  <h1 className="text-xl font-semibold">Louis Vuitton</h1>
                  {/* <p className="text-gray-600">{brandData?.type}</p> */}
                  <div className="border-b-2 border-[#ffbf47] my-4 mx-auto w-8"></div>
                </div>
                <div className="bg-gray-200 p-2 rounded-md overflow-hidden">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUCK_0Acu_BBRPflkz5tMemcTtiDFP9K4vcw&usqp=CAU"
                    alt="Katrina"
                    className="w-full h-52 object-cover transform transition-transform hover:scale-110"
                  />
                </div>
              </div>
             </NavLink>
             <NavLink to="/alcon">
             <div className="max-w-xs w-full bg-gray-100 p-4 m-4 rounded-lg shadow-md mx-auto">
                <div className="text-center mt-4">
                  <h1 className="text-xl font-semibold">Alcon</h1>
                  {/* <p className="text-gray-600">{brandData?.type}</p> */}
                  <div className="border-b-2 border-[#ffbf47] my-4 mx-auto w-8"></div>
                </div>
                <div className="bg-gray-200 p-2 rounded-md overflow-hidden">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoHCIQbRMi0lvGV7bPoXdxTkcm9LdRuMSvCg&usqp=CAU"
                    alt="Katrina"
                    className="w-full h-52 object-cover transform transition-transform hover:scale-110"
                  />
                </div>
              </div>
             </NavLink>
             <NavLink to="/avon">
             <div className="max-w-xs w-full bg-gray-100 p-4 m-4 rounded-lg shadow-md mx-auto">
                <div className="text-center mt-4">
                  <h1 className="text-xl font-semibold">Avon</h1>
                  {/* <p className="text-gray-600">{brandData?.type}</p> */}
                  <div className="border-b-2 border-[#ffbf47] my-4 mx-auto w-8"></div>
                </div>
                <div className="bg-gray-200 p-2 rounded-md overflow-hidden">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1jIeiZH064QOcSR3ogWLwgR-E1c59clelsw&usqp=CAU"
                    alt="Katrina"
                    className="w-full h-52 object-cover transform transition-transform hover:scale-110"
                  />
                </div>
              </div>
             </NavLink>
          
          
       
      </div>
   
    </div>
  );
};

export default Brand;
