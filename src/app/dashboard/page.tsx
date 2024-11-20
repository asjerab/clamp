import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import Nav from "../components/nav";


export default async function dashboard() {
  return (
    <main>
      <div className="flex justify-center px-[25px]">
        <div className="w-full max-w-[1200px]">
          <nav className="py-[75px]">
            <h1
              className="Gilroy-Semibold leading-[100px]"
              style={{ fontSize: "clamp(35px, 15vw, 150px)" }}
            >
              Dashboard
            </h1>
            <p
              className="Gilroy-Regular text-[15px] text-[#999999] w-full max-w-[768px] pl-[10px]"
              style={{ fontSize: "clamp(12px, 3.5vw, 35px)" }}
            >
              Clamp, we scale with you - scaling made easy.
            </p>
          </nav>

          
        </div>
      </div>
    </main>
  );
}
