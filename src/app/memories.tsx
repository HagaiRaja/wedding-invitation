import ImageCol1 from "../../public/col_1.jpg";
import ImageCol1_1 from "../../public/col_1_1.jpg";
import ImageCol1_2 from "../../public/col_1_2.jpg";
import ImageCol1_3 from "../../public/col_1_3.jpg";
import ImageCol2 from "../../public/col_2.jpg";
import ImageCol2_1 from "../../public/col_2_1.jpg";
import ImageCol2_2 from "../../public/col_2_2.jpg";
import ImageCol2_3 from "../../public/col_2_3.jpg";
import ImageCol3 from "../../public/col_3.jpg";
import ImageCol3_1 from "../../public/col_3_1.jpg";
import ImageCol3_2 from "../../public/col_3_2.jpg";
import ImageCol3_3 from "../../public/col_3_3.jpg";
import ImageCol4 from "../../public/col_4.jpg";
import ImageCol4_1 from "../../public/col_4_1.jpg";
import ImageCol4_2 from "../../public/col_4_2.jpg";
import ImageCol4_3 from "../../public/col_4_3.jpg";
import ImageCol5 from "../../public/col_5.jpg";
import ImageCol5_1 from "../../public/col_5_1.jpg";
import ImageCol5_2 from "../../public/col_5_2.jpg";
import ImageCol5_3 from "../../public/col_5_3.jpg";
import ImageCol6 from "../../public/col_6.jpg";
import ImageCol6_1 from "../../public/col_6_1.jpg";
import ImageCol6_2 from "../../public/col_6_2.jpg";
import ImageCol6_3 from "../../public/col_6_3.jpg";

