import Image from "next/image";
import { BsFillLightningChargeFill } from "react-icons/bs";

export function ManagementDevelopment() {
  const benefits = [
    "Enhanced Leadership Skills",
    "Improved Employee Engagement",
    "Stronger Organisational Culture",
    "Sustainable Growth",
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto bg-[#2C0922] rounded-[20px] p-6 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-stretch">
          {/* DESKTOP IMAGE */}
          <div className="hidden lg:block relative h-full">
            <Image
              src="/md-img.webp"
              alt="Management development image with team collaborating in a modern office environment"
              fill
              className="object-cover rounded-tl-lg rounded-tr-lg rounded-bl-lg"
            />
          </div>

          {/* LEFT SIDE (TEXT) */}
          <div>
            <h2 className="text-[12px] sm:text-4xl lg:text-3xl font-semibold text-white mb-4 sm:mb-6 font-serif leading-[150%] tracking-[0.03em]">
              Management Development Program
            </h2>

            {/* MOBILE IMAGE */}
            <div className="block lg:hidden relative h-48 sm:h-64 mb-6">
              <Image
                src="/md-img.webp"
                alt="Management development image with team collaborating in a modern office environment"
                fill
                className="object-cover rounded-tl-lg rounded-tr-lg rounded-bl-lg"
              />
            </div>

            <p className="text-sm font-normal sm:text-base text-white mb-6 text-pretty leading-[150%] tracking-normal font-sans">
              Tobams Group offers a comprehensive Management Development Program
              designed to equip corporate organisations with the high-performing
              leaders they need to thrive.
            </p>

            <p className="text-sm font-normal sm:text-base text-white mb-6 text-pretty leading-[150%] tracking-normal font-sans">
              Our program includes workshops, seminars, coaching sessions,
              online courses, and experiential learning opportunities designed
              to improve leadership, strategic thinking, communication, and
              other essential managerial competencies for corporate
              organisations.
            </p>

            {/* Benefits */}
            <div className="space-y-3 sm:space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-[#8F6182] rounded-lg px-2 py-1"
                >
                  <BsFillLightningChargeFill className="text-white h-6 w-[18.67px]" />
                  <span className="font-sans text-[12px] sm:text-base text-white font-semibold leading-[150%] tracking-normal">
                    {benefit}
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
