import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Header.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Header() {
  const headerRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      ".letter",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 10,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".name",
          scrub: true,
          start: "top 40%",
          end: "top 13%",
          markers: true,
        },
      }
    );
    gsap.fromTo(
      ".swe",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".swe",
          scrub: true,
          start: "top 20%",
          end: "top 7%",
          markers: true,
        },
      }
    );
  }, [headerRef]);

  return (
    <div ref={headerRef}>
      <h1 className="name">
        {"Nic Doelger".split(/(?!$)/).map((char, index) => (
          <span className="letter" key={index}>
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>{" "}
      <h2 className="swe">Software Engineer</h2>
    </div>
  );
}

export default Header;
