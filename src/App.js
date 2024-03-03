import logo from "./logo.svg";
import "./App.css";
import gsap from "gsap"; // <-- import GSAP
import { useGSAP } from "@gsap/react"; // <-- import the hook from our React package
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Loader from "./components/loader/Loader";
import Home from "./components/Home/Home";
import Video from "./components/Global/Video";

function App() {
  const [loaderFinished, setloaderFinished] = useState(false);
  const [timeline, setTimeline] = useState(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setloaderFinished(true);
          // console.log("complete");
        },
      });

      setTimeline(tl);
    });
    return () => context.revert();
  }, []);

  return (
    <div className={`App relative `}>
      <Video />
      {loaderFinished ? (
        <Home timeline={timeline} />
      ) : (
        <Loader timeline={timeline} />
      )}
    </div>
  );
}

export default App;

{
}
{
  /* <Loader timeline={timeline} /> */
}
