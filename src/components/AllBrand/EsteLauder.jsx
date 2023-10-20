



import { 
    NavLink, useLoaderData } from "react-router-dom";

const EsteLauder = () => {
   const lorealLoader = useLoaderData()

   const filteredProducts = lorealLoader.filter(product => product.brand === "Estée Lauder");

   return (
     <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
       {filteredProducts.map(product => (
         <div key={product._id} className="card bg-base-100 shadow-xl">
           <figure className="px-2 pt-10">
             <img
               src={product.image}
               alt={product.name}
               className="rounded-xl"
             />
           </figure>
           <div className="card-body items-center text-center">
             <h2 className="card-title">Name: {product.name}</h2>
             <h2 className="card-title">Brand name: {product.brand}</h2>
             <div className="flex justify-between gap-12">
               <p>Type: {product.type}</p>
               <p>Price: {product.price}</p>
             </div>
             <div className="flex justify-between gap-12">
               <p>Ratings: {product.rating}</p>
               <NavLink to={`/product/${product._id}`} className="underline">See Details</NavLink>
             </div>
             <div className="card-actions">
               <button className="btn btn-primary">Update</button>
             </div>
           </div>
         </div>
       ))}
     </div>
   );
};

export default EsteLauder;
