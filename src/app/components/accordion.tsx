export default function accordion() {
  return (
    <main className="flex justify-center items-center py-[100px]" id="accordion">
      <div className="accordion-wrapper w-full max-w-[1200px] p-5">
        <nav className="py-[25px]">
          <h1
            className="Gilroy-Semibold text-[#0d0d0d] leading-[35px]"
            style={{ fontSize: "clamp(35px, 5vw, 50px)" }}
          >
            FAQ
          </h1>
          <p className="Gilroy-Regular text-[#0d0d0d] text-[20px] leading-[35px]">
            Common questions
          </p>
        </nav>
        <div className="accordion-container flex gap-5">
          <div className="accordion-card-container flex gap-5">
            <div className="border-[1px] h-auto w-full border-[#3d3d3d] border-opacity-25 p-6 rounded-[28px] hover:border-[#3a86ff] duration-150 ease-in-out hover:-translate-y-2">
              <nav>
                <h1 className="Gilroy-Semibold text-[#0d0d0d]">
                  What is Clamp?
                </h1>
                <p className="Gilroy-Regular text-[#0d0d0d]">
                  Clamp is a website building company where you can request a
                  website that you want to build, and we build it for you.
                </p>
              </nav>
            </div>
            <div className="border-[1px] h-auto w-full border-[#3d3d3d] border-opacity-25 p-6 rounded-[28px] hover:border-[#3a86ff] duration-150 ease-in-out hover:-translate-y-2">
              <nav>
                <h1 className="Gilroy-Semibold text-[#0d0d0d]">
                  {" "}
                  Website build time
                </h1>
                <p className="Gilroy-Regular text-[#0d0d0d]">
                  Yes, we offer reliable and secure website hosting packages
                  tailored to your needs. Hosting plans include regular backups,
                  security updates, and support. If you already have a hosting
                  provider, we can work with that as well.
                </p>
              </nav>
            </div>
            <div className="border-[1px] h-auto m-w-[350px] w-full border-[#3d3d3d] border-opacity-25 p-6 rounded-[28px] hover:border-[#3a86ff] duration-150 ease-in-out hover:-translate-y-2">
              <nav>
                <h1 className="Gilroy-Semibold text-[#0d0d0d]">
                  {" "}
                  Do you offer website hosting?
                </h1>
                <p className="Gilroy-Regular text-[#0d0d0d]">
                  Yes, we offer reliable and secure website hosting packages
                  tailored to your needs. Hosting plans include regular backups,
                  security updates, and support. If you already have a hosting
                  provider, we can work with that as well.{" "}
                </p>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
