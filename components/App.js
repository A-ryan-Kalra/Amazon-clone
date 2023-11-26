import Slideshow from "./Slideshow";
import { useState, useEffect } from "react";
const App = () => {
  const slides = [
    {
      url: "/img/slideshow1.webp",
      title: "laptop1",
    },
    { url: "/img/slideshow2.webp", title: "laptop2" },
    { url: "/img/slideshow3.webp", title: "plane" },
    { url: "/img/slideshow4.webp", title: "Monsoon" },
    { url: "/img/slideshow5.webp", title: "laptop3" },
    { url: "/img/slideshow6.webp", title: "monitor" },
  ];
  const [isClient, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);
  return (
    <div className=" w-[1550px] bg-white mx-auto ">
      {isClient && <Slideshow slides={slides} />}
    </div>
  );
};
export default App;
