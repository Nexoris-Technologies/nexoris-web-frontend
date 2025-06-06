import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaRegCopyright,
} from "react-icons/fa6";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  return (
    <footer
      className={`bg-purple-dark text-purple-6 px-4 md:px-12 lg:px-20 pt-12 ${className}`}
    >
      <div className="container mx-auto">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Logo + Social */}
          <div className="flex flex-col items-start">
            <div className="relative w-28 h-8 sm:w-32 sm:h-10 md:w-36 md:h-12 lg:w-40 lg:h-14 xl:w-44 xl:h-16">
              <Image
                src="/nexoris-nav-logo.webp"
                alt="Nexoris Technologies Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <Link
                href="https://www.facebook.com/profile.php?id=61575547172687&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-purple-6 rounded-full flex items-center justify-center text-primary-blue"
              >
                <FaFacebookF className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="https://x.com/Nexoristech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-purple-6 rounded-full flex items-center justify-center text-purple-dark"
              >
                <FaXTwitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="https://www.instagram.com/nexoristechnologies/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-purple-6 rounded-full flex items-center justify-center text-[#E1306C]"
              >
                <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/nexoris-technologies/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-purple-6 rounded-full flex items-center justify-center text-secondary-blue"
              >
                <FaLinkedinIn className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-purple-6 rounded-full flex items-center justify-center text-purple-dark"
              >
                <FaTiktok className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>

          {/* Navigation links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 flex-1 text-body-sm lg:mt-4 lg:ml-16 xl:ml-20">
            {/* Company */}
            <div>
              <p className="font-semibold text-tertiary-gray mb-3 text-body">
                Company
              </p>
              <ul className="space-y-2 text-gray-5 text-body-md">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about-us">About Us</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact Us</Link>
                </li>
                <li>
                  <Link href="/careers">Careers</Link>
                </li>
                <li>
                  <Link href="/insights">Insights</Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <p className="font-semibold text-tertiary-gray mb-3 text-body">
                Services
              </p>
              <ul className="space-y-2 text-gray-5 text-body-md">
                <li>
                  <Link href="/web-development">Web Development</Link>
                </li>
                <li>
                  <Link href="/ui-ux-design-consulting">
                    UI/UX Design and Consulting
                  </Link>
                </li>
                <li>
                  <Link href="/mobile-app-development">Mobile Application</Link>
                </li>
                <li>
                  <Link href="/seo-content-marketing">
                    SEO and Content Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/product-design-management">
                    Product Design and Management
                  </Link>
                </li>
                <li>
                  <Link href="/custom-software-solutions">
                    Custom Software Solution
                  </Link>
                </li>
                <li>
                  <Link href="/digital-transformation-consulting">
                    Digital Transformation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <p className="font-semibold text-tertiary-gray mb-3 text-body">
                Resources
              </p>
              <ul className="space-y-2 text-gray-5 text-body-md">
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/cookie-policy">Cookie Policy</Link>
                </li>
                <li>
                  <Link href="/terms-of-service">Terms of Service</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-4 border-t border-primary-purple text-center text-sm text-gray-5">
          <div className="flex items-center justify-center gap-2">
            <FaRegCopyright size={16} aria-hidden="true" />
            <span>
              {new Date().getFullYear()} Nexoris Technologies. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
