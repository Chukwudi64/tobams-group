import Image from "next/image";

export function Hero() {
  return (
    <section
      className="relative min-h-125 md:min-h-150 lg:min-h-175 flex items-center justify-center overflow-hidden"
    >
       <Image
    src="/hero-bg-img.webp"
    alt=""
    fill
    priority
    className="object-cover"
  />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#000000B2]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-16 lg:py-20">
        <div className="inline-block w-48.25 h-11.25 px-12 py-3 mb-4 sm:mb-6 bg-[#FFFFFF1A] rounded-[100px]">
          <span className="block text-white text-[14px] font-semibold leading-[150%] tracking-[0%] text-center font-sans uppercase">
            What We Do
          </span>
        </div>

        <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[130%] tracking-[0%] text-center text-white mb-6">
          Training and Development
        </h1>

        <p className="font-sans font-semibold text-[18px] leading-[150%] tracking-normal text-center text-white mb-8 sm:mb-10 text-lg sm:text-xl text-pretty">
          Our comprehensive range of programs and resources is designed to
          enhance skills, broaden knowledge, and propel careers forward in
          today&apos;s ever-evolving landscape.
        </p>

        <button
          className="
    w-53.5 h-12
    px-6 py-3
    rounded-sm
    bg-[#571244] hover:bg-[#571244]/90
    text-white
    font-sans font-semibold
    text-[18px] leading-[150%]
    text-center
    cursor-pointer
  "
        >
          Book a Consultation
        </button>
      </div>
    </section>
  );
}
