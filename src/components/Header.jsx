import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Header.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Header() {
  const headerRef = useRef();

  useGSAP(() => {
    gsap.to(".letter", {
      y: -40,
      stagger: .02,
      scrollTrigger: {
        trigger: ".name",
        start: "top center",
        scrub: true,
        markers: true,
      },
    });
  }, [headerRef]);

  return (
    <div ref={headerRef}>
      <h1 className="name">
        {"Nic Doelger".split("").map((char, index) => (
          <span className="letter" key={index}>{char}</span>
        ))}
      </h1>{" "}

      <h2>Software Engineer</h2>
    </div>
  );
}

export default Header;
