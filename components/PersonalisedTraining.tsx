import Image from "next/image";
import { BsFillLightningChargeFill } from "react-icons/bs";

export function PersonalisedTraining() {
  const topics = [
    "Leadership Development",
    "Soft Skills Development",
    "Industry Specific Knowledge",
    "Technical Skills Enhancement",
    "Time Management and Productivity",
    "Career Development",
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-stretch">
          {/* DESKTOP IMAGE */}
          <div className="hidden lg:block relative h-full">
            <Image
              src="/pi-img.webp"
              alt="Personalised individual training session"
              fill
              className="object-cover rounded-tl-[33px] rounded-tr-lg rounded-br-lg rounded-bl-lg"
            />
          </div>

          {/* LEFT SIDE (TEXT) */}
          <div>
            <h2 className="text-lg sm:text-4xl lg:text-[30px] font-semibold text-[#151515] mb-2 font-serif leading-[150%] tracking-[0.03em]">
              Personalised Individual Training
            </h2>

            {/* MOBILE IMAGE */}
            <div className="block lg:hidden relative h-48 sm:h-64 mb-6">
              <Image
                src="/pi-img.webp"
                alt="Personalised individual training session"
                fill
                className="object-cover rounded-tl-[33px] rounded-tr-lg rounded-br-lg rounded-bl-lg"
              />
            </div>

            <p className="font-sans text-[18px] text-[#696969] mb-6">
              Begin a journey of lifelong learning and professional development
              with Tobams Group&apos;s diverse range of training programs for
              individuals. From technical skills mastery to soft skills
              enhancement, our courses cover a wide spectrum of topics to meet
              the evolving needs of today&apos;s professionals.
            </p>

            {/* TRAINING LIST */}
            <div className="space-y-3 sm:space-y-4">
              {topics.map((topic, index) => (
                <div key={index} className="flex items-center gap-3 lg:pl-8">
                  <BsFillLightningChargeFill className="text-[#480F39]" />
                  <span className="font-sans text-base sm:text-[18px] text-[#696969]">
                    {topic}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
