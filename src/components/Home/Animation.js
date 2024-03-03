import gsap from "gsap";

export const Showhome = (homeRef, videoRef) => {
  const tl = gsap.timeline();

  tl.to(homeRef.current, {
    display: "block",

    // scrollTrigger: {
    //   trigger: videoRef.current,

    // },
    // background: "#0011FF30",
  });

  return tl;
};
