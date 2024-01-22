"use client";
import Image from "next/image";
import ImgPlate from "@/app/imgs/plate.png";
import ImgCrab from "@/app/imgs/crab.png";
import ImgFish from "@/app/imgs/fish.png";
import ImgShrimp from "@/app/imgs/shrimp.png";
import ImgLid from "@/app/imgs/lid.png";
import { useEffect, useState } from "react";
import BoxComponents from "./components/Box/BoxComponents";

export default function Home() {
  const [runImage, setImage] = useState<any>();
  const [show, setShow] = useState(false);
  const array = [ImgCrab, ImgFish, ImgShrimp];

  const randomValue = array[Math.floor(Math.random() * array.length)];
  const randomValue2 = array[Math.floor(Math.random() * array.length)];
  const randomValue3 = array[Math.floor(Math.random() * array.length)];

  useEffect(() => {
    const loadingImg = setInterval(() => {
      setImage(array[Math.floor(Math.random() * array.length)]);
    }, 100);

    const timeoutId = setTimeout(() => {
      clearInterval(loadingImg);
      setShow(true);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(loadingImg);
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-[#c8cbd2] overflow-hidden">
      <Image src={ImgPlate} alt="soc-dia" width={1000} height={1000} />
      {/* <BoxComponents /> */}
      <Image
        src={ImgLid}
        alt="soc-dia"
        width={1000}
        height={1000}
        className="absolute z-10"
        id="lid"
        onDragStart={(e) => console.log(e)}
        onDragEnd={() => console.log(34)}
      />

      <Image
        src={show ? randomValue : runImage}
        alt="img"
        className="absolute top-[calc(50%_-_50px)] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        width={100}
        height={100}
      />
      <Image
        width={100}
        src={show ? randomValue2 : runImage}
        alt="img"
        className="absolute top-[calc(50%_+_50px)]  left-[calc(50%_+_50px)] translate-x-[-50%] translate-y-[-50%]"
        height={100}
      />
      <Image
        width={100}
        src={show ? randomValue3 : runImage}
        alt="img"
        height={100}
        className="absolute top-[calc(50%_+_50px)]  left-[calc(50%_-_50px)] translate-x-[-50%] translate-y-[-50%]"
      />
    </div>
  );
}
