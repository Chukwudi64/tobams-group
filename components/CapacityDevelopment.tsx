import Image from "next/image";
import { BsFillLightningChargeFill } from "react-icons/bs";

export function CapacityDevelopment() {
  const benefits = [
    "Tailored Training Programs",
    "Expert-Led Workshops",
    "Personalized Mentorship",
    "Technical Skills Enhancement",
    "Collaborative Learning Environment",
    "Ongoing Support and Resources",
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-stretch">
          {/* LEFT SIDE (TEXT) */}
          <div>
            <h2 className="text-xl sm:text-4xl lg:text-5xl font-semibold text-[#151515] mb-2 font-serif leading-[150%] tracking-[0.03em]">
              Capacity Development
            </h2>

            {/* MOBILE IMAGE */}
            <div className="block lg:hidden relative h-48 sm:h-64 mb-6">
              <Image
                src="/cd-img.webp"
                alt="Capacity development workshop with participants and facilitator"
                fill
                className="object-cover rounded-tl-[33px] rounded-tr-lg rounded-br-lg rounded-bl-lg"
              />
            </div>

            <p className="font-sans text-[18px] text-[#696969] mb-6">
              At Tobams Group, we empower individuals and organizations through
              tailored training programs, expert-led workshops, and personalized
              mentorship. We are committed to your success and growth. We are
              dedicated to providing a comprehensive suite of benefits designed
              to foster your development and success:
            </p>

            {/* TRAINING LIST */}
            <div className="space-y-3 sm:space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 lg:pl-8">
                  <BsFillLightningChargeFill className="text-[#480F39]" />
                  <span className="font-sans text-base sm:text-[18px] text-[#696969]">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* DESKTOP IMAGE */}
          <div className="hidden lg:block relative h-full">
            <Image
              src="/cd-img.webp"
              alt="Capacity development workshop with participants and facilitator"
              fill
              className="object-cover rounded-tl-[40px] rounded-tr-lg rounded-br-lg rounded-bl-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
