"use client";

import Image from "next/image";
import { Roboto } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import List from "./List";
import { Dishes, Categories } from "@/app/lib/definitions";
import { FiExternalLink } from "react-icons/fi";
import { VscLinkExternal } from "react-icons/vsc";
import React from "react";
import Menu from "./Menu";
import { IoImageSharp } from "react-icons/io5";
import { GiGargoyle } from "react-icons/gi";

const nunito = Roboto({ weight: "300", subsets: ["latin"] });
const playfairdisplay = Playfair_Display({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

import { fetchDishes, fetchCategories } from "@/app/lib/data";

import { Kalnia } from "next/font/google";
import Link from "next/link";
const kalnia = Kalnia({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export default function MenuPage({ children }: { children: React.ReactNode }) {
  return (
    <span className={nunito.className}>
      {/* <div className="banner">
        <h1 className={kalnia.className}>Cocina La Antigua</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <Link
          className="maps_location"
          href={"https://maps.app.goo.gl/zVqB5uGK3w6hRzBe9"}
        >
          La antigua, Tultepec, Estado de Mexico <VscLinkExternal />
        </Link>
        <div className="bannerimage">
          <Image
            alt={"restaurant"}
            src={"/bannerimage.jpg"}
            width={400}
            height={200}
          />{" "}
        </div>
      </div>
      <h2 className={`${kalnia.className} h2`}>Menu</h2>*/}
      <div className="bannnner">

        <h1 className={kalnia.className}>
          La Casa de las Gargolas{" "}
          <Image
            alt={"restaurant"}
            src={"/gargoyleshouse1.jpg"}
            width={400}
            height={200}
            className="banner_imagee"
          />{" "}
          {/*<Image src="/logo.png" width={500} height={500} alt="Restaurant logo" />*/}
          {/*<GiGargoyle className="logo_icon" />*/}
        </h1>
        <div className="schedule">Abierto de Lunes a Sabado de 10:00am a 11:00pm</div>
      </div>

      <Link className="menu_presentation" href={"./images"}>
        <IoImageSharp />
      </Link>

      {children}
    </span>
  );
}
