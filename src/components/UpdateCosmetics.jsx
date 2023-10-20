
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCosmetics = () => {
    const cosmetic =useLoaderData()
    const{_id,name,brand,type,price,description,rating,photo} = cosmetic
  
   console.log(cosmetic)

    const handleForm = e =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const brand = form.brandname.value
        const type = form.type.value
        const price = form.price.value
        const description = form.description.value
        const rating = form.rating.value
        const photo = form.photo.value
        const UpdateCosmetics={name,brand,type,price,description,rating,photo}
        console.log(UpdateCosmetics);

        // send data to the server
        fetch(`http://localhost:5000/allproducts/${_id}` ,{
            method:"PUT",
            headers:{
                "content-type" : "application/json"
            },
            body:JSON.stringify(UpdateCosmetics)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    tittle:'success',
                    text: 'product updated successfully',
                    icon:'success',
                    confirmButtonText:'Cool'
                })
            }
        })
    }
  
    return (
        <div className="bg-[#F4F3F0] md:p-24">
        <h2 className="text-3xl">Update a Product</h2>
        <form onSubmit={handleForm}>
          <div className="flex gap-7 mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                
                <input
                defaultValue={name}
                name="name"
                  type="text"
                  placeholder="enter Cosmetic name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Brand</span>
            </label>
            <label className="input-group">
              <input
              defaultValue={brand}
                name="brandname"
                type="text"
                placeholder="enter type"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          </div>
          <div className="flex gap-7 mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <label className="input-group">
                
                <input
                defaultValue={type}
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
                defaultValue={photo}
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
                defaultValue={price}
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
                defaultValue={rating}
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
                defaultValue={description}
                  name="description"
                  type="text"
                  placeholder="description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <input type="submit" value='Update product' className="btn btn-block"></input>
        </form>
      </div>
    );
};

export default UpdateCosmetics;