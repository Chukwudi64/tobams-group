export function CTASection() {
  return (
    <section className="py-12 sm:py-16 lg:py-10 px-4 sm:px-6 lg:px-16 bg-[#1D0617] border-b-2 border-[#C4C4C4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-10">
          {/* Text Content */}
          <div className="max-w-2xl">
            <p className="font-sans text-xs sm:text-base text-white mb-3 font-normal tracking-normal leading-[150%]">
              Ready to be a part of something extraordinary?
            </p>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-semibold text-white leading-[130%] tracking-normal">
              Let&apos;s work together to create a difference
            </h2>
          </div>

          {/* Button */}
          <div className="shrink-0">
            <button className="mt-2 sm:mt-4 lg:mt-0 bg-[#571244] font-semibold hover:bg-[#571244]/90 text-white cursor-pointer text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-3 rounded-sm font-serif tracking-normal leading-[120%] text-center">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
