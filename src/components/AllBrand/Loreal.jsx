import { 
     NavLink } from "react-router-dom";

const Loreal = () => {
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure className="px-2 pt-10">
          <img
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Name : </h2>
          <h2 className="card-title">Brand name :</h2>
         <div className="flex justify-between  gap-12">
         <p>type :</p>
          <p>price :</p>
         
         </div>
          <div className="flex  justify-between gap-12">
          <p>ratings :</p>
          <NavLink className="underline">See Details</NavLink>
          </div>
          <div className="card-actions ">
          <button className="btn btn-primary">Update</button>
         
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loreal;
