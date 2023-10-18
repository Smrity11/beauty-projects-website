import { useContext,  } from "react";
import { Link, useNavigate } from "react-router-dom";

import { updateProfile } from "firebase/auth";

import swal from "sweetalert";
import { AuthContext } from "../providers/authProvider";


const Register = () => {

  const { createUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;

    const email = form.email.value;

    const password = form.password.value;
    const photo = form.photo.value;

      const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    const isPasswordValid = passwordRegex.test(password);
    if (isPasswordValid) {
      console.log("Invalid password. Please check the requirements.");
      
    }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        profileUpdate(name, photo, createdUser);
        navigate("/");
        if (createdUser) {
          swal("Welcome", "Registration successfully", "success");
        }
      })
      .catch((error) => {
        if (error) {
          swal("Failed", " Please fill out all field ", "error");
        }
      });
  };

  const profileUpdate = (name, photo, createdUser) => {
    updateProfile(createdUser, {
      displayName: name,
      photoURL: photo,
    })
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    
        <div className="  w-full mx-auto ">
        <h2 className="text-3xl font-semibold text-center">Register Please</h2>
          <div className="card-body mx-auto  md:w-2/4">
            <form onSubmit={handleRegister}>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your Names"
                  className="input input-bordered "
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Enter Your Photo URL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="text"
                  required
                  placeholder="Your Email"
                  className="input input-bordered "
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  required
                  placeholder="password"
                  className="input input-bordered"
                />
              
              </div>
              <div className="flex justify-between items-center">
              <div>
              <input required type="checkbox" /> <span>Accept Term & Conditions</span>
              </div>

<div className="mt-3">
    <small> Have an Account? </small>
    <Link to="/login" className=" underline text-blue-500">
      Login
    </Link>
  </div>
              </div>
              <div className="form-control mt-6">
              
             <div className="form-control mt-6"></div>
                <button className="btn border-none text-black">
                  Register
                </button>
              </div>
            </form>
       
          
          </div>
        </div>
      
  );
};

export default Register;

