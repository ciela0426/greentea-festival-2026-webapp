import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Show the button when the user scrolls down
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isBrowser = () => typeof window !== "undefined";

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <header className="fixed z-50 w-full border-b border-amber-100">
        <div className="flex justify-between items-center px-4 border-b border-amber-100">
          <p className="cursor-pointer text-2xl font-medium py-2 text-amber-300">
            2026
            <span className="text-amber-100 ml-2">하동 녹차 축제</span>
          </p>
          <ul className="flex">
            <li className="cursor-pointer py-2 mr-4 hover:font-medium">
              <Link href={"/"}>축제 안내</Link>
            </li>
            <li className="cursor-pointer py-2 hover:font-medium">
              <Link href={"/"}>게시판</Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-between">
          <p className="flex-1 py-2 w-full text-center font-medium border-r border-amber-100">
            일시
            <span className="ml-4 font-light">
              05.22&#40;금&#41;-25&#40;월&#41; 4일간
            </span>
          </p>
          <p className="flex-1 py-2 w-full text-center font-medium border-r border-amber-100">
            시간<span className="ml-4 font-light">10:00 - 18:00</span>
          </p>
          <p className="flex-1 py-2 w-full text-center font-medium">
            장소
            <span className="ml-4 font-light">
              야생차 치유관, 야생차 박물관 일원
            </span>
          </p>
        </div>
      </header>
      <div className="relative w-full">
        <section className="z-10 relative w-full overflow-hidden">
          <Image
            src="/main-section1.jpg"
            alt="section1 녹차밭"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-screen overflow-hidden object-cover"
          />
          <div className="z-20 absolute top-0 w-full h-screen bg-slate-950/[.4]"></div>

          <div className="z-20 absolute flex flex-col justify-center items-center top-0 w-full h-screen">
            <p className="text-8xl mb-8 font-medium text-center text-amber-300">
              2026
              <br />
              <span className="text-amber-100">하동 녹차 축제</span>
            </p>
            <p className="text-2xl font-light text-center mb-8">
              2026년 5월 22-25일, 4일간 진행되는 하동 녹차 축제에 초대합니다.
              <br />
              국내 제일의 녹차 산지, 하동에 방문해보세요.
            </p>
            <div className="py-4 border-b border-t border-amber-100">
              <p className="text-center font-large">
                일시
                <span className="ml-4 font-light">
                  05.22&#40;금&#41;-25&#40;월&#41; 4일간
                </span>
              </p>
              <p className="text-center font-large">
                시간<span className="ml-4 font-light">10:00 - 18:00</span>
              </p>
              <p className="text-center font-large">
                장소
                <span className="ml-4 font-light">
                  야생차 치유관, 야생차 박물관 일원
                </span>
              </p>
            </div>
          </div>
        </section>
        <section></section>
        <section></section>
        <footer className="w-full flex justify-between px-4 py-2 border-t border-amber-100">
          <p>
            <Link href={"/"}>하동 녹차 축제</Link>
          </p>
          <p>1588-0000</p>
        </footer>
      </div>
      <button className="fixed z-50 bottom-0 right-0" onClick={scrollToTop}>
        SCROLL TO TOP
      </button>
    </>
  );
}
