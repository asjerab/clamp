export default function Accordion() {
  return (
    <main className="flex justify-center py-[200px] px-[25px]">
      <div className="w-full max-w-[1150px]">
        <nav>
          <h1
            className="Gilroy-Bold text-slate-50 leading-[30px]"
            style={{ fontSize: "clamp(35px, 5vw, 45px)" }}
          >
            FAQ{" "}
          </h1>
          <p
            className="Gilroy-Regular text-[15px] text-[#999999] w-full"
            style={{
              fontSize: "clamp(15px, 2.5vw, 25px)",
              lineHeight: "clamp(12px, 3vw, 30px)",
            }}
          >
            Common questions
          </p>
        </nav>
        <div className="flex flex-col my-10">
          <div
            className="faq-div flex justify-between items-start gap-4 border-b-[1px] border-[#999999] border-t-[1px] border-opacity-50"
            style={{
              paddingTop: "clamp(25px, 5vw, 50px)",
              paddingBottom: "clamp(25px, 5vw, 50px)",
            }}
          >
            <h1
              className="Gilroy-Bold text-slate-50 text-balance"
              style={{ fontSize: "clamp(15px, 5vw, 32px)" }}
            >
              What is Clamp?
            </h1>
            <p
              className="Gilroy-Regular text-[20px] text-[#999999] w-full max-w-[500px] text-right"
              style={{
                lineHeight: "clamp(12px, 3vw, 30px)",
                fontSize: "clamp(10px, 3.5vw, 20px)",
              }}
            >
              Clamp is a website building company where you can request a
              website that you want to build, and we build it for you.
            </p>
          </div>
          <div
            className="faq-div flex justify-between items-start gap-4 border-b-[1px] border-[#999999] border-opacity-50"
            style={{
              paddingTop: "clamp(25px, 5vw, 50px)",
              paddingBottom: "clamp(25px, 5vw, 50px)",
            }}
          >
            <h1
              className="Gilroy-Bold text-slate-50 text-balance"
              style={{ fontSize: "clamp(15px, 5vw, 32px)" }}
            >
              Website build time
            </h1>
            <p
              className="Gilroy-Regular text-[20px] text-[#999999] w-full max-w-[500px] text-right"
              style={{
                lineHeight: "clamp(12px, 3vw, 30px)",
                fontSize: "clamp(10px, 3.5vw, 20px)",
              }}
            >
              Yes, we offer reliable and secure website hosting packages
              tailored to your needs. Hosting plans include regular backups,
              security updates, and support. If you already have a hosting
              provider, we can work with that as well.
            </p>
          </div>
          <div
            className="faq-div flex justify-between items-start gap-4 border-b-[1px] border-[#999999] border-opacity-50"
            style={{
              paddingTop: "clamp(25px, 5vw, 50px)",
              paddingBottom: "clamp(25px, 5vw, 50px)",
            }}
          >
            <h1
              className="Gilroy-Bold text-slate-50 text-balance"
              style={{ fontSize: "clamp(15px, 5vw, 32px)" }}
            >
              Do you offer website hosting?
            </h1>
            <p
              className="Gilroy-Regular text-[20px] text-[#999999] w-full max-w-[500px] text-right"
              style={{
                lineHeight: "clamp(12px, 3vw, 30px)",
                fontSize: "clamp(10px, 3.5vw, 20px)",
              }}
            >
              Yes, we offer reliable and secure website hosting packages
              tailored to your needs. Hosting plans include regular backups,
              security updates, and support. If you already have a hosting
              provider, we can work with that as well.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
