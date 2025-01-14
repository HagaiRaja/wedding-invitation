"use client";

import { Loader2 } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { cn } from "../../../utils";
import { useParams } from "next/navigation";

export default function Submission() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [loadingReject, setLoadingReject] = useState(false);
  const [status, setStatus] = useState<string | undefined>(undefined);
  const accept = async () => {
    setLoading(true);
    const response = await fetch("/api/holy-matrimony/submit", {
      body: JSON.stringify({
        value: "accept",
        id,
      }),
      method: "POST",
    });
    if (response.status !== 200) {
      toast.error("Terjadi kesalaham, silahkan coba lagi");
      setLoading(false);
      return;
    }
    setLoading(false);
    toast.success("Submission is successful");
    setStatus("accept");
  };

  const reject = async () => {
    setLoadingReject(true);
    const response = await fetch("/api/holy-matrimony/submit", {
      body: JSON.stringify({
        value: "reject",
        id,
      }),
      method: "POST",
    });
    if (response.status !== 200) {
      toast.error("Terjadi kesalaham, silahkan coba lagi");
      setLoadingReject(false);
      return;
    }
    setLoadingReject(false);
    toast.success("Submission is successful");
    setStatus("reject");
  };

  return (
    <div>
      {!status && (
        <div className="flex flex-row space-x-4">
          <div
            className="flex flex-row bg-black py-2 px-4 flex-grow cursor-pointer items-center justify-center space-x-1"
            onClick={() => accept()}
          >
            <div className="h-4 w-4 bg-black"></div>
            <p className="bg-black text-white hover:underline pr-1 text-center">
              Ya, saya akan datang
            </p>
            <Loader2
              className={cn(
                "h-4 w-4 animate-spin",
                loading ? "text-white" : "text-black"
              )}
            />
          </div>
          <div
            className="flex flex-row bg-white py-2 px-4 flex-grow border border-black cursor-pointer items-center justify-center space-x-1"
            onClick={() => reject()}
          >
            <div className="h-4 w-4 bg-white"></div>
            <p className=" text-black hover:underline text-center">
              Maaf, saya tidak bisa datang
            </p>
            <Loader2
              className={cn(
                "h-4 w-4 animate-spin",
                loadingReject ? "text-black" : "text-white"
              )}
            />
          </div>
        </div>
      )}
      {status == "accept" && (
        <p className="text-center border border-black py-2 px-4 w-full">
          Terima kasih, sampai jumpa di hari bahagia!
        </p>
      )}
      {status == "reject" && (
        <p className="text-center border border-black py-2 px-4 w-full">
          Tidak apa-apa, kita cerita nanti ya ;)
        </p>
      )}
    </div>
  );
}
