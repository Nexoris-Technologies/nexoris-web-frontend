import Image from "next/image";
import { CgCheckO } from "react-icons/cg";

function WhyChoose() {
  return (
    <section className="flex bg-[#EAE8F7] ">
      <div className="flex flex-col container mx-auto items-center justify-center lg:flex-row gap-12 lg:gap-12  py-20 ">
        {/* Text Section */}
        <div className="flex flex-col  gap-8 max-w-xl ">
          <h1 className="w-[350px] lg:w-[600px] text-[24px] lg:text-[32px] font-bold  lg:text-left  ">
            Why Choose Nexoris for Mobile App Development?
          </h1>
          {/* Housing the paragraph texes */}
          <div className="flex flex-col  gap-[24px]  ">
            {/* first text */}
            <div className="flex gap-[16px]">
              <p className="text-[1.7rem]">
                <CgCheckO />
              </p>
              {/* <Image src="/subtract.svg" alt="Icon" width={24} height={24} /> */}
              <p className="text-[16px] md:text-[18px] w-[243px] lg:w-full ">
                Native-quality performance with cross-platform efficiency
              </p>
            </div>

            <div className="flex gap-[16px]">
              <p className="text-[1.7rem]">
                <CgCheckO />
              </p>
              {/* <Image src="/subtract.svg" alt="Icon" width={24} height={24} /> */}
              <p className="w-[233px] md:w-full text-[16px] md:text-[18px]">
                Built-in support for app store approvals and launch logistics
              </p>
            </div>

            <div className="flex gap-[16px]">
              <p className="text-[1.7rem]">
                <CgCheckO />
              </p>
              {/* <Image src="/subtract.svg" alt="Icon" width={24} height={24} /> */}
              <p className="w-[233px] text-[16px] md:text-[18px] md:w-[500px]">
                Expertise in integrating secure backends, even with legacy
                systems
              </p>
            </div>

            <div className="flex gap-[16px]">
              <p className="text-[1.7rem]">
                <CgCheckO />
              </p>
              {/* <Image src="/subtract.svg" alt="Icon" width={24} height={24} /> */}
              <p className="text-[16px] w-[233px] md:w-full md:text-[18px]">
                Human-centered UX that puts your users first
              </p>
            </div>
            <div className="flex gap-[16px]">
              <p className="text-[1.7rem]">
                <CgCheckO />
              </p>
              {/* <Image src="/subtract.svg" alt="Icon" width={24} height={24} /> */}
              <p className="text-[16px] w-[233px] md:w-full md:text-[18px]">
                Long-term support, from v1 to v10
              </p>
            </div>
          </div>
        </div>

        {/* Image and Testimonial */}
        <div className="w-[400px] h-[420px]  md:w-[600px] md:h-[600px] px-4 lg:px-0 relative overflow-hidden">
          <Image
            src="/mobile-app-photo.webp"
            alt="Service Image"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-[24px]"
          />
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
