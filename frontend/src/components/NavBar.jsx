import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa6";
import "/src/style.css";
import { useState } from "react";

function NavBar() {
  let [dropDown, setDropDown] = useState("hidden");
  let [dropDownOne, setDropDownOne] = useState("hidden");
  let [dropDownTwo, setDropDownTwo] = useState("hidden");

  let mouseEnter = () => {
    setDropDown("dropdown-content");
  };
  let mouseEnterOne = () => {
    setDropDownOne("dropdown-content");
  };
  let mouseEnterTwo = () => {
    setDropDownTwo("dropdown-content");
  };
  let mouseLeave = () => {
    setDropDown("hidden");
  };
  let mouseLeaveOne = () => {
    setDropDownOne("hidden");
  };
  let mouseLeaveTwo = () => {
    setDropDownTwo("hidden");
  };

  return (
    <div>
      <nav className="container mx-auto flex flex-nowrap justify-between content-center pt-4">
        <div>
          <a className="logo" href="/index.html">
            <img src="/src/assets/images/logo.png" alt="logo" />
          </a>
        </div>
        <div className="w-auto flex justify-center items-end flex-nowrap justify-between">
          <ul className="flex flex-row font-bold text-lg flex-nowrap justify-around gap-10">
            <li className="border-b-4 border-blue-400 hover:border-b-4 border-blue-400">
              <a href="/index.html">Home</a>
            </li>
            <li
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
              className="banking hover:border-b-4 border-blue-400"
            >
              <a href="/">Banking</a>
              <div className={dropDown}>
                <a href="#">Savings</a>
                <a href="#">Checking</a>
                <a href="#">Certificate of deposit</a>
                <a href="#">Offshore Investment</a>
              </div>
            </li>
            <li
              onMouseEnter={mouseEnterOne}
              onMouseLeave={mouseLeaveOne}
              className="banking hover:border-b-4 border-blue-400"
            >
              <a href="/">Lending</a>
              <div className={dropDownOne}>
                <a href="#">Line of Credit</a>
                <a href="#">Personal Financing</a>
              </div>
            </li>
            <li className="hover:border-b-4 border-blue-400">
              <a href="/">Money Market</a>
            </li>
            <li
              onMouseEnter={mouseEnterTwo}
              onMouseLeave={mouseLeaveTwo}
              className="banking hover:border-b-4 border-blue-400"
            >
              <a href="/">E-login</a>
              <div className={dropDownTwo}>
                <a href="#">Account Opening</a>
                <a href="#">Login</a>
              </div>
            </li>
            <li className="hover:border-b-4 border-blue-400">
              <a href="/">Contact</a>
            </li>
            <li className="p-2 bg-primary-color bg-opacity-90">
              <a href="/">Financing</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="flex justify-around self-center justify-center bg-primary-color">
        <ul className="flex justify-around self-center justify-center gap-10">
          <li>
            <a
              className="flex flex-row self-center justify-center items-center gap-2"
              href="/"
            >
              <FaLocationDot className="text-blue-500 opacity-50 hover:opacity-100" />
              <span className="text-white text-sm opacity-50 hover:opacity-100">
                Prime Credit Bank, Customer Service Portal
              </span>
            </a>
          </li>
          <li>
            <a className="flex flex-row items-center gap-2" href="/">
              <HiOutlineMail
                size="20px"
                className="text-blue-500 opacity-50 hover:opacity-100"
              />
              <span className="text-white text-sm opacity-50 hover:opacity-100">
                info@pcbnuss.com
              </span>
            </a>
          </li>
        </ul>

        <div className="w-auto h-10 flex content-center justify-between gap-5 items-center">
          <a href="/">
            <TiSocialFacebook className="cursor-pointer text-3xl  opacity-50 hover:text-blue-500 hover:opacity-100" />
          </a>
          <a href="/">
            <FaTwitter className="cursor-pointer text-xl opacity-50 hover:text-blue-500 hover:opacity-100" />
          </a>
          <a href="/">
            <FaGooglePlusG className="cursor-pointer text-xl opacity-50 hover:text-blue-500 hover:opacity-100" />
          </a>
          <a href="/">
            <FaYoutube className="cursor-pointer text-xl opacity-50 hover:text-blue-500 hover:opacity-100" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
