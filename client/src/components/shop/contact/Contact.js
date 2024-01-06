import React from "react";
import { Navber } from "../partials";
import { GrContact } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";
import { TiSocialInstagram } from "react-icons/ti";
import { IoMdCall } from "react-icons/io";
import { CgMail } from "react-icons/cg";

const ContactMe = () => {
  return (
    <>
      <Navber />
      <div
        className="mx-4 md:mx-12 md:mt-32 lg:mt-24"
        style={{ marginTop: "15rem" }}
      >
        <div className="text-3xl mb-6" style={{ fontWeight: "700" }}>
          {" "}
          <span style={{ display: "flex" }}>
            {" "}
            <span className="text-5xl mr-5">
              <IoIosContact />
            </span>
            Contact Us
          </span>
        </div>

        <div className="flex flex-col items-center space-y-4">
          {/* Mobile Numbers */}
          <div className="text-lg">
            <div className="flex">
              <span className="text-2xl mr-5">
                <IoMdCall />
              </span>

              <a className="underline" href="tel:+917019228466">
                +91 70192 28466
              </a>
            </div>
            <div className="flex">
              <span className="text-2xl mr-5">
                <IoMdCall />
              </span>
              <a className="underline" href="tel:+91861084119">
                +91 8610 84119
              </a>
            </div>
          </div>
          <div className="text-lg">
            <div className="flex">
              <span className="text-4xl mr-5">
              
              <CgMail />
              </span>

              <a className="underline"  target="_blank"
              rel="noopener noreferrer" href="mailto:Yameensharief4@gmail.com">
              yameensharief4@gmail.com
              </a>
            </div>
          </div>

          <div className="flex">
            <a
              href="https://www.instagram.com/caseculture.in"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-5 text-4xl flex items-center space-x-2 text-black-500"
            >
              <TiSocialInstagram />
            </a>
            <span className="text-xl mr-5">Case Culture ©</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
