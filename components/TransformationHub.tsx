import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

import { BsLightningCharge } from "react-icons/bs";

export function TransformationHub() {
  const topics = [
    "Strategic Career Guidance",
    "Leadership Development",
    "CV Development",
    "Sustainability Leadership",
    "Communication Skills",
    "Business Model",
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-6xl mx-auto bg-[#EF435333] rounded-2xl p-6 sm:p-8 lg:p-10">
        <div className="font-serif text-[20px] font-semibold text-[#1671D9] mb-2 italic leading-[130%] tracking-normal">
          Learning With Our CEO:
        </div>

        <h2 className="font-serif text-[20px] sm:text-4xl lg:text-[32px] font-semibold italic text-[#571244] mb-6 sm:mb-8 text-balance leading-[130%] tracking-normal">
          Transformation Hub With Jite Newton
        </h2>

        <p className="font-sans font-normal text-sm sm:text-base lg:text-[18px] text-[#151515] mb-8 text-pretty leading-[150%] tracking-normal">
          Transformation Hub with Jite Newton is a flagship webinar series
          curated by the CEO, Dr. Jite Newton. Designed to elevate career
          trajectories and leadership capabilities, this exclusive event offers
          invaluable insights and strategies for personal and professional
          growth. Whether you&apos;re seeking to advance your career or enhance
          your leadership skills, the Transformation Hub provides a
          transformative learning experience to unlock your full potential and
          drive success in your endeavours.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {/* Image */}
          <div className="relative h-48 sm:h-64 lg:h-80">
            <Image
              src="/th-img.webp"
              alt="Jite Newton leading transformation hub webinar"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Topics Grid */}
          <div className="bg-[#FFFFFF4D] rounded-lg p-4 sm:p-6 lg:py-8 lg:px-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {topics.map((topic, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-4 shadow-sm"
                >
                  <BsLightningCharge className="text-[#571244] w-[16.33px] h-5.25" />

                  <span className="text-[12px] sm:text-sm text-[#151515] font-normal font-sans leading-[150%] tracking-normal">
                    {topic}
                  </span>
                </div>
              ))}
            </div>

            <button className="mt-4 sm:mt-6 px-6 py-[10.5px] flex items-center justify-center gap-2 bg-[#571244] hover:bg-[#571244]/90 text-white text-sm sm:text-base font-semibold rounded font-sans leading-[150%] tracking-normal cursor-pointer w-auto">
              Learn More
              <MdArrowOutward />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
