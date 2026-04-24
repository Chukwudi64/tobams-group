import { MdArrowOutward } from "react-icons/md";
import { PiGreaterThanBold } from "react-icons/pi";

export function TrainingConsultant() {
  const features = [
    {
      title: "Expert-Led Learning",
      description:
        "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
    },
    {
      title: "Comprehensive Curriculum",
      description:
        "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
    },
    {
      title: "Interactive Workshops",
      description:
        "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
    },
    {
      title: "Global Recognition",
      description:
        "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#5712441A]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-4xl lg:text-[40px] font-semibold text-[#571244] mb-2 sm:mb-3 leading-[130%] tracking-normal font-serif">
          Training The Consultant
        </h2>
        <p className="text-base sm:text-lg text-[#571244] font-semibold mb-6 sm:mb-8 font-sans leading-[150%] tracking-normal">
          Maximise Your Potential as a Certified Trainer:
        </p>

        <p className="text-xs sm:text-base font-normal text-[#151515] mb-8 sm:mb-12 text-pretty leading-[150%] tracking-normal font-sans">
          With the help of our Training Consultants program, take a
          revolutionary step toward becoming a distinguished certified training
          consultant. Learn from professionals in the field, immerse yourself in
          a thorough curriculum, and hone your training methods through
          interactive workshops. Participating in our program will enable you to
          gain expertise in diverse courses while also developing the abilities
          to mentor and encourage others in their career advancement.
        </p>

        {/* Features Grid */}

        <div className="bg-[#571244] rounded-lg p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
            {/* Left Column */}
            <div className="space-y-6">
              {features.slice(0, 2).map((feature, index) => (
                <div key={index}>
                  <h3 className="text-white font-bold text-sm sm:text-[18px] leading-[150%] tracking-normal font-sans">
                    {feature.title}
                  </h3>
                  <p className="text-white text-xs sm:text-[16px] mt-2 leading-[150%] tracking-normal font-sans font-normal">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {features.slice(2, 4).map((feature, index) => (
                <div key={index}>
                  <h3 className="text-white font-bold text-sm sm:text-[18px] leading-[150%] tracking-normal font-sans">
                    {feature.title}
                  </h3>
                  <p className="text-white text-xs sm:text-[16px] mt-2 leading-[150%] tracking-normal font-sans font-normal">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button className="mt-4 sm:mt-6 px-6 py-[10.5px] flex items-center justify-center gap-2 bg-[#571244] hover:bg-[#571244]/90 text-white text-sm sm:text-base font-semibold rounded font-sans leading-[150%] tracking-normal cursor-pointer w-auto">
          Learn More
          {/* Mobile & Tablet */}
          <PiGreaterThanBold className="block lg:hidden" />
          {/* Laptop & Desktop */}
          <MdArrowOutward className="hidden lg:block" />
        </button>
      </div>
    </section>
  );
}
