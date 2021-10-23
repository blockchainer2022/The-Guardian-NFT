/* eslint-disable jsx-a11y/anchor-is-valid */
// import { useState } from "react";

import Logo from "../../assets/images/Logo.png";
import Twitter from "../../assets/images/twitter.svg";
import Discord from "../../assets/images/discord.svg";
import opensea from "../../assets/images/opensea.svg";
import "./style.css";

const Index = () => {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => {
  //   setOpen((prev) => !prev);
  // };
  return (
    <header>
      <div className="bg-secondary text-white relative py-4">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="w-40">
              <img src={Logo} alt="" />
            </div>
            <div className="flex">
              <ul className="header-social flex items-center mr-2 md:mr-6 ">
                <li>
                  <a href="#">
                    <img src={Twitter} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={Discord} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={opensea} alt="" />
                  </a>
                </li>
              </ul>
              <button className="bg-primary py-2.5 md:py-3 px-5 md:px-8 rounded-full text-xs md:text-base sm:block hidden">
                Connect Wallet
              </button>
              <button className="bg-primary py-2.5 md:py-3 px-5 md:px-8 rounded-full text-xs md:text-base sm:hidden">
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Index;
