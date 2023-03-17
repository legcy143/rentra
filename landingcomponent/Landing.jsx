import React, { useState,useEffect } from 'react'
import style from "./styles/home.module.scss"
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';
import Testimonal from './Testimonal';
import About from './About';
import Footer from './Footer';
import HeroSection from './HeroSection';
import Accordion from './Accordion';

const HomeScreen = () => {
  let router = useRouter();
  const [menustate, setmenustate] = useState(false)
  useEffect(() => {
    // Define the 'otpless' function
    window.otpless = (otplessUser) => {
     // Retrieve the user's details after successful login
     const waName = otplessUser.waName;
     const waNumber = otplessUser.waNumber;
        //  console.log("")
        alert("Hello "+ waName)
     // Handle the signup/signin process
     // ...
    };
   }, []);
  return (
    <main className={`${style.home_main}`}>
      <section className={`${style.nav_home} ${menustate == true && style.menu_open} `}>
        <img src="/favicon.ico" alt="img" />
        <ol>
          <MenuIcon onClick={() => { menustate == true ? setmenustate(false) : setmenustate(true) }} />
          <li onClick={() => { setmenustate(false); router.push("/") }}>Home</li>
          {/* <li onClick={() => { setmenustate(false); router.push("/carrier") }}>Carrer</li> */}
          <li onClick={() => { setmenustate(false); router.push("/about") }}>About us</li>
          {/* <li onClick={() => { setmenustate(false); router.push("/contact") }}>Contact us</li> */}
          <li onClick={() => { setmenustate(false); router.push("/termsandcondition") }}>Terms and Condition</li>
          <li onClick={() => { setmenustate(false); router.push("/termsandcondition") }}>Privacy Policy</li>
          {/* <div className={style.navbtns}>
          <button>Login</button>
          <button>sign up</button>
          </div> */}
          <div className="flex z">
            <button style={{
              marginTop:"-30px",
            }} id="otpless">‎</button>
          </div>
        </ol>
      </section>

      <HeroSection />
      <div className={style.componentDiv}>
        <About />
        <Accordion />
        <Testimonal />
      </div>
      <Footer />
    </main>
  )
}

export default HomeScreen