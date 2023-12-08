



import { 
  Link,
    NavLink, useLoaderData } from "react-router-dom";

const Avon = () => {
   const lorealLoader = useLoaderData()

   const filteredProducts = lorealLoader.filter(product => product.brand === "Avon");

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
    <img src="https://asset20.ckassets.com/blog/wp-content/uploads/sites/5/2017/01/ooppooo.png" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://3.bp.blogspot.com/-m-mzsrkHn7s/WsjgxgIXtbI/AAAAAAABssE/aRK5e7yc8QoAW-r0OAz7khJCrL9i_KL4ACEwYBhgL/s1600/Avon%2BSpring%2Bluxuries%2B7%2Bpiece%2Bcollection%252C%2B5%2BAvon%2BProducts%2Bto%2BTry%2Bthis%2BSpring%2B1.jpg" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZHuwUbv-0osjBguGpCJX-kcpj0nbNwGV0LQ&usqp=CAU" className="w-full" />
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

export default Avon;
