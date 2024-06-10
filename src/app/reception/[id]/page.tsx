"use client";

import Image from "next/image";
import ReactPlayer from "react-player";
import { dancingScript, sansSerif } from "../../font";
import { cn } from "../../utils";
import Typewriter from "typewriter-effect";
import Image1 from "../../../../public/0_1.jpg";
import Image2 from "../../../../public/2.jpg";
import Hagai from "../../../../public/hagai.jpg";
import Putri from "../../../../public/putri.jpg";
import Separator from "../../../../public/separator_1.png";
import { Toaster } from "react-hot-toast";
import Submission from "./submission";
import Memories from "@/app/memories";
import Wishes from "@/app/wishes";
import Story from "@/app/story";
import { notFound, useParams } from "next/navigation";
import AnimateOnScroll from "./animate";
import { useEffect, useState } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { rsvp_deadline_en } from "@/app/deadline";

export default function Home() {
  const { id } = useParams();
  const [isLoadingVideo, setIsLoadingVideo] = useState(true);
  const [videoWidth, setVideoWidth] = useState(0);
  const [videoHeight, setVideoHeight] = useState(0);
  const [name, setName] = useState<string | null | undefined>(undefined);
  const [image, setImage] = useState<StaticImport | null>(null);

  useEffect(() => {
    const width = window.innerWidth <= 450 ? window.innerWidth : 450;
    setVideoWidth(width);
    setVideoHeight((width / 1280) * 720);
  }, []);

  useEffect(() => {
    fetch("/api/reception/" + id)
      .then((response) => response.json())
      .then((data) => setName(data.name));
  }, [id]);

  if (!videoWidth) return null;

  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const start = new Date();
  const end = new Date("2024-06-22");

  const days = Math.round(Math.abs((start.getTime() - end.getTime()) / oneDay));

  console.info(name);
  if (name === null) return notFound();

  return (
    <>
      {isLoadingVideo && <p>Loading...</p>}
      <main
        className={cn(
          "flex min-h-screen flex-col items-center justify-start bg-white max-w-[450px] relative",
          isLoadingVideo ? "hidden" : "visible"
        )}
      >
        <Toaster />
        <div className="relative">
          <ReactPlayer
            url={"/hero.mp4"}
            controls={false}
            width={videoWidth}
            height={videoHeight}
            playing
            muted
            loop
            playsinline={true}
            onReady={() => setIsLoadingVideo(false)}
          />
          <div
            style={{
              height: videoHeight,
            }}
            className="flex flex-col items-center justify-center absolute top-0 text-white w-full z-10"
          >
            <p className={cn(dancingScript.className)}>The Wedding Party of</p>
            <p className={cn(dancingScript.className, "text-4xl")}>
              Hagai & Putri
            </p>
            <p className="text-sm">22.06.2024</p>
          </div>
        </div>
        <AnimateOnScroll>
          <div className="flex items-center justify-center pt-2">
            <Image src={Separator} height={75} alt="separator" />
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="flex flex-col items-center justify-center p-4 py-5 pt-3 space-y-4">
            <p className="text-center text-4xl text-black">
              <Typewriter
                options={{
                  deleteSpeed: 1000000,
                  strings: [`Dear ${name},`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
            <p className="text-center leading-5 text-black">
              We are thrilled to invite you to join us for a joyous celebration
              as we unite in marriage. Your presence would mean the world to us
              as we embark on this beautiful journey together.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="flex flex-row space-x-4 items-center">
            <Image
              src={Hagai}
              width={videoWidth / 2}
              alt="Picture of the author"
            />
            <div className="flex flex-col space-y-2">
              <p className="text-2xl text-gray-700">Hagai Raja Sinulingga</p>
              <div className="border-t border-black font-light text-gray-700">
                the 4th child of
              </div>
              <p className="text-black">
                Gospin Sinulingga &<br />
                Hotria Sinaga
              </p>
            </div>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="flex flex-row space-x-4 items-center">
            <div className="flex flex-col space-y-2">
              <p className="text-2xl text-end text-black">
                Eunike Putri Permata Murthy
              </p>
              <div className="border-t border-black font-light text-gray-700 text-end">
                the 2nd child of
              </div>
              <p className="text-end text-black">
                I Made Timotius Moerthy &<br />
                Iis Winarni
              </p>
            </div>
            <Image
              src={Putri}
              width={videoWidth / 2}
              alt="Picture of the author"
            />
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="flex items-center justify-center py-5 relative w-full">
            <Image src={Separator} height={75} alt="separator" />
          </div>
        </AnimateOnScroll>
        <Story />
        <AnimateOnScroll>
          <div className="flex items-center justify-center py-5 relative w-full">
            <Image src={Separator} height={75} alt="separator" />
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="relative">
            <div
              className={cn(
                dancingScript.className,
                "text-2xl absolute h-full w-full flex items-center justify-center bg-black bg-opacity-50 z-50"
              )}
            >
              <p className="text-white text-4xl">Event Details</p>
            </div>
            <Image src={Image1} alt="Picture of the author" />
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="relative flex items-center justify-center py-5 flex-col w-full">
            <div
              style={{
                backgroundImage: "url(./bg.png)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                opacity: 0.2,
              }}
              className="absolute h-full w-full"
            ></div>
            <p className="text-center text-black px-4">
              Join us for the celebration at
              <br />
              <span className="font-bold text-gray-700">
                Sekar Jambu, Denpasar City
              </span>
              <br />
              — on — <br />{" "}
              <span className="font-bold text-gray-700">
                22nd of June 2024
              </span>{" "}
              <br />{" "}
              <span className="font-bold text-gray-700">
                17.30 Bali Time
              </span>
              <br />{" "}
              please arrive ontime, the grand entrance is on sunset
              <br />{" "}
              <span className="font-underline">
                Dress code: Pastel (exclude pink) 
              </span>
              <br />
            </p>
            <a href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=N3E2MnJyaTFiamlmcmRyZ2txNzEwajJjdTIgaGFnYWlyYWphQG0&tmsrc=hagairaja%40gmail.com"
            className={cn(
              sansSerif.className,
              "google-wish text-2l z-50"
            )} target="_blank" rel="noopener noreferrer">
              Add to Calendar
            </a>
            <br />
            <div className="relative h-[200px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15776.891470524244!2d115.24277480322088!3d-8.670343365150401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24068f801c5d7%3A0x37fddfd04fda407!2sSekar%20Jambu!5e0!3m2!1sid!2skr!4v1705150849140!5m2!1sid!2skr"
                width="450"
                height="200"
                style={{
                  border: 0,
                  zIndex: 1000,
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
                loading="lazy"
              ></iframe>
            </div>
            <div className="flex items-center justify-center py-5 relative w-full">
              <Image src={Separator} height={75} alt="separator" />
            </div>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="relative">
            <div
              className={cn(
                dancingScript.className,
                "flex flex-row text-2xl absolute h-full w-full items-center justify-end bg-black bg-opacity-20 z-50 pr-[10%]"
              )}
            >
              <p
                className={cn(
                  dancingScript.className,
                  "text-white text-5xl text-end leading-9 opacity-90"
                )}
              >
                Will we <br /> see you in <br /> {days} days?
              </p>
            </div>
            <Image src={Image2} alt="Picture of the author" />
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="px-4 pt-5 pb-0 space-y-4">
            <p className="text-center leading-5 text-black">
              For the convenience of our event, please confirm your attendance
              by {rsvp_deadline_en}
            </p>
            <Submission />
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="p-4 pb-5 pt-5">
            <div className="flex items-center justify-center pt-2">
              <Image src={Separator} height={75} alt="separator" />
            </div>
          </div>
        </AnimateOnScroll>

        <Wishes />

        <AnimateOnScroll>
          <div className="p-4 pb-5 pt-5">
            <div className="flex items-center justify-center pt-2">
              <Image src={Separator} height={75} alt="separator" />
            </div>
          </div>
        </AnimateOnScroll>
        
        <Memories />

        <p className={cn(dancingScript.className, "py-5 text-black")}>
          Inspired by lovely couple Gery & Mahita
        </p>
      </main>
    </>
  );
}
