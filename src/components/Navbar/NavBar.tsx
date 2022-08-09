import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import Btn from "../Reusable/Button/Btn";
import NavTop from "./NavTop";
import Nav from "./Nav";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <>
      <div>
        <NavTop />
        <Nav />
      </div>

      <div></div>
    </>
  );
};

export default NavBar;
