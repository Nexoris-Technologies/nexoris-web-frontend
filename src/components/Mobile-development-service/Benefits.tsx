import Image from "next/image";

export default function Keys() {
  return (
    <section className="lg:bg-[#EAE8F7] px-4">
      <div className="flex flex-col items-center gap-12 py-12 lg:py-24  mx-auto">
        {/* Mini phone icon */}
        <div className="w-10 h-10 lg:w-[40px] lg:h-[40px] lg:mr-[3rem] ">
          <Image
            src="/mini-phone.webp"
            alt="Mini phone"
            width={40}
            height={40}
          />
        </div>

        {/* Heading */}
        <h3 className="font-bold text-xl sm:text-2xl lg:text-4xl text-center">
          Key Benefits at a Glance
        </h3>

        {/* Cards Container */}
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          {/* Card 1 */}
          <div className="flex flex-col gap-4 bg-white shadow-2xl p-6 border-t-14 border-[#543CDA] rounded-tl-2xl rounded-tr-2xl w-full max-w-[360px] lg:max-w-[290px] min-h-[200px]">
            <Image src="/Number 1.svg" alt="Number 1" width={40} height={40} />
            <p className="text-base leading-relaxed">
              Performance That Feels Native: Smooth animations, quick load
              times, and no-friction interactions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-4 bg-white shadow-2xl p-6 border-t-14 border-[#543CDA] rounded-tl-2xl rounded-tr-2xl w-full max-w-[360px] lg:max-w-[290px] min-h-[200px]">
            <Image src="/Number 2.svg" alt="Number 2" width={40} height={40} />
            <p className="text-base leading-relaxed">
              Cross-Platform From Day One: One codebase for iOS and Android
              using Flutter & the likes.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col gap-4 bg-white shadow-2xl p-6 border-t-14 border-[#543CDA] rounded-tl-2xl rounded-tr-2xl w-full max-w-[360px] lg:max-w-[290px] min-h-[200px]">
            <Image src="/Number 3.svg" alt="Number 3" width={40} height={40} />
            <p className="text-base leading-relaxed">
              Launch-Ready for App Store and Play Store: Compliant, optimized,
              and ready for smooth approvals.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col gap-4 bg-white shadow-2xl p-6 border-t-14 border-[#543CDA] rounded-tl-2xl rounded-tr-2xl w-full max-w-[360px] lg:max-w-[290px] min-h-[200px]">
            <Image src="/Number 4.svg" alt="Number 4" width={40} height={40} />
            <p className="text-base leading-relaxed">
              Custom Features, No Templates: Built from scratch to fit your
              business, not limited by others.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
