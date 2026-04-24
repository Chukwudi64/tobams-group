import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiInstagramFill, RiTwitterXFill } from "react-icons/ri";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";

export function Footer() {
  return (
    <footer className="bg-[#11040E] py-2 sm:py-4 lg:py-8 lg:px-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Company Info */}
          <div>
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.webp"
                alt="Tobams Group logo"
                width={140}
                height={40}
                priority
              />
            </Link>
            <p className="font-serif font-normal text-sm text-[#F8F8F8] mb-4 tracking-normal leading-[150%]">
              Tobams Group is an innovative consultancy firm reshaping the
              future of tech talent development in Africa, specializing in
              talent acquisition, internships, and skill development with a
              global perspective.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-[#151515] cursor-pointer rounded-[50px] p-2.5 bg-white"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </Link>
              <Link
                href="#"
                className="text-[#151515] cursor-pointer rounded-[50px] p-2.5 bg-white"
                aria-label="Instagram"
              >
                <RiInstagramFill size={20} />
              </Link>
              <Link
                href="#"
                className="text-[#151515] cursor-pointer rounded-[50px] p-2.5 bg-white"
                aria-label="Twitter"
              >
                <RiTwitterXFill size={20} />
              </Link>
            </div>
          </div>

          {/* What We Do */}
          <div>
            <h4 className="font-serif text-white font-bold mb-4 text-sm sm:text-base lg:text-[20px] tracking-normal leading-[100%]">
              What We Do
            </h4>
            <ul className="space-y-2 text-sm sm:text-xs text-white font-serif font-normal tracking-[0.03em] leading-[150%]">
              <li>
                <Link href="#" className="cursor-pointer">
                  Sustainability Services
                </Link>
              </li>
              <li>
                <Link href="#" className="cursor-pointer">
                  Strategic Planning and Implementation
                </Link>
              </li>
              <li>
                <Link href="#" className="cursor-pointer">
                  Tech Talent Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="cursor-pointer">
                  Training and Development
                </Link>
              </li>
              <li>
                <Link href="#" className="cursor-pointer">
                  IT Consulting Services
                </Link>
              </li>
              <li>
                <Link href="#" className="cursor-pointer">
                  Social Impact
                </Link>
              </li>
              <li>
                <Link href="#" className="cursor-pointer">
                  Talent Recruitment
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-white font-bold mb-4 text-sm sm:text-base lg:text-[20px] tracking-normal leading-[100%]">
              Company
            </h4>
            <ul className="space-y-2 text-sm sm:text-xs text-white font-serif font-normal tracking-[0.03em] leading-[150%]">
              <li>
                <Link href="#" className="cursor-pointer">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="cursor-pointer">
                  Jobs
                </Link>
              </li>
              <li>
                <Link href="#" className="cursor-pointer">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#" className="cursor-pointer">
                  Our Founder
                </Link>
              </li>
              <li>
                <Link href="#" className="cursor-pointer">
                  Business Model
                </Link>
              </li>
              <li>
                <Link href="#" className="cursor-pointer">
                  The Team
                </Link>
              </li>
              <li>
                <Link href="#" className="cursor-pointer">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="cursor-pointer">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="cursor-pointer">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="cursor-pointer">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Solution */}
          <div>
            <h4 className="font-serif text-white font-bold mb-4 text-sm sm:text-base lg:text-[20px] tracking-normal leading-[100%]">
              Solution
            </h4>
            <ul className="space-y-2 text-sm sm:text-xs text-white font-serif font-normal tracking-[0.03em] leading-[150%]">
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Tobams Group Academy
                </Link>
              </li>
              <li>
                <Link href="#" className="cursor-pointer">
                  Help a Tech Talent
                </Link>
              </li>
              <li>
                <Link href="#" className="cursor-pointer">
                  Campus Ambassadors Program
                </Link>
              </li>
              <li>
                <Link href="#" className="cursor-pointer">
                  Join Our Platform
                </Link>
              </li>
              <li>
                <Link href="#" className="cursor-pointer">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="cursor-pointer">
                  Book a Consultation
                </Link>
              </li>
              <li>
                <Link href="#" className="cursor-pointer">
                  Join Our Slack Community
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Registered Offices */}
        <div className="border-t border-[#DDD0DA] py-8 sm:py-10 block lg:hidden"></div>

        <div className="bg-[#FFFFFF0F] rounded-lg sm:px-6 sm:py-6 mb-9 sm:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 p-4">
            {/* Registered Offices - UK */}
            <div className="order-2 lg:order-1 lg:border-r lg:border-[#DDD0DA] lg:pr-8">
              <h5 className="font-serif text-white font-bold text-sm mb-3 tracking-normal leading-[100%]">
                Registered Offices
              </h5>

              <p className="font-semibold text-sm mb-1 font-sans tracking-normal leading-[150%] text-[#EF4353]">
                United Kingdom
              </p>
              <p className="font-normal text-sm mb-1 font-sans tracking-normal leading-[150%] text-white">
                07451196 (Registered by Company House)
                <br />
                Vine Cottages, 215 North Street, Romford, Essex, United Kingdom,
                RM1 4QA
              </p>
            </div>

            {/* Registered Offices - Nigeria */}
            <div className="order-3 lg:order-2 lg:border-r lg:border-[#DDD0DA] lg:px-8">
              <p className="font-semibold text-sm mb-1 font-sans tracking-normal leading-[150%] text-[#EF4353]">
                Nigeria
              </p>
              <p className="font-normal text-sm mb-1 font-sans tracking-normal leading-[150%] text-white">
                RC 1048722 (Registered by the Corporate Affairs Commission)
                <br />
                4, Muaz Close, Angwar-Rimi
              </p>
            </div>

            {/* Contact Information */}
            <div className="order-1 lg:order-3 lg:pl-8">
              <h5 className="font-serif text-white font-bold text-sm mb-3 tracking-normal leading-[100%]">
                Contact Information
              </h5>

              <div className="flex items-center gap-2 text-sm text-white mb-1 font-sans">
                <MdEmail className="text-[#EF4353]" />
                <Link
                  href="mailto:theteam@tobamsgroup.com"
                  className="hover:underline font-normal tracking-normal leading-[150%]"
                >
                  theteam@tobamsgroup.com
                </Link>
              </div>

              <div className="flex items-center gap-2 text-sm text-white">
                <BsTelephoneFill className="text-[#EF4353]" />
                <Link
                  href="tel:+447886600748"
                  className="hover:underline font-normal tracking-normal leading-[150%]"
                >
                  +447886600748
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#DDD0DA] py-8 sm:py-10">
          {/* Bottom Footer */}

          <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            {/* Copyright */}
            <p className="font-serif font-light text-sm text-white tracking-normal leading-6 text-center sm:text-left">
              Copyright © Tobama Group, 2024. All rights reserved.
            </p>

            {/* Links */}
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6">
              {/* Privacy + Cookies (top on mobile, after Terms on desktop) */}
              <div className="flex gap-4 order-1 sm:order-2">
                <Link
                  href="#"
                  className="text-white font-serif font-light text-sm leading-6 underline text-center cursor-pointer"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-white font-serif font-light text-sm leading-6 underline text-center cursor-pointer"
                >
                  Cookies Policy
                </Link>
              </div>

              {/* Terms (bottom on mobile, first on desktop) */}
              <Link
                href="#"
                className="text-white font-serif font-light text-sm leading-6 underline text-center order-2 sm:order-1 cursor-pointer"
              >
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