import { cn } from "./utils";
import { dancingScript, sansSerif } from "./font";
import AnimateOnScroll from "./animate";
import { useEffect, useState } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function Memories() {
  const [image, setImage] = useState<StaticImport | null>(null);
  const [videoWidth, setVideoWidth] = useState(0);
  const [videoHeight, setVideoHeight] = useState(0);
  useEffect(() => {
    const width = window.innerWidth <= 450 ? window.innerWidth : 450;
    setVideoWidth(width);
    setVideoHeight((width / 1280) * 720);
  }, []);

  return (
    <>
      {image && (
        <ImagePreview
          src={image}
          width={videoWidth}
          onClose={() => setImage(null)}
        />
      )}
      <AnimateOnScroll>
        <div className="p-4 pb-5 pt-0">
          <p
            className={cn(
              dancingScript.className,
              "text-center text-5xl text-black"
            )}
          >
            Our Memories
          </p>
        </div>
        <div className="px-8 pb-5">
          <p className="text-center text-black">
              In the meantime, here are some of our loveliest moment together... (That you may share on social media 😉)
          </p>
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Image
          src={ImageCol1}
          width={videoWidth}
          onClick={() => setImage(ImageCol1)}
          alt="separator"
          placeholder="blur"
        />
      </AnimateOnScroll>
      <div className="flex flex-row">
        <AnimateOnScroll>
          <Image
            onClick={() => setImage(ImageCol1_1)}
            src={ImageCol1_1}
            width={videoWidth / 3}
            placeholder="blur"
            alt="separator"
          />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Image
            onClick={() => setImage(ImageCol1_2)}
            src={ImageCol1_2}
            width={videoWidth / 3}
            placeholder="blur"
            alt="separator"
          />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Image
            onClick={() => setImage(ImageCol1_3)}
            src={ImageCol1_3}
            width={videoWidth / 3}
            placeholder="blur"
            alt="separator"
          />
        </AnimateOnScroll>
      </div>
      <AnimateOnScroll>
        <Image
          src={ImageCol5}
          onClick={() => setImage(ImageCol5)}
          width={videoWidth}
          alt="separator"
          placeholder="blur"
        />
      </AnimateOnScroll>
      <div className="flex flex-row">
        <AnimateOnScroll>
          <Image
            onClick={() => setImage(ImageCol5_1)}
            src={ImageCol5_1}
            width={videoWidth / 3}
            placeholder="blur"
            alt="separator"
          />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Image
            onClick={() => setImage(ImageCol5_2)}
            src={ImageCol5_2}
            width={videoWidth / 3}
            placeholder="blur"
            alt="separator"
          />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Image
            onClick={() => setImage(ImageCol5_3)}
            src={ImageCol5_3}
            width={videoWidth / 3}
            placeholder="blur"
            alt="separator"
          />
        </AnimateOnScroll>
      </div>
      <AnimateOnScroll>
        <Image
          src={ImageCol6}
          onClick={() => setImage(ImageCol6)}
          width={videoWidth}
          alt="separator"
          placeholder="blur"
        />
      </AnimateOnScroll>
      <div className="flex flex-row">
        <AnimateOnScroll>
          <Image
            onClick={() => setImage(ImageCol6_1)}
            src={ImageCol6_1}
            width={videoWidth / 3}
            placeholder="blur"
            alt="separator"
          />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Image
            onClick={() => setImage(ImageCol6_2)}
            src={ImageCol6_2}
            width={videoWidth / 3}
            placeholder="blur"
            alt="separator"
          />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Image
            onClick={() => setImage(ImageCol6_3)}
            src={ImageCol6_3}
            width={videoWidth / 3}
            placeholder="blur"
            alt="separator"
          />
        </AnimateOnScroll>
      </div>
      <AnimateOnScroll>
        <Image
          src={ImageCol2}
          onClick={() => setImage(ImageCol2)}
          width={videoWidth}
          alt="separator"
          placeholder="blur"
        />
      </AnimateOnScroll>
      <div className="flex flex-row">
        <AnimateOnScroll>
          <Image
            onClick={() => setImage(ImageCol2_1)}
            src={ImageCol2_1}
            width={videoWidth / 3}
            placeholder="blur"
            alt="separator"
          />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Image
            onClick={() => setImage(ImageCol2_2)}
            src={ImageCol2_2}
            width={videoWidth / 3}
            placeholder="blur"
            alt="separator"
          />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Image
            onClick={() => setImage(ImageCol2_3)}
            src={ImageCol2_3}
            width={videoWidth / 3}
            placeholder="blur"
            alt="separator"
          />
        </AnimateOnScroll>
      </div>
      <AnimateOnScroll>
        <Image
          src={ImageCol3}
          onClick={() => setImage(ImageCol3)}
          width={videoWidth}
          alt="separator"
          placeholder="blur"
        />
      </AnimateOnScroll>
      <div className="flex flex-row">
        <AnimateOnScroll>
          <Image
            onClick={() => setImage(ImageCol3_1)}
            src={ImageCol3_1}
            width={videoWidth / 3}
            placeholder="blur"
            alt="separator"
          />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Image
            onClick={() => setImage(ImageCol3_2)}
            src={ImageCol3_2}
            width={videoWidth / 3}
            placeholder="blur"
            alt="separator"
          />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Image
            onClick={() => setImage(ImageCol3_3)}
            src={ImageCol3_3}
            width={videoWidth / 3}
            placeholder="blur"
            alt="separator"
          />
        </AnimateOnScroll>
      </div>
      <AnimateOnScroll>
        <Image
          src={ImageCol4}
          onClick={() => setImage(ImageCol4)}
          width={videoWidth}
          alt="separator"
          placeholder="blur"
        />
      </AnimateOnScroll>
      <div className="flex flex-row">
        <AnimateOnScroll>
          <Image
            onClick={() => setImage(ImageCol4_1)}
            src={ImageCol4_1}
            width={videoWidth / 3}
            placeholder="blur"
            alt="separator"
          />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Image
            onClick={() => setImage(ImageCol4_2)}
            src={ImageCol4_2}
            width={videoWidth / 3}
            placeholder="blur"
            alt="separator"
          />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Image
            onClick={() => setImage(ImageCol4_3)}
            src={ImageCol4_3}
            width={videoWidth / 3}
            placeholder="blur"
            alt="separator"
          />
        </AnimateOnScroll>
      </div>
    </>
  );
}

function ImagePreview(props: {
  src: StaticImport;
  width: number;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed top-0 h-screen w-screen flex items-center justify-center z-50"
      onClick={props.onClose}
    >
      <div className="w-[450px] z-100 h-full">
        <div className="w-full h-full p-4 z-100 items-center justify-center flex bg-black bg-opacity-50">
          <div className="drop-shadow-md">
            <Image
              src={props.src}
              width={props.width - 40}
              alt="separator"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </div>
  );
}