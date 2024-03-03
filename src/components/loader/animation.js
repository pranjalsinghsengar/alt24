import gsap from "gsap";

export const NUMBERanimation = (numberANIM, loaderRef,textRef) => {
  const tl = gsap.timeline();

  tl.to(numberANIM.current, {
    yPercent: -2120,
    duration: 10,
    ease: "power3.inOut",
  });
  tl.to(textRef.current, {
    height: "0%",
    duration: 2,
  });

  return tl;
};
