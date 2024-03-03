import gsap from "gsap"; // <-- import GSAP
import { useEffect, useRef } from "react";
import { num } from "./Data";
import { NUMBERanimation } from "./animation";
import Video from "../Global/Video";

const Loader = ({ timeline }) => {
  const numberANIM = useRef(null);
  const loaderRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    timeline && timeline.add(NUMBERanimation(numberANIM, loaderRef, textRef));
  }, [timeline]);

  return (
    <>
      <div
        ref={textRef}
        className=' h-full overflow-hidden flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 bg-black text-[65vh] text-center font-bold select-none mix-blend-multiply'
      >
        <div className='text-white flex h-[60rem]  overflow-hidden '>
          ALT
          <div ref={numberANIM} className='flex flex-col  '>
            {num.map((item, i) => {
              return <div>{item}</div>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
