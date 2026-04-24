import Image from "next/image";
import { BsFillLightningChargeFill } from "react-icons/bs";

export function CorporateTraining() {
  const trainings = [
    "Leadership Training",
    "Strategic Planning and Implementation",
    "Project Management",
    "Sustainability Training",
    "Customised Training",
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-stretch">
          {/* LEFT SIDE (TEXT) */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#151515] mb-4 sm:mb-6 font-serif leading-[150%] tracking-[0.03em]">
              Corporate Trainings
            </h2>

            {/* MOBILE IMAGE */}
            <div className="block lg:hidden relative h-48 sm:h-64 mb-6">
              <Image
                src="/ct-img.webp"
                alt="Corporate training session with team members and facilitator"
                fill
                className="object-cover rounded-tl-[56px] rounded-tr-3xl rounded-br-[23px] rounded-bl-xl"
              />
            </div>

            <p className="font-sans text-[18px] text-[#696969] mb-6">
              Empower your team with our customised Corporate Training programs
              designed to address the unique needs and objectives of your
              organisation. Our expert facilitators work closely with your team
              to deliver tailored learning experiences that align with your
              company&apos;s goals and values.
            </p>

            {/* TRAINING LIST */}
            <div className="space-y-3 sm:space-y-4">
              {trainings.map((training, index) => (
                <div key={index} className="flex items-center gap-3">
                  <BsFillLightningChargeFill className="text-[#480F39]" />
                  <span className="font-sans text-base sm:text-[18px] text-[#696969]">
                    {training}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* DESKTOP IMAGE */}
          <div className="hidden lg:block relative h-full">
            <Image
              src="/ct-img.webp"
              alt="Corporate training session with team members and facilitator"
              fill
              className="object-cover rounded-tl-[56px] rounded-tr-3xl rounded-br-[23px] rounded-bl-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
