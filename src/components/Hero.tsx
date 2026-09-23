import banner from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="bg-base-100 overflow-hidden">
      <div className="container mx-auto px-5 py-10 lg:px-20">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ================= Hero Content ================= */}
          <div className="text-center lg:text-left">
            {/* Heading */}
            <h1 className="text-base-content text-3xl leading-tight font-extrabold tracking-tight md:text-4xl lg:text-5xl">
              Build Your Ideal{" "}
              <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            {/* Description */}
            <p className="text-base-content/60 mx-auto mt-6 max-w-xl text-base leading-7 sm:text-lg lg:mx-0">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex items-center gap-3">
              {/* Gradient Button */}
              <button className="rounded-md bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] px-6 py-2.5 text-sm font-semibold text-white">
                Explore Technologies
              </button>

              {/* Secondary Button */}
              <button className="bg-base-100 text-base-content rounded-md border border-gray-300 px-8 py-2.5 text-sm font-semibold">
                Learn More
              </button>
            </div>
          </div>

          {/* ================= Hero Banner ================= */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={banner}
              alt="Development stack illustration"
              className="w-full max-w-3xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
