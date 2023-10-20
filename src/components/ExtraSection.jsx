import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ExtraSection = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-8 mb-10">
      <div>
        <h2 className="text-3xl font-bold text-center my-12">
          {" "}
          Top Categories{" "}
        </h2>
        <Slider {...settings}>
          <div className="mx-4 shadow-lg h-[200px]">
            <img
              className="w-28 h-28 mx-auto mt-10 rounded-full"
              src="https://cdn.wallpapersafari.com/47/23/MNptdX.jpg"
              alt=""
            />
          </div>

          <div className="mx-4 shadow-lg h-[200px]">
            <img
              className="w-28 h-28 mx-auto mt-10 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlouCXdvnY3YqMYgWYLBuG-O3ktxOiZ7JcAg&usqp=CAU"
              alt=""
            />
          </div>
          <div className="mx-4 shadow-lg h-[200px]">
            <img
              className="w-28 h-28 mx-auto mt-10 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-LOnn9fjraUTUd_vWakZHcKulEaV7BXrnNQ&usqp=CAU"
              alt=""
            />
          </div>
          <div className="mx-4 shadow-lg h-[200px]">
            <img
              className="w-28 h-28 mx-auto mt-10 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyTkr90O0aiP1hkbkeXjgSQhbMBXFPkofMww&usqp=CAU"
              alt=""
            />
          </div>
          <div className="mx-4 shadow-lg h-[200px]">
            <img
              className="w-28 h-28 mx-auto mt-10 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrvxWV529cAkftMVHYIA3GJDYujRFh-8qixQ&usqp=CAU"
              alt=""
            />
          </div>
          <div className="mx-4 shadow-lg h-[200px]">
            <img
              className="w-28 h-28 mx-auto mt-10 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShm9S06ygattXjsLcjR5xzkHh9qMK2gs1nlQ&usqp=CAU"
              alt=""
            />
          </div>
          <div className="mx-4 shadow-lg h-[200px]">
            <img
              className="w-28 h-28 mx-auto mt-10 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlUnCEh_jpImoF94GAOjYxylR3QVhArv3aEQ&usqp=CAU"
              alt=""
            />
          </div>
          <div className="mx-4 shadow-lg h-[200px]">
            <img
              className="w-28 h-28 mx-auto mt-10 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQscxGfuDOgOomtwSeGKZSSEJgPQ3L55zSt7w&usqp=CAU"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ExtraSection;
