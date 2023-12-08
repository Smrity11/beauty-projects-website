import { useState } from "react";
import Swal from "sweetalert2";

const AddProduct = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
   
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const photo = form.photo.value;
    const brand = form.category.value
    const newCosmetics = {
      name,
      brand,
      type,
      price,
      description,
      rating,
      photo,
      
    };
   

    // send data to the server
    fetch("https://beauty-server-project-assignment.vercel.app/allProducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCosmetics),
    })
      .then((res) => res.json())
      .then((data) => {
    
        if (data.insertedId) {
          Swal.fire({
            tittle: "success",
            text: "product added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  const categories = ["L'Oréal", "Estée Lauder", "Chanel", "Dior", "Alcon", "Avon", "beauty glazed" ,"Louis Vuitton"];
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  return (
    <div className="bg-[#F4F3F0] md:p-24 ">
      <h2 className="text-3xl">Add a Product</h2>
      <form onSubmit={handleForm}>
        <div className="flex gap-7 mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
                name="name"
                type="text"
                placeholder="enter Cosmetic name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
          <div className="container mx-auto mt-3">
      <label className="block text-gray-700 text-sm font-bold " htmlFor="category">
        Select a Brand:
      </label>
      <select
        id="category"
        name="category"
        className="border rounded px-4 py-2 w-full"
        onChange={handleCategoryChange}
        value={selectedCategory}
        required
      >
        <option value="" disabled>Select a brand</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      {selectedCategory && <p className="mt-2 text-green-500">You selected: {selectedCategory}</p>}
    </div>
          </div>
        </div>
        <div className="flex gap-7 mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <label className="input-group">
              <input
                name="type"
                type="text"
                placeholder="enter type"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                name="photo"
                type="text"
                placeholder="enter photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="flex gap-7 mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                name="price"
                type="text"
                placeholder="enter price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Ratings</span>
            </label>
            <label className="input-group">
              <input
                name="rating"
                type="text"
                placeholder="ratings"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="form-control w-full mb-6">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <label className="input-group">
            <input
              name="description"
              type="text"
              placeholder="description"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <input
          type="submit"
          value="Add Product"
          className="btn btn-block"
        ></input>
      </form>
    </div>
  );
};

export default AddProduct;
