

import { cn } from "../utils";
import { dancingScript, sansSerif } from "../font";
import AnimateOnScroll from "../animate";

export default function Story() {
  
  return (
    <>
      <AnimateOnScroll>
          <div className="px-4 pt-3 pb-5 mb-2 space-y-4">
            <p className="text-center leading-5 text-black font-serif">
              {'TUHAN Allah berfirman:'}<br/>{'"Tidak baik, kalau manusia itu seorang diri saja.'}<br/> {'Aku akan menjadikan penolong baginya, yang sepadan dengan dia."'}<br/>
              <span className="font-bold">{'Kejadian 2:18'}</span>
            </p>
          </div>
      </AnimateOnScroll>
      <AnimateOnScroll>
          <div className="p-4 pb-5 pt-0">
            <p
              className={cn(
                dancingScript.className,
                "text-center text-5xl text-black"
              )}
            >
              Kisah Kasih
            </p>
          </div>
          <div className="px-4 pt-5 pb-0 space-y-4">
            <p className="text-center leading-5 text-black">
              <span className="font-bold">Perkenalan</span>{" kami bermula di tahun 2019, sebuah pertemuan yang tak terduga di "}<span className="text-white bg-black">Warung Pecel Lele</span>{" seusai rapat divisi PMK ITB (Persatuan Mahasiswa Kristen di kampus kami). Tak lama kemudian, Hagai memulai perbincangan melalui DM Instagram. Menariknya, meski Hagai mengetahui nomor Putri dari database PMK ITB, ia berpura-pura meminta nomor WhatsApp-nya."}
              <br /><br />
              {"Setelah fase "}<span className="text-white bg-black">saling mengenal selama 12 minggu</span>{" , Hagai mengunjungi Bali dan kami memutuskan untuk resmi "}<span className="font-bold">berpacaran</span>{" pada tanggal 18 November 2020. Tiga bulan kemudian, Hagai pergi untuk S2 di Seoul. Puji Tuhan, kami tetap bisa menjalani komitmen untuk LDR (Hubungan jarak jauh) selama lebih dari 2 tahun."}
              <br /><br />
              {"Pada tanggal 18 Agustus 2023, Hagai membawa orang tuanya ke rumah Putri di "}<span className="text-white bg-black">Bali</span>{", menunjukkan "}<span className="font-bold">komitmen untuk mengambil langkah selanjutnya</span>{". Putri pun membalasnya dengan bertemu keluarga Hagai di "}<span className="text-white bg-black">Medan</span>{" pada perayaan tahun baru 2024"}.
              <br /><br />
              {"Sekarang, inilah saat yang sangat berarti dan istimewa bagi kami. Kita telah memilih tanggal 22 Juni 2024 sebagai hari untuk mengucapkan "}<span className="font-bold">janji pernikahan</span>{" di hadapan Tuhan dan orang-orang yang kami kasihi. "}<br/><span className="font-bold underline">Kiranya Tuhan memberkati babak baru dalam perjalanan kami ini.</span>
              <br />
            </p>
          </div>
        </AnimateOnScroll>
    </>
  );
}
