import React, { useState } from 'react'
import style from "./Nav.module.scss"
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';

const Navbar = () => {
    let router = useRouter();
    const [menustate, setmenustate] = useState(false)
  return (
    <section className={`${style.nav_home} ${menustate == true && style.menu_open} `}>
        <div className={style.linkDiv}>
            <li>home</li>
            <li>About</li>
            <li>Testimonials</li>
            <li>contact</li>
        </div>
        <div className={style.middleDiv}>
           <MenuIcon/> <h1>Rentra</h1>
        </div>
        <div className={style.lastDiv}>
            <button>login</button>
            <button>sign up</button>
        </div>
  </section>
  )
}

export default Navbar