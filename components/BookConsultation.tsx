export function BookConsultation() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Features Grid */}

        <div className="bg-[#571244] rounded-lg py-8 px-16 gap-8">
          <div>
            {/* Mobile & Tablet */}
            <h2 className="block lg:hidden font-serif font-semibold leading-[150%] tracking-[0.03em] text-center text-white mb-8 sm:mb-10 text-[10px] sm:text-xl text-pretty">
              Don&apos;t just dream it—let&apos;s build it! Click now and start
              your project with Tobams Group. Your journey to digital excellence
              begins here.
            </h2>

            {/* Laptop & Desktop */}
            <h2 className="hidden lg:block font-serif font-semibold leading-[150%] tracking-[0.03em] text-center text-white mb-8 sm:mb-10 text-[16px] sm:text-xl text-pretty">
              Want to accelerate professional growth and development at your
              organisation? See how we can help.
            </h2>

            <button
              className="
    font-serif
    w-full sm:w-auto
    max-w-xs
    h-12
    px-6 py-3
    rounded-sm
    bg-white
    text-[#571244]
    font-semibold
    text-[10px] sm:text-[17px]
    leading-[120%]
    text-center
    cursor-pointer
    border border-[#571244]
    block mx-auto
  "
            >
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
