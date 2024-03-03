import React, { useEffect, useRef } from "react";
import { Showhome } from "./Animation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "../../App.css";
import TextCompo from "./TextCompo";
import Video from "../../components/Global/Video";

const Home = ({ timeline }) => {
  const homeRef = useRef(null);
  const OrangeArea = useRef(null);
  const claping = useRef(null);
  const circleContainerAnimRef = useRef(null);
  const GreenArea = useRef(null);
  const textWorkRef = useRef(null);
  const orangeTextHEadRef = useRef(null);
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);
  const showMoreRef = useRef(null);
  const SMleftRef = useRef(null);
  const newsRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  // let smoother = .create({
  //   smooth: 2
  // });

  useGSAP(
    () => {
      let t1 = gsap.timeline();
      let t2 = gsap.timeline();

      t1.to(orangeTextHEadRef.current, {
        yPercent: -100,
        // scrollBehavior: 100,
        // background:"#ffffff",
        scrollTrigger: {
          trigger: OrangeArea.current,
          start: "bottom bottom",
          end: "bottom center",
          scrub: true,
          // markers: true,
        },
      });
      t1.to(claping.current, {
        // x: 100,
        backgroundColor: "#fff666",
        // scrollBehavior: 100,

        scrollTrigger: {
          trigger: OrangeArea.current,
          start: "clamp(5% 70%)",
          end: "20% center",
          scrub: true,
          // markers: true,
        },
      });

      t1.to(OrangeArea.current, {
        // yPercent: -150,
        // background: "#fffff",
        scrollTrigger: {
          trigger: OrangeArea.current,
          start: "top top",
          end: "bottom center",
          pin: true,
          pinSpacing: true,
          scrub: true,
          //     // pin: OrangeArea.current,
          // markers: {
          //   startColor: "blue",
          //   endColor: "#FF0000",
          // },
          //     // markers: true,
        },
      });
      t1.to(GreenArea.current, {
        // yPercent: -150,
        // background: "#fffff",

        scale: 600,
        yPercent: -15000,
        scrollTrigger: {
          trigger: OrangeArea.current,
          start: "bottom bottom",
          end: "bottom center",
          // pin: true,
          scrub: 1.8,

          //     // pin: OrangeArea.current,
          // markers: {
          //   startColor: "purple",
          //   endColor: "#FF0000",
          // },
          //     // markers: true,
        },
      });
      t1.to(textWorkRef.current, {
        // yPercent: -150,
        // background: "#fffff",

        // scale: 600,
        translateY: "-100%",
        position: "absolute",
        // yPercent: -150,
        scrollTrigger: {
          trigger: OrangeArea.current,
          start: "bottom bottom",
          end: "bottom center",
          // pin: true,
          scrub: 5,
          //     // pin: OrangeArea.current,
          // markers: {
          //   startColor: "green",
          //   endColor: "#FF0000",
          // },
          //     // markers: true,
        },
      });
      t1.to(imageRef.current, {
        // yPercent: -150,
        // background: "#fffff",

        // scale: 600,
        // yPercent: -10,
        // translateY: "-50%",
        scale: 1.5,
        translateY: -150,
        scrollTrigger: {
          trigger: OrangeArea.current,
          start: "bottom bottom",
          end: "bottom top  ",
          // pin: true,
          scrub: 10,
          //     // pin: OrangeArea.current,
          // markers: {
          //   startColor: "green",
          //   endColor: "#FF0000",
          // },
          //     // markers: true,
        },
      });

      t1.to(newsRef.current, {
        yPercent: -1,
        height: "100%",
        // background: "#fffff",
        scrollTrigger: {
          trigger: newsRef.current,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: true,
          scrub: true,
          //     // pin: OrangeArea.current,
          markers: {
            startColor: "blue",
            endColor: "blue",
          },
          //     // markers: true,
        },
      });

      t1.to(".card", {
        yPercent: -100,
        stagger: 0.5,

        scrollTrigger: {
          trigger: newsRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          markers: {
            startColor: "green",
          },
        },
      });
    },
    { scope: homeRef.current }
  );
  // useGSAP(
  //   () => {
  //     gsap.to(OrangeArea.current, {
  //       // background: "#000",
  //       scrollTrigger: {
  //         trigger: GreenArea.current,
  //         start: "clamp(1000rem bottom)",

  //         scrub: true,
  //         // markers: true,
  //         // pin: GreenArea.current,
  //       },
  //     });
  //   },
  //   { scope: GreenArea.current }
  // );
  // useGSAP(
  //   () => {
  //     gsap.to(ShowMeLeftRef.current, {
  //       background: "#000",
  //       scrollTrigger: {
  //         trigger: ShowMeMoreRef.current,
  //         start: "clamp(top top)",
  //         end: "bottom bottom",
  //         pin: ShowMeLeftRef.current,
  //         scrub: true,
  //         markers: true,
  //       },
  //     });
  //   },
  //   { scope: ShowMeMoreRef.current }
  // );

  useEffect(() => {
    timeline && timeline.add(Showhome(homeRef));
  }, [timeline]);

  //   useEffect(() => {
  //     ScrollTrigger.refresh();
  //   }, []);
  return (
    <div
      ref={homeRef}
      className='w-full h-full z-30 text-black text-9xl  absolute top-0'
    >
      <div className=' px-8 my-[60vh] text-[15vh] font-bold '>
        A CREATIVE <br />
        AGENCY LIVING AT THE <br /> INTERSECTION OF <br /> BIG IDEAS <br />{" "}
        INNOVATION & HUMAN EXPERIENCES
      </div>

      <div ref={OrangeArea} className='w-full h-full bg-orange-500  relative'>
        <div
          ref={orangeTextHEadRef}
          className='uppercase font-semibold text-6xl w-10/12   text-white flex items-center'
        >
          <div className='py-40'>
            As crafty and cunning{" "}
            <span ref={claping}>
              as a fox
              {/* <svg
              class='home_even_scribble'
              preserveAspectRatio='none'
              width='100%'
              height='100%'
              viewBox='0 0 288 86'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M198.086 1C169.094 2.77501 140.095 5.79744 111.297 9.52845C81.2068 13.4268 49.2426 16.7779 22.049 31.3513C10.9448 37.3021 -9.86489 51.6894 6.64758 64.6122C18.6794 74.0284 36.0042 77.3557 50.5942 79.6624C93.0905 86.3812 137.226 84.9735 179.976 81.92C207.352 79.9645 234.815 76.7903 261.398 69.7293C264.129 69.0038 290.594 63.7226 285.478 55.2811C279.285 45.0629 260.858 39.0715 250.862 35.1138C215.866 21.2576 178.426 12.8797 140.996 9.37795C112.997 6.75854 84.1452 6.56171 56.5641 12.7392C45.1466 15.2964 22.4009 20.6362 19.7914 35.3145C18.4598 42.8052 24.7073 48.9623 30.7279 52.0704C50.1103 62.0764 75.6686 62.7927 96.8987 63.358C132.464 64.305 167.463 58.9478 201.698 49.7627'
                stroke='white'
                stroke-width='2'
                stroke-linecap='round'
                // style='stroke-dashoffset: 0; stroke-dasharray: 994.474;'
              ></path>
            </svg> */}
            </span>
            , we help ambitious brands seize unique, game changing
            opportunities.
          </div>
        </div>

        {/* 
          absolute top-[900px] transform:translate-x-[-50%] transform:translate-y-[-50%]
        */}

        <div
          ref={circleContainerAnimRef}
          className='w-full h-full absolute bottom-0 top-0 object-cover z-0   flex justify-center items-end overflow-hidden'
        >
          <div
            ref={GreenArea}
            className=' h-1 bg-black w-1
          rounded-full'
          ></div>
        </div>
      </div>

      <div
        ref={textWorkRef}
        className=' absolute flex flex-col translate-y-[50%] justify-center  items-center text-center z-10  text-[4rem] '
      >
        {/* <div className='h-[75vh]'></div> */}
        <p className='text-3xl text-sky-700 font-semibold mb-10'>Our Work</p>
        <p className='text-white w-1/2 text-7xl'>
          Over the years we’ve launched, transformed and helped build some of
          the world's most iconic brands.
        </p>

        {/* Card Video */}

        <div>
          <div className='flex gap-10 mt-52 '>
            <div
              ref={imageContainerRef}
              className='w-[35rem] h-[20rem] bg-white rounded-2xl overflow-hidden '
            >
              <img
                src='https://images.pexels.com/photos/1774927/pexels-photo-1774927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
                ref={imageRef}
                className='w-[100%]'
              />
            </div>
            <div className='w-[45rem] h-[20rem] bg-white rounded-2xl '></div>
          </div>
          <div className='flex gap-10 mt-10  '>
            <div className='w-[35rem] h-[20rem] bg-white rounded-2xl '></div>
            <div className='w-[45rem] h-[20rem] bg-white rounded-2xl '></div>
          </div>
          <div className='flex gap-10 mt-10'>
            <div className='w-[35rem] h-[20rem] bg-white rounded-2xl '></div>
            <div className='w-[45rem] h-[20rem] bg-white rounded-2xl '></div>
          </div>
        </div>

        {/* SHOW MORE */}

        {/* <div className='text-white mt-60 w-full h-full bg-black '>
          <h1>SHOW ME MORE</h1>
          <div ref={showMoreRef}>
            <div className='flex justify-between gap-7 w-full h-full px-52 bg-red-500'>
              <div
                ref={SMleftRef}
                className='text-lg flex justify-center text-left w-1/3 h-full'
              >
                We help lots of talented people at brilliant brands solve a
                whole bunch of problems through just about every discipline you
                can imagine.
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/* news */}
      <div className='bg-white h-full w-full ' ref={newsRef}>
        <p className='text-[15vh] h-full font-extrabold inset-0 flex pt-20'>
          <span className='text-2xl font-medium mt-5 mr-2 '>News</span>NEWS AND
          VIEWS <br />
          FROM THE FOLD
        </p>
        {/* cards */}
        <div className='relative w-full h-full'>
          <div className='card bg-red-500 rounded-2xl h-full w-full absolute z-10 mt-12'>
            <div className='h-full flex justify-between'>
              <div className='text-4xl px-10 flex justify-center items-center w-1/3'>
                Fold7 picks up multiple awards Amazing news as Fold7 wins
                multiple awards for Audible's 'Laugh Through It'!
              </div>
              <div className='w-1/2 pt-40 px-10 relative'>
                <div className=' h-1/2 rounded-2xl overflow-hidden relative'>
                  <div className='bg-[#22c55e] text-2xl absolute top-0 right-0 p-2 px-5 rounded-bl-2xl '>
                    news
                  </div>
                  <img
                    src='https://images.pexels.com/photos/1774927/pexels-photo-1774927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt=''
                    className=''
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='card bg-blue-500 rounded-2xl h-full w-full absolute z-20 mt-24 '>
            <div className='h-full flex justify-between'>
              <div className='text-4xl px-10 flex justify-center items-center w-1/3'>
                Fold7 picks up multiple awards Amazing news as Fold7 wins
                multiple awards for Audible's 'Laugh Through It'!
              </div>
              <div className='w-1/2 pt-40 px-10 relative'>
                <div className=' h-1/2 rounded-2xl overflow-hidden relative'>
                  <div className='bg-[#22c55e] text-2xl absolute top-0 right-0 p-2 px-5 rounded-bl-2xl '>
                    news
                  </div>
                  <img
                    src='https://images.pexels.com/photos/1774927/pexels-photo-1774927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt=''
                    className=''
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='card bg-[#3630aa] rounded-2xl h-full w-full absolute z-30 mt-36'>
            <div className='h-full flex justify-between'>
              <div className='text-4xl px-10 flex justify-center items-center w-1/3'>
                Fold7 picks up multiple awards Amazing news as Fold7 wins
                multiple awards for Audible's 'Laugh Through It'!
              </div>
              <div className='w-1/2 pt-40 px-10 relative'>
                <div className=' h-1/2 rounded-2xl overflow-hidden relative'>
                  <div className='bg-[#3630aa] text-2xl absolute top-0 right-0 p-2 px-5 rounded-bl-2xl '>
                    news
                  </div>
                  <img
                    src='https://images.pexels.com/photos/1774927/pexels-photo-1774927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt=''
                    className=''
                  />
                </div>
              </div>
            </div>
            <div className='bg-white w-full h-full z-50 -translate-y-28  rounded-[5rem]'>
              <div className='flex flex-col items-center w-full pt-40'>
                <h1 className='text-7xl font-semibold'>
                  Meet our sibling agencies
                </h1>
                <p className='text-xl mt-5 w-2/5 text-center'>
                  They specialise in design, brand experience, and digital
                  products. We share a floor - and sometimes race each other to
                  the water cooler.
                </p>
              </div>
              <div className='flex justify-evenly mt-40 '>
                <TextCompo />
                <TextCompo />
                <TextCompo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
