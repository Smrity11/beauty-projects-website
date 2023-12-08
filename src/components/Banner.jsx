

const Banner = () => {
    return (
        <div className="relative " style={{backgroundImage: 'url(https://i.ibb.co/HDfPsJb/1000-F-177831762-EQWTN0-Bg-IKc-Snxds3-KQ54o7o6-Gw6-W4ob-removebg-preview.png)',
        backgroundRepeat: "no-repeat" ,
        backgroundSize:'100%'}}>
            <div className="grid grid-cols-1 md:grid-cols-2 md:h-[480px] items-center " >
                <div className="pt-10 md:pt-0 space-y-4 px-3 md:px-14">
                <h1 className="text-2xl uppercase font-bold text-black">take time for yourself today</h1>
                <div className=" w-16 h-4 border-b-2 border-[#ffbf47]"></div>
                <p className="mt-[100px] md:leading-loose text-slate-600">Inspired by apothecary know-how, we always strive to source ingredients that respect the environment. We focus on quality to respect the skin, and priority is always given to those that are made in France.In recent years, the cosmetics and beauty industry has made significant strides towards inclusivity.  </p>
                </div>
                <div className="">
                
                    <img className="mt-20 md:mt-0 md:h-[480px] w-full" src="https://wgl-demo.net/nuage/wp-content/uploads/2021/07/slider-img-5.png"></img>
                </div>
            </div>
        </div>
    );
};

export default Banner;