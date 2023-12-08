


import { 
  Link,
    NavLink, useLoaderData } from "react-router-dom";

const Dior = () => {
   const lorealLoader = useLoaderData()

   const filteredProducts = lorealLoader.filter(product => product.brand === "Dior");

   return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center">
  <div className="space-y-6 p-8 lg:px-3">
<h1 className="text-4xl font-bold "> All of todays best <span className=" font-extrabold text-amber-600">selling</span> products</h1>
<p className="text-2xl font-semibold">clients testimonials</p>
<p className="text-slate-500 leading-7">Fear is huge issue for me .This technique .This brand has is really smart way to literally set those fears aside ... That to me ,is  unleasing the product whithin .Through brand products work, I found my strength</p>
  </div>
  <div className="col-span-2">
  <div className="carousel w-full h-[450px] ">
  <div id="item1" className="carousel-item w-full">
    <img src="https://www.dior.com/couture/var/dior/storage/images/38009467/8-eng-CH/01-cover-exceptional-holiday-coffrets2_1440_1200.jpg" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://www.dior.com/couture/var/dior/storage/images/horizon/beauty/skincare/the-collections/dior-prestige/1-cover-dior-prestige-2022-august/35955339-1-int-EN/1-cover-dior-prestige-2022-august_1440_1200.jpg" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://media.herworld.com/public/2020/12/dior-beauty.jpg" className="w-full" />
  </div> 
 
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
 
</div>
  </div>
</div>



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
               <NavLink to={`/productdetails/${product._id}`} className="underline">See Details</NavLink>
             </div>
             <div className="card-actions">
              <Link to={`/updatecosmetics/${product._id}`}>
                  <button className="btn btn-active">Update</button>
                </Link>
              </div>
           </div>
         </div>
       ))}
     </div>
    </div>
   );
};

export default Dior;
