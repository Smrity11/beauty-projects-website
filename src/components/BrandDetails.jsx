import { useLoaderData } from "react-router-dom";


const BrandDetails = () => {
    const brandDataLoad = useLoaderData()
    const {singleData, image, name, price, rating, description} = brandDataLoad
    console.log(singleData)
    return (
       <>
       <h2 className="text-3xl font-bold text-center my-12 text-gray-700">Product Details</h2>
         <div className="w-full my-12 lg:w-[800px] mx-auto rounded overflow-hidden shadow-lg">
        <img 
        
        src={image} alt={name} className="w-full h-[400px]" />
  
        <div className="p-4">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
  
    <div className="flex justify-between items-center">
    <div className="px-6 py-4">
          <span className="text-gray-700 text-base">Price: {price}</span>
          <br />
          <span className="text-gray-700 text-base">Rating: {rating}</span>
        </div>
        <div className="me-8 btn btn-success normal-case">
            <button>Add to Card</button>
        </div>
    </div>
        </div>
      </div>
       </>
    );
};

export default BrandDetails;