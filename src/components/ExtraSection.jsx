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
          Slider for Asia{" "}
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
              src="https://cdn.vox-cdn.com/thumbor/d4cdzO7DHNcwZxIelICHbV0rC2I=/0x0:1123x634/1400x788/filters:focal(473x228:651x406):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/55560387/Screen_Shot_2017_07_03_at_3.46.31_PM.0.png"
              alt=""
            />
          </div>
          <div className="mx-4 shadow-lg h-[200px]">
            <img
              className="w-28 h-28 mx-auto mt-10 rounded-full"
              src="https://c4.wallpaperflare.com/wallpaper/294/301/212/5bd4632ea45fa-wallpaper-preview.jpg"
              alt=""
            />
          </div>
          <div className="mx-4 shadow-lg h-[200px]">
            <img
              className="w-28 h-28 mx-auto mt-10 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKyMYkyLk-tjkSNZcIPAOUc-EHJzOn2nf-hQ&usqp=CAU"
              alt=""
            />
          </div>
          <div className="mx-4 shadow-lg h-[200px]">
            <img
              className="w-28 h-28 mx-auto mt-10 rounded-full"
              src="https://wallpapers.com/images/hd/alone-boy-pictures-ccpuemdixiqzwl2b.jpg"
              alt=""
            />
          </div>
          <div className="mx-4 shadow-lg h-[200px]">
            <img
              className="w-28 h-28 mx-auto mt-10 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4VMNe1RS2T6LpQqq3FIxAm8_nW7cuURUap1aDAeytC1MlYPabyg3i14xWtEO8b_N0PfI&usqp=CAU"
              alt=""
            />
          </div>
          <div className="mx-4 shadow-lg h-[200px]">
            <img
              className="w-28 h-28 mx-auto mt-10 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVXXOf3dJHf9bpoP6Cn9j5VERnT9zKvnct_gSfkQPhDd944_P8Umuy28h9xtKkulUd58I&usqp=CAU"
              alt=""
            />
          </div>
          <div className="mx-4 shadow-lg h-[200px]">
            <img
              className="w-28 h-28 mx-auto mt-10 rounded-full"
              src="https://cache.desktopnexus.com/thumbseg/1323/1323256-bigthumbnail.jpg"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ExtraSection;
