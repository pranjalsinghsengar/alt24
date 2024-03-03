import gsap from "gsap";

export const Showhome = (homeRef) => {
  const tl = gsap.timeline();

  tl.to(homeRef.current, {
    display: "block",
    // background: "#0011FF30",
  });

  return tl;
};
