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
            href={"https://maps.app.goo.gl/7RXzTT1EUKdc6Bwp7"}
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
