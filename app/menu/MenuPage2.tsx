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
    <main className={nunito.className}>
      <div className="banner">
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
      <h2 className={`${kalnia.className} h2`}>Menu</h2>
      <Link className="menu_presentation" href={"./images"}>
        <IoImageSharp />
      </Link>

      {children}
    </main>
  );
}
