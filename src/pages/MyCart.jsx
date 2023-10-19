import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
  const lodedCosmetics = useLoaderData();
  const [cosmetics, setCosmetic] = useState(lodedCosmetics);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cosmetics/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = cosmetics.filter((cos) => cos._id !== _id);
              setCosmetic(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="grid md:grid-cols-2 gap-10 md:px-24 my-20">
      {cosmetics.map((cosmetic) => (
        <div
          key={cosmetic._id}
          className="card card-side bg-base-100 shadow-xl"
        >
          <figure>
            <img src={cosmetic.photo} alt="Movie" />
          </figure>
          <div className="flex justify-between w-full pr-4 items-center">
            <div className="space-y-3 ml-3">
              <h2 className="card-title">name: {cosmetic.name}</h2>
              <p>{cosmetic.price}</p>
              <p>{cosmetic.rating}</p>
            </div>
            <div className="card-actions justify-end">
              <div className="btn-group btn-group-vertical space-y-4">
                <button className="btn btn-active">View</button>
                <Link to={`/updatecosmetics/${cosmetic._id}`}>
                  <button className="btn btn-active">Update</button>
                </Link>
                <button
                  onClick={() => handleDelete(cosmetic._id)}
                  className="btn btn-active"
                >
                  X
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyCart;
