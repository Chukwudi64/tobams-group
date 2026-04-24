"use client";

import Image from "next/image";
import { useRef } from "react";
import { PiGreaterThanBold, PiLessThanBold } from "react-icons/pi";

interface Testimonial {
  name: string;
  title: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Aisha Yusuf",
    title: "Founder, CraftHub NG",
    content:
      "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
    image: "/aisha-img.webp",
  },
  {
    name: "John Davies",
    title: "Marketing Manager, E-Commerce Emporium",
    content:
      "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
    image: "/john-img.webp",
  },
  {
    name: "Chinonso Nwankwo",
    title: "HR Director, FutureTech Solutions",
    content:
      "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
    image: "/chinonso-img.webp",
  },
  {
    name: "Extra Client",
    title: "CEO, Sample Company",
    content:
      "An additional testimonial to demonstrate the partial card layout. This helps create that 4th card peek effect seen in the design.",
    image: "/aisha-img.webp",
  },
];

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 320; // adjust based on card width
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#C4C4C44D]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}

        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#151515] mb-8 sm:mb-12 text-center font-serif tracking-normal leading-[130%]">
          Testimonials
        </h2>

        {/* Cards + Arrows Wrapper */}
        <div className="relative">
          {/* Scroll Container */}
          <div className="overflow-hidden">
            <div ref={scrollRef} className="flex gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-[95%] sm:w-[320px] lg:w-87.5 shrink-0 bg-white border-l-2 border-[#EF4353] rounded-lg lg:rounded-2xl py-5 px-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-[16px] text-[#151515] leading-[150%] font-sans">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-[#696969] leading-[150%] font-sans tracking-normal font-normal">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                  <p className="text-[16px] text-[#151515] leading-[150%] font-sans tracking-normal font-normal">
                    {testimonial.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <div className="flex justify-end gap-3 mt-8">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-lg bg-[#F043541A] text-[#EF4353]"
            >
              <PiLessThanBold />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-lg bg-[#F043541A] text-[#EF4353]"
            >
              <PiGreaterThanBold />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
