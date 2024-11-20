export default function ContactPageHero() {
  return (
    <main className="p-7">
      <nav className="w-full max-w-[1200px] py-[50px]">
        <h1
          className="Gilroy-Bold text-left leading-[85px]"
          style={{
            fontSize: "clamp(25px, 4vw + 1rem, 85px)",
            lineHeight: "clamp(20px, 10vw, 75px)",
          }}
        >
          Get in Touch and
          <br />
          Let’s Build Your Future
        </h1>

        <div className="isolate bg-white py-24">
        <div className="max-w-2xl">
          <h2 className="text-balance text-4xl Gilroy-Semibold tracking-tight text-gray-900 sm:text-5xl">
            Contact sales
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Aute magna irure deserunt veniam aliqua magna enim voluptate.
          </p>
        </div>

        <form
          action="#"
          method="POST"
          className="mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm Gilroy-Semibold text-gray-900"
              >
                Full Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3a86ff] sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="last-name"
                className="block text-sm Gilroy-Semibold text-gray-900"
              >
                Last Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3a86ff] sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="Selskap/Bedriftny"
                className="block text-sm Gilroy-Semibold text-gray-900"
              >
                Organization/Company
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="Selskap/Bedriftny"
                  id="Selskap/Bedriftny"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3a86ff] sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm Gilroy-Semibold text-gray-900"
              >
                Mail
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3a86ff] sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm Gilroy-Semibold text-gray-900"
              >
                Phonenumber
              </label>
              <div className="relative mt-2.5">
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3a86ff] sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm Gilroy-Semibold text-gray-900"
              >
                Tell us what you need help with.
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows= {4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3a86ff] sm:text-sm"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-full bg-[#3a86ff] px-3.5 py-2.5 text-center text-sm Gilroy-Semibold text-white shadow-sm hover:bg-[#508ff6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>
      </nav>

      {/* Contact Form Section */}
      
    </main>
  );
}
