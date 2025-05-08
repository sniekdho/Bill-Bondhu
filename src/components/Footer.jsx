import React from "react";
import logo from "../../public/invoice.png";
import facebook from "../assets/social/facebook.png";
import github from "../assets/social/github.png";
import linkedin from "../assets/social/linkedin.png";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-neutral-900 text-accent p-10">
      <aside>
        <img src={logo} alt="logo" className="w-16 h-16" />
        <p className="font-bold">
          PayBondhu
          <br />
          Smart Bill Payment Platform
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.facebook.com/sniekdho.shafiq/" target="_blank">
            <img className="w-6 h-6" src={facebook} alt="" />
          </a>
          <a href="https://github.com/sniekdho" target="_blank">
            <img className="w-6 h-6" src={github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/md-shafiqul-islam-754a19183/"
            target="_blank"
          >
            <img className="w-6 h-6" src={linkedin} alt="" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
