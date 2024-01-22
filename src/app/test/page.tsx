import ImgLid from "@/app/imgs/lid.png";
import Image from "next/image";
import { useDrag } from "react-dnd";

function TestPage() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div>
      <h1>Hello Test</h1>
      <Image
        ref={drag}
        width={200}
        height={200}
        src={ImgLid}
        alt="img-drag"
        className={isDragging ? "border-2" : ""}
      />
    </div>
  );
}

export default TestPage;
