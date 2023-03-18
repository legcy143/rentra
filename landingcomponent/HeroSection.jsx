import React,{useEffect,useState,useRef,useCallback} from 'react'
import style from './styles/TypewriterAnimation.module.scss';
import { Typewriter } from 'react-simple-typewriter'
const HeroSection = () => {
  const [selected ,setSelected] =useState("")
  const urls = [
    "https://cdnl.iconscout.com/lottie/premium/thumb/bicycle-5015807-4175886.gif",
    "https://cdnl.iconscout.com/lottie/premium/thumb/laptop-5746172-4789207.gif",
    "https://cdn3d.iconscout.com/3d/premium/thumb/control-6341601-5327298.png?f=webp",
    "https://cdn3d.iconscout.com/3d/premium/thumb/guitar-with-music-notes-5846247-4891144.png?f=webp",
    "https://cdn3d.iconscout.com/3d/premium/thumb/clothes-5167903-4328713.png?f=webp",
    "https://cdnl.iconscout.com/lottie/premium/thumb/bike-5491276-4574322.gif",
    "https://cdnl.iconscout.com/lottie/premium/thumb/tools-box-6127207-5003373.gif",
    "https://cdnl.iconscout.com/lottie/premium/thumb/piano-6407655-5349110.gif",
    "https://cdnl.iconscout.com/lottie/premium/thumb/neckless-6292429-5221909.gif",
    "https://cdnl.iconscout.com/lottie/premium/thumb/camera-6906006-5650577.gif"

  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      const randNumber = Math.floor(Math.random() * urls.length);
      const selectedRand = urls[randNumber];
      setSelected(selectedRand);
    }, 2500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-[100px] py-4 md:flex-row flex-col items-center">
  
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-[400px]">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src={selected === ""? "https://cdn3d.iconscout.com/3d/premium/thumb/bicycle-racing-4976134-4146778.png?f=webp":selected}
      />
    </div>
      <h1 className="title-font text-6xl font-medium text-gray-900">
        <span className="lg:text-[80px] py-14 md:text-[40px] font-bold" >Rentra</span>
        <br className=" lg:inline-block" />
        <span className="text-3xl">Rent Anything!</span>
      </h1>
      <p className={`inline-block mb-4`}>
      <Typewriter
            words={['From WorkStations', 'to Games and Console', 'Cloths to Makeups', 'Musical Insturnments to Cars & Bike']}
            loop={6}
            cursor
            // cursorStyle='_'
            typeSpeed={30}
            deleteSpeed={30}
            delaySpeed={500}
          />
      </p>
      <div id="otpless" className="flex justify-center items-center text-white">
      .
      {/* <h1 className='text-black text-4xl flex justify-center '>Signup! And Get Ready Soon</h1> */}
      </div>
    </div>
   
  </div>
</section>

  )
}

export default HeroSection