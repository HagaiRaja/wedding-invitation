

import BCA from "../../../public/bank/bca.jpg";
import BNI from "../../../public/bank/bni.jpg";
import Mandiri from "../../../public/bank/mandiri.jpg";
import Woori from "../../../public/bank/woori.jpg";

import { cn } from "../utils";
import { dancingScript, sansSerif } from "../font";
import AnimateOnScroll from "../animate";
import toast from "react-hot-toast";
import Image from "next/image";

export default function Wishes() {

  const copyClipboard = async (message:any, value:any) => {
    navigator.clipboard.writeText(value);
    toast.success(`${message} telah disalin`);
  };
  
  return (
    <>
      
      <AnimateOnScroll>
          <div className="p-4 pb-5 pt-0">
            <p
              className={cn(
                dancingScript.className,
                "text-center text-5xl text-black"
              )}
            >
              Ucapan & Doa
            </p>
          </div>
          <div className="px-4 pt-5 pb-0 space-y-4">
            <p className="text-center leading-5 text-black">
              Sampaikan doa dan harapan Anda untuk kami 💌
              <br /><br />{" "}
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfzFabqHPiAh9_tTBptUddA0aDXl5HuPWviu_Xpn55LTFV3rg/viewform?usp=sf_link" className={cn(
                  sansSerif.className,
                  "google-wish text-2xl"
                )} target="_blank" rel="noopener noreferrer">
              Klik disini untuk menulis Pesan
              </a>
              <br /><br />{" "}
              Jika Anda ingin memberikan hadiah untuk membantu kami dalam petualangan kedepan, hadiah tunai akan sangat kami apresiasi 😊 Jika Anda lebih suka kado, jangan ragu untuk memberikan kejutan kepada kami dengan cara spesial Anda!
              <br />{" "}<br />{" "}
              Tuhan memberkati.
            </p>
            <br />{" "}
          </div>

          <div className="flex flex-row space-x-4 justify-center pl-1 pr-1">
            <div className="border border-gray-400 bg-white rounded p-4 flex flex-row justify-center leading-normal bank-div w-2/4" onClick={() => copyClipboard("Nomor rekening BCA", "7725420226")}>
              <div className="flex items-center">
                <Image className="w-10 h-10 rounded-full mr-4" src={BCA} alt="Avatar of Jonathan Reinink"/>
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">Eunike Putri P M</p>
                  <div className="flex flex-row text-gray-600">
                    7725420226  
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                        <path d="M5.5 3.5A1.5 1.5 0 0 1 7 2h2.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 1 .439 1.061V9.5A1.5 1.5 0 0 1 12 11V8.621a3 3 0 0 0-.879-2.121L9 4.379A3 3 0 0 0 6.879 3.5H5.5Z" />
                        <path d="M4 5a1.5 1.5 0 0 0-1.5 1.5v6A1.5 1.5 0 0 0 4 14h5a1.5 1.5 0 0 0 1.5-1.5V8.621a1.5 1.5 0 0 0-.44-1.06L7.94 5.439A1.5 1.5 0 0 0 6.878 5H4Z" />
                      </svg>     
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 bg-white rounded p-4 flex flex-row justify-center leading-normal bank-div w-2/4" onClick={() => copyClipboard("Nomor rekening BNI", "0772462762")}>
              <div className="flex items-center">
                <Image className="w-10 h-10 rounded-full mr-4" src={BNI} alt="Avatar of Jonathan Reinink"/>
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">Eunike Putri P M</p>
                  <div className="flex flex-row text-gray-600">
                    0772462762  
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                        <path d="M5.5 3.5A1.5 1.5 0 0 1 7 2h2.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 1 .439 1.061V9.5A1.5 1.5 0 0 1 12 11V8.621a3 3 0 0 0-.879-2.121L9 4.379A3 3 0 0 0 6.879 3.5H5.5Z" />
                        <path d="M4 5a1.5 1.5 0 0 0-1.5 1.5v6A1.5 1.5 0 0 0 4 14h5a1.5 1.5 0 0 0 1.5-1.5V8.621a1.5 1.5 0 0 0-.44-1.06L7.94 5.439A1.5 1.5 0 0 0 6.878 5H4Z" />
                      </svg>     
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="flex flex-row space-x-4 justify-center mt-2 pl-1 pr-1">
            <div className="border border-gray-400 bg-white rounded p-4 flex flex-row justify-center leading-normal bank-div w-2/4" onClick={() => copyClipboard("Nomor rekening Mandiri", "1050018423180")}>
              <div className="flex items-center">
                <Image className="w-10 h-10 rounded-full mr-4" src={Mandiri} alt="Avatar of Jonathan Reinink"/>
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">Hagai Raja S</p>
                  <div className="flex flex-row text-gray-600">
                    1050018423180  
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                        <path d="M5.5 3.5A1.5 1.5 0 0 1 7 2h2.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 1 .439 1.061V9.5A1.5 1.5 0 0 1 12 11V8.621a3 3 0 0 0-.879-2.121L9 4.379A3 3 0 0 0 6.879 3.5H5.5Z" />
                        <path d="M4 5a1.5 1.5 0 0 0-1.5 1.5v6A1.5 1.5 0 0 0 4 14h5a1.5 1.5 0 0 0 1.5-1.5V8.621a1.5 1.5 0 0 0-.44-1.06L7.94 5.439A1.5 1.5 0 0 0 6.878 5H4Z" />
                      </svg>     
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 bg-white rounded p-4 flex flex-row justify-center leading-normal bank-div w-2/4" onClick={() => copyClipboard("Nomor rekening Woori", "1002662380779")}>
              <div className="flex items-center">
                <Image className="w-10 h-10 rounded-full mr-4" src={Woori} alt="Avatar of Jonathan Reinink"/>
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">Hagai Raja S</p>
                  <div className="flex flex-row text-gray-600">
                    1002662380779  
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                        <path d="M5.5 3.5A1.5 1.5 0 0 1 7 2h2.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 1 .439 1.061V9.5A1.5 1.5 0 0 1 12 11V8.621a3 3 0 0 0-.879-2.121L9 4.379A3 3 0 0 0 6.879 3.5H5.5Z" />
                        <path d="M4 5a1.5 1.5 0 0 0-1.5 1.5v6A1.5 1.5 0 0 0 4 14h5a1.5 1.5 0 0 0 1.5-1.5V8.621a1.5 1.5 0 0 0-.44-1.06L7.94 5.439A1.5 1.5 0 0 0 6.878 5H4Z" />
                      </svg>     
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
    </>
  );
}
