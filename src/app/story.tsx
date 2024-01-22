

import { cn } from "./utils";
import { dancingScript, sansSerif } from "./font";
import AnimateOnScroll from "./animate";

export default function Story() {
  
  return (
    <>
      <AnimateOnScroll>
          <div className="px-4 pt-3 pb-5 mb-2 space-y-4">
            <p className="text-center leading-5 text-black font-serif">
              {'The LORD God said, '}<br/>{'"It is not good for the man to be alone.'}<br/> {'I will make a helper suitable for him."'}<br/>
              <span className="font-bold">{'Genesis 2:18'}</span>
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
              Our Story
            </p>
          </div>
          <div className="px-4 pt-5 pb-0 space-y-4">
            <p className="text-center leading-5 text-black">
              {"In 2019, "}<span className="font-bold">our acquaintance</span>{" began during an unexpected encounter at "}<span className="text-white bg-black">Warung Pecel Lele</span>{" following a division meeting of the Christian Association at our campus (PMK ITB). Not long, Hagai initiated a conversation through Instagram DM. Interestingly, although Hagai had Putri's number from the PMK ITB database, he pretended to ask for her WhatsApp number."}
              <br /><br />
              {"Over a "}<span className="text-white bg-black">serious 12 weeks</span>{" getting-to-know-each-other phase, Hagai visited Bali and we decided to "}<span className="font-bold">officially start dating</span>{" on November 18th 2020. However, our journey took a turn as Hagai chose to study in Seoul, leading us into Long Distance Relationship (LDR). Putri escorted Hagai in tears, to CGK airport on February 14th 2021."}
              <br /><br />
              {"On August 18th 2023, Hagai brought his parents to Putri's "}<span className="text-white bg-black">Bali</span>{" home, demonstrating his "}<span className="font-bold">commitment to taking the next step</span>{". Putri reciprocated by meeting Hagai's family in "}<span className="text-white bg-black">Medan</span>{" on New Year's Eve 2024"}.
              <br /><br />
              {"Now, this is the most significant and special time for us. We have chosen June 22nd 2024 as the day to "}<span className="font-bold">exchange vows</span>{" before God and our loved ones. "}<br/><span className="font-bold underline">May God bless this new chapter in our journey.</span>
              <br />
            </p>
          </div>
        </AnimateOnScroll>
    </>
  );
}
