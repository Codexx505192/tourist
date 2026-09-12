import Link from "next/link";
import { useState } from "react";

export default function Header(){
const [modal, setModal] = useState(false)


    return(
        <header>
            <Link href="/" >
            <div className="header_logo">
              <img src="./img/Logo.svg" alt="header_logo" />
            </div>
            </Link>

            <ul className="list_header">
            <li>
              <Link href="equipment" className="ln">Equipment</Link>
            </li>
            <li>
              <Link href="about_us" className="ln">About us</Link>
            </li>
            <li>
              <Link href="blog" className="ln">Blog</Link>
            </li>
            </ul>

            <div className="header_menu">
                <ul className={`header_l ${modal ? 'active':''}`}>
                  <li>
                    <Link href="equipment" className="lnk_3">equipment</Link>
                  </li>
                  <li>
                    <Link href="about_us" className="lnk_3">About us</Link>
                  </li>
                  <li>
                    <Link href="blog" className="lnk_3">Blog</Link>
                  </li>
                  <li className="close" onClick={() =>setModal(false)}>
                    close
                  </li>
                </ul>
            </div>


          <div className="left_header">
            <div className="menu" onClick={() => setModal(true)}>
                <img src="./img/menu.png" alt="menu" />
            </div>
            <div className="user">
              <img src="./img/user.png" alt="user" />
            </div>


            <Link href="#" className="lnk_2">Account</Link>
          </div>
          </header>
    )
}