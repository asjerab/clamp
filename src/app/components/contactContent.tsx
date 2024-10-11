        <div className="my-20 w-full max-w-[640px]">
          <form
            action=""
            className="flex flex-col items-start gap-8 w-full"
          >
            <div className="w-full">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name*"
                className="w-full bg-transparent border-b-2 border-slate-700 text-slate-50 text-lg py-2 px-1 outline-none transition-all duration-300 focus:border-[#3a86ff] placeholder-slate-500"
                style={{ lineHeight: "clamp(25px, 5vw, 50px)" }}
                required
              />
            </div>
            <div className="w-full">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address*"
                className="w-full bg-transparent border-b-2 border-slate-700 text-slate-50 text-lg py-2 px-1 outline-none transition-all duration-300 focus:border-[#3a86ff] placeholder-slate-500"
                style={{ lineHeight: "clamp(25px, 5vw, 50px)" }}
                required
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject*"
                className="w-full bg-transparent border-b-2 border-slate-700 text-slate-50 text-lg py-2 px-1 outline-none transition-all duration-300 focus:border-[#3a86ff] placeholder-slate-500"
                style={{ lineHeight: "clamp(25px, 5vw, 50px)" }}
                required
              />
            </div>
            <div className="w-full">
              <textarea
                name="message"
                id="message"
                placeholder="What can we help you with?*"
                rows={4}
                className="w-full bg-transparent border-b-2 border-slate-700 text-slate-50 text-lg py-2 px-1 outline-none transition-all duration-300 focus:border-[#3a86ff] placeholder-slate-500 resize-none"
                style={{ lineHeight: "clamp(25px, 5vw, 50px)" }}
                required
              ></textarea>
            </div>
            <button className="bg-[#3a86ff] w-full max-w-[350px] py-4 text-slate-50 rounded-[16px] text-lg font-semibold transition-all duration-300 hover:bg-[#2a76ef] hover:shadow-lg">
              Get in touch
            </button>
          </form>
        </div>