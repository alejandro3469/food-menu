import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["100", "300", "400"], subsets: ["latin"] });

const dmserifdisplay = DM_Serif_Display({ weight: "400", subsets: ["latin"] });
const playfairdisplay = Playfair_Display({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1 className={dmserifdisplay.className}>Cocina La Antigua</h1>
      <span className={playfairdisplay.className}>
        <section>
          <span>Edo. Mex., Tultepec, La Antigua / </span>Comida corridda y
          mariscos / <span></span>Gasto estimado: $150<span></span>
        </section>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </span>
      <Link className="button" href="/menu">
        <div className={`${roboto.className}`}>Ver menu</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path
            fill="#ebebeb"
            d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"
          />
        </svg>
      </Link>
      <>
        {/*Photo by <a href="https://unsplash.com/@jaywennington?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jay Wennington</a> on <a href="https://unsplash.com/photos/dish-on-white-ceramic-plate-N_Y88TWmGwA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>*/}
      </>
    </main>
  );
}
