import React from "react";
import { FaRegCopyright } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer">
      <span className="copyright">
        <FaRegCopyright />
        2024 Cocina La Antigua
      </span>
      <div>
        <h3>Ponte en contacto con nosotros</h3>
        <ul>
          <li>55 0000 0000</li>
          <li>emailexample@domain.com</li>
        </ul>
      </div>

      <div>
        <h3>Ubicacion</h3>
        <Link
          className="maps_location"
          href={"https://maps.app.goo.gl/zVqB5uGK3w6hRzBe9"}
        >
          La antigua, Tultepec, Estado de Mexico 
        </Link>
      </div>
      
    </div>
  );
}
