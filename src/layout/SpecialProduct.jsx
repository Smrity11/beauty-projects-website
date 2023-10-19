import 
 { useState, useEffect } from 'react';

const SpecialProduct = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 11);
  targetDate.setHours(targetDate.getHours() + 22);
  targetDate.setMinutes(targetDate.getMinutes() + 56);
  targetDate.setSeconds(targetDate.getSeconds() + 34);

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []); // Empty dependency array means the effect runs once after the initial render

  return (
        <div>
                


                <div className="relative bg-cover bg-center" style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjIKCOsd149HV2DnRXz1JikRRZLWDuvk72ag&usqp=CAU)' }}>


<div className='grid grid-cols-1 md:grid-cols-2 jus items-center px-8 md:px-24 '>
    <div className='space-y-9'>
    <h2 className='text-2xl font-bold my-2'>Glam Liquid products</h2>
    <p> $20.00</p> <span>$18.00</span>
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div className="flex flex-col p-2 bg-white  text-black-content">
    <span className="font-mono text-5xl">
      <span >{timeLeft.days}</span>
    </span>
    days
  </div> 
  <div className="flex flex-col p-2 bg-white  text-black-content">
    <span className="font-mono text-5xl">
      <span >{timeLeft.hours}</span>
    </span>
    hours
  </div> 
  <div className="flex flex-col p-2 bg-white  text-black-content">
    <span className="font-mono text-5xl">
      <span> {timeLeft.minutes}</span>
    </span>
    min
  </div> 
  <div className="flex flex-col p-2 bg-white  text-black-content">
    <span className="font-mono text-5xl">
      <span >{timeLeft.seconds}</span>
    </span>
    sec
  </div>
  
</div>
<div className='mt-6'><a className='bg-white text-bold my-4 text-black px-5 py-2 rounded'>Buy Now</a></div>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8'>
        <img className='w-[2800px] h-[250px]' src='http://demo.snstheme.com/wp/dbea/wp-content/uploads/2022/05/prod-18-640x731.jpg'></img>
        <img className='w-[2800px] h-[250px]' src='http://demo.snstheme.com/wp/dbea/wp-content/uploads/2022/05/prod-06-640x731.jpg'></img>
        <img className='w-[2800px] h-[250px]' src='http://demo.snstheme.com/wp/dbea/wp-content/uploads/2022/05/prod-18-640x731.jpg'></img>
        <img className='w-[2800px] h-[250px]' src='http://demo.snstheme.com/wp/dbea/wp-content/uploads/2022/05/prod-06-640x731.jpg'></img>
    </div>
</div>

</div>



      
    </div>
    
  );
};

export default SpecialProduct;
