import logo from "../assets/logo-text.png";

const Footer = () => {
  const productLinks = ["Home", "Technology", "Projects"];
  const companyLinks = ["About", "Contact", "Careers"];
  const legalLinks = ["Privacy Policy", "Terms of Service"];

  return (
    <footer className="bg-base-100 border-t border-gray-300">
      <div className="container mx-auto px-5 lg:px-20">
        {/* ================= Main Footer ================= */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5 lg:gap-16">
          {/* ================= Brand ================= */}
          <div className="text-center sm:col-span-2 lg:col-span-2 lg:text-left">
            <a href="/" className="inline-block">
              <img
                src={logo}
                alt="Dev Stack"
                className="h-9 w-auto object-contain"
              />
            </a>

            <p className="text-base-content/60 mt-5 max-w-sm text-sm leading-6">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            {/* ================= Social Links ================= */}
            <div className="items-centerF mt-6 flex justify-center gap-5 lg:justify-start">
              <a
                href="#"
                className="text-base-content/60 text-sm font-medium transition-colors hover:text-[#D81B7E]"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-base-content/60 text-sm font-medium transition-colors hover:text-[#D81B7E]"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-base-content/60 text-sm font-medium transition-colors hover:text-[#D81B7E]"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* ================= Products ================= */}
          <div className="hidden lg:col-span-1 lg:block">
            <h3 className="text-base-content mb-5 text-xs font-bold tracking-widest">
              PRODUCTS
            </h3>

            <ul className="space-y-3">
              {productLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-base-content/60 text-sm transition-colors hover:text-[#D81B7E]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= Company ================= */}
          <div className="hidden lg:col-span-1 lg:block">
            <h3 className="text-base-content mb-5 text-xs font-bold tracking-widest">
              COMPANY
            </h3>

            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-base-content/60 text-sm transition-colors hover:text-[#D81B7E]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= Legal ================= */}
          <div className="hidden lg:col-span-1 lg:block">
            <h3 className="text-base-content mb-5 text-xs font-bold tracking-widest">
              LEGAL
            </h3>

            <ul className="space-y-3">
              {legalLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-base-content/60 text-sm transition-colors hover:text-[#D81B7E]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ================= Bottom Footer ================= */}
        <div className="flex flex-col gap-4 border-t border-gray-200 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base-content/50 text-center text-sm sm:text-left">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center justify-center gap-5">
            <a
              href="#"
              className="text-base-content/50 text-sm transition-colors hover:text-[#D81B7E]"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-base-content/50 text-sm transition-colors hover:text-[#D81B7E]"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
