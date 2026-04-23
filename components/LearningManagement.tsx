"use client";

import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

export function LearningManagement() {
  const courses = [
    "Business Analysis",
    "Design Thinking",
    "Effective Communication",
    "Entrepreneurship",
    "Career Development",
    "Business Model",
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#5712441A] my-6">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">

          {/* TITLE (mobile first) */}
          <h2 className="lg:hidden font-serif font-semibold text-[20px] sm:text-[30px] leading-[150%] text-[#571244]">
            Learning Management System
          </h2>

          {/* IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-90 lg:h-90 rounded-full overflow-hidden">
              <Image
                src="/lm-img.webp"
                alt="Professionals collaborating in learning environment"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="w-full">

            {/* TITLE (desktop only) */}
            <h2 className="hidden lg:block font-serif font-semibold text-[30px] leading-[150%] text-[#571244] mb-4">
              Learning Management System
            </h2>

            {/* CARD */}
            <div className="w-full p-5 sm:p-6 rounded-lg bg-[#5712441A]">

              <p className="text-[16px] sm:text-[18px] leading-[150%] text-[#151515]">
                TG Academy is a hub of knowledge and skill-building resources
                designed to empower tech talents on their learning journey.
                From technical courses covering the latest programming
                languages and development frameworks to soft skills training
                in leadership, effective communication and project management,
                TG Academy offers a wide range of courses to cater to diverse
                learning needs. With accessible and interactive learning
                materials, individuals can enhance their skills and stay ahead
                in today&apos;s competitive tech landscape.
              </p>

              <p className="font-bold text-[16px] sm:text-[18px] text-[#571244] my-4">
                Some of our courses include:
              </p>

              {/* BULLETS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className="text-[13px] text-[#151515] flex items-center gap-2"
                  >
                    <span>•</span>
                    {course}
                  </div>
                ))}
              </div>

              {/* BUTTON */}
              <button className="mt-6 w-full sm:w-auto px-6 py-3 flex items-center justify-center gap-2 bg-[#571244] hover:bg-[#571244]/90 text-white text-sm sm:text-base font-semibold rounded">
                Learn More
                <MdArrowOutward />
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}