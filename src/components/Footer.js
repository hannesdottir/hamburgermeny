import React from "react";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { FaTiktok, FaFacebook, FaInstagram, FaMailBulk } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center bg-amber-50">
        <div className="m-10 lg:py-16 lg:mr-20">
          <h1 className="font-bold mb-5 text-2xl font-mono">LOREM IPSUM</h1>
          <p className="my-4 font-mono">LOREM IPSUM</p>
          <p className="my-4 font-mono">LOREM IPSUM</p>
          <p className="my-4 font-mono">LOREM IPSUM</p>
        </div>
        <div className="m-10 lg:py-16">
          <h1 className="font-bold mb-5 text-2xl font-mono">KONTAKTA OSS</h1>
          <div>
            <div className="flex flex-row">
              <FaMailBulk size={20} className="mr-3" />
              <p className="mb-5 font-mono">MAILA OSS</p>
            </div>
            <div className="flex flex-row">
              <BsFillTelephoneOutboundFill size={20} className="mr-3" />
              <p className="font-mono">Tlf. 090909090090</p>
            </div>
          </div>
        </div>
        <div className="m-10 lg:py-16 lg:ml-20">
          <p className="font-bold text-2xl font-mono">FÖLJ OSS</p>
          <div className="flex flex-row mt-3">
            <FaInstagram size={40} className="mr-4" />
            <FaFacebook size={40} className="mr-4" />
            <FaTiktok size={37} />
          </div>
        </div>
      </div>
    </div>
  );
}
