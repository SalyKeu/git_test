import React from "react";
import {
  Clock,
  Facebook,
  FacebookIcon,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import whatsappSvg from "../assets/whatsapp.svg";
import TikTok from "../assets/tiktok.svg";
import { AiFillTikTok } from "react-icons/ai";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="w-full flex flex-col md:flex-row h-auto md:h-[400px] justify-between">
        <div className="flex flex-col justify-start space-y-4">
          <h1 className="font-bold text-2xl font-serif md:ml-6 text-black">
            LashByChino
          </h1>
          {/* Address Section */}
          <div className="space-y-2">
            <p className="text-black font-bold md:ml-6">Address</p>
            <div className="flex items-center gap-2 md:ml-6">
              <MapPin />
              <p>6 Elka Rd, Springvale South VIC 3172</p>
            </div>

            <div className="flex flex-col gap-2 md:ml-6 text-black">
              <div className="flex items-center gap-2">
                <Clock />
                <p>Open Hours</p>
              </div>
              <div className="flex flex-col md:ml-6">
                <p>Mon-Fri: 9am - 6pm</p>
                <p>Sat: 10am - 4pm</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>
          {/* Contact Section */}
          <div className="space-y-2 font-bold">
            <p className="text-black font-bold md:ml-6">Contact</p>
            <div className="flex gap-2 md:ml-6 items-center">
              <Phone />
              <p>(04) 0207 6175</p>
            </div>
            <div className="flex md:ml-6 items-center gap-2">
              <img src={whatsappSvg} alt="WhatsApp" className="w-6 h-6" />
              <p>(04) 0207 6175</p>
            </div>
            <div className="flex md:ml-6 items-center gap-2">
              <Mail />
              <p>Youkchensaing@gmail.com</p>
            </div>
          </div>
          {/* Social Media Section */}
          <div className="space-x-4 font-bold flex md:ml-6 items-center">
            <Facebook />
            <Instagram />
            <AiFillTikTok className="text-[27px] text-center" />
          </div>
        </div>
        {/* Service Menu Section */}
        <div className="flex flex-col md:flex-row justify-start  mt-4 md:mt-0 gap-4 md:mr-6">
          <div className="mr-6">
            <h2 className="font-bold text-black">Book appointment</h2>
            <ul className="space-y-2 flex flex-col text-black mt-4">
              <a href="/service">Our services</a>
              <a href="/about">About us</a>
              <a href="/home">home</a>
              <a href="/contact">Contact us</a>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
