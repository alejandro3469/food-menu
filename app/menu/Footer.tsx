import React from "react";
import { FaRegCopyright } from "react-icons/fa6";
import Link from "next/link";
import { VscLinkExternal } from "react-icons/vsc";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="footer_container">
      <div className="footer">
        <span className="copyright">
          <FaRegCopyright />
          2024 La Casa de las Gargolas
        </span>

        <div>
          <h3>Ubicacion</h3>
          <Link
            className="maps_location"
            href={"https://www.bing.com/maps?osid=378f16d9-ecd2-4bc2-92fb-13d175f0ea44&cp=19.632796~-99.10949&lvl=17&pi=0&imgid=27f93bed-8e5b-4237-8cd3-a8106e209a08&v=2&sV=2&form=S00027"}
          >
            Ixtlememelixtle, Coacalco de Berriozabal <VscLinkExternal />
          </Link>
        </div>
        <div>
          <h3>Contacto</h3>
          <ul>
            <li className="social_media">
              <FaWhatsapp />
              55 0000 0000
            </li>
            <li className="social_media">
              <MdOutlineEmail />
              emailexample@domain.com
            </li>
          </ul>
        </div>
        
      </div>
    </footer>
  );
}
