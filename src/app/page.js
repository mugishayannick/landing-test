'use client';
import Image from "next/image";
import { Lemon } from "next/font/google";
import { GoogleChromeIcon, WizardLogo, ArrowRight, WizardImage, RoundedArrow, InstagramLogo, BlackLogo, tikTokLogo, Stars, Hamburger, Close } from "@utils/images";
import Faq from "src/components/Faq";
import { DesktopHeaderLists, MobileHeaderLists, GridData } from "@utils/data";
import { useState } from "react";
import useScreenSizes from "@utils/hooks/useScreenSize";
import { usePathname } from "next/navigation";

const lemon = Lemon({ subsets: ["latin"], weight: '400' });

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const { isMobile } = useScreenSizes();
  const path = usePathname();
  return (
    <main className=" py-5 md:py-12">
      <nav className="flex relative items-center px-3 md:px-10 lg:px-32 justify-between">
        <div className="flex items-center gap-2">
          <Image src={WizardLogo} alt="Logo" />
          <h3>Wizardshot</h3>
        </div>
        <ul className="hidden xl:inline-flex gap-7">
          {DesktopHeaderLists.map((list) => (
            <li className={`${path === list.url && 'underline font-bold'}`} key={list.id}>{list.title}</li>
          ))}
        </ul>
        <div className="hidden md:flex gap-2">
          <button>Login</button>
          <div className="relative">
            <span className={`absolute -top-7 left-1/2 transform -translate-x-1/2 text-sm ${lemon.className} whitespace-nowrap`}>100% free, forever 🤑</span>
            <button className="flex items-center gap-2 bg-black text-white rounded-lg px-5 py-2">
              <Image src={GoogleChromeIcon} alt="Google Icon" />
              <span>Install Wizardshot</span>
            </button>
          </div>
        </div>
        <div className="block md:hidden">
          {isOpen ? (
            <button onClick={() => setIsOpen(false)}>
              <Image src={Close} alt="Close Icon" />
            </button>
          ) : <button onClick={() => setIsOpen(true)}>
            <Image src={Hamburger} alt="Hamburger Icon" />
          </button>}
        </div>
        {isOpen && isMobile &&
          <div className="absolute top-12 py-3 h-96 inset-x-0 w-full bg-white z-50 border-t border-[#E6E6E6]">
            <ul className="pb-4 px-12 border-b border-[#E6E6E6]">
              {MobileHeaderLists.map((list) => (
                <li className={`${path === list.url && 'underline font-bold'} pb-5`} key={list.id}>{list.title}</li>
              ))}
            </ul>
            <div className="flex flex-col items-center justify-center py-4">
              <button className="flex items-center gap-2 bg-black text-white rounded-lg px-5 py-2">
                <Image src={GoogleChromeIcon} alt="Google Icon" />
                <span>Install Wizardshot</span>
              </button>
              <span className="">100% free, forever 🤑</span>
            </div>
          </div>
        }
      </nav>
      <div className="max-w-6xl px-2 sm:px-7 mx-5 md:mx-auto flex flex-col items-center mt-10 md:mt-20">
        <h1 className="text-2xl md:text-7xl text-center pb-2">Your Magic Wand for Instant Documentation</h1>
        <h4 className="pb-10 text-xl text-center">Turn ANY process into a simple step-by step Guide</h4>
        <button className="flex gap-2 items-center justify-center bg-black text-white rounded-lg px-5 py-2">
          <span>Install Wizardshot</span>
          <Image src={ArrowRight} alt="Arrow Right" />
        </button>
        <div className="relative p-1.5 rounded-lg mt-20 h-full bg-gradient-to-b from-[#AB96F8] to-[#FF99D0]">
          <div className="flex">
            <Image src={RoundedArrow} alt="rounded arrow" className="absolute -left-5 -top-7" />
            <span className="absolute -top-10 left-4 text-lg font-bold tracking-widest max-w-xs leading-none">It only takes 3 clicks to publish your first tutorial</span>
          </div>
          <Image src={WizardImage} alt="Wizard Image" className="object-cover rounded-lg" />
        </div>
      </div>
      <div className="max-w-6xl px-2 sm:px-7 mt-36 mx-5 md:mx-auto">
        <h1 className="text-center text-4xl tracking-wide pb-12">Say <span className="underline">Goodbye To Writing Docs</span>, and Hello To Wizardshot Doing it for YOU.</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-24">
          {GridData.map((details, index) => (
            <div key={index} className="w-80 h-60 p-2 relative">
              <div className="h-full">
                <div className={`bgGradient absolute inset-0 z-0 w-full ${index === 1 ? 'md:h-[180px]' : index === 2 ? 'md:h-[210px]' : 'h-[220px]'} blur-xl rounded-[40%]`}></div>
                <Image src={details.image} alt="Grid" className="z-10 relative" />
              </div>
              <div className="flex flex-col mt-10">
                <h1 className="text-lg font-semibold">{details.title}</h1>
                <span className="text-sm font-normal">{details.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-3xl px-2 sm:px-7 mx-5 md:mx-auto mt-52">
        <div className="flex flex-col items-center justify-center mb-24 whitespace-nowrap">
          <h1 className="text-2xl tracking-widest text-center underline">+32 MORE FEATURES</h1>
          <span className="block text-xl -tracking-wide font-medium">INCLUDING A KB INTEGRATION</span>
        </div>
        <div className="bgGradient relative h-[24px] z-0 mb-32">
          <div className="flex absolute bottom-0 inset-x-0 w-full justify-between">
            <div className="flex z-10">
              <h1 className="text-xs sm:text-2xl underline">Free</h1>
              <div className="flex h-8 text-xs md:text-sm flex-col justify-center">
                <span>Free</span>
                <span>Forever</span>
              </div>
            </div>
            <div className="flex z-10">
              <h1 className="text-xs sm:text-2xl underline">Unlimited</h1>
              <div className="flex h-8 text-xs md:text-sm flex-col justify-center">
                <span>Tutorial</span>
                <span>Creation</span>
              </div>
            </div>
            <div className="flex z-10">
              <h1 className="text-xs sm:text-2xl underline">Powerful</h1>
              <div className="flex h-8 text-xs md:text-sm flex-col justify-center">
                <span>Editor &</span>
                <span>Integrations</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-12 px-5 md:px-24 gap-y-8 border-black border-4 rounded-lg">
          <h1 className="text-lg md:text-4xl font-bold text-center">Create A Detailed Tutorial in Less than 3 clicks</h1>
          <div className="relative">
            <button className="flex relative z-10 items-center gap-2 bg-black text-white rounded-lg py-4 px-9">
              <Image src={GoogleChromeIcon} alt="Google Icon" />
              <span className="text-xs sm:text-sm md:text-xl">Install Wizardshot</span>
            </button>
            <div className={`bgGradient absolute right-0 top-0 z-0 w-60 md:w-72 h-16 blur-xl rounded-[40%]`}></div>
          </div>
          <div>
            <h1 className="text-xs md:text-2xl text-center">“Has helped us write help docs 100x faster” <span className="block">– Dany River, Cartier Informatie</span></h1>
          </div>
          <div className="flex gap-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <Image key={index} src={Stars} alt="Stars Logo" />
            ))}
          </div>
        </div>
      </div>
      <Faq />
      <div className="max-w-6xl mx-auto mt-32">
        <div className="border-black px-6 mx-2 md:mx-8 border-b-2">
          <span className={`text-sm text-right block ${lemon.className} whitespace-nowrap`}>100% free, forever 🤑</span>
          <div className="lg:flex justify-between p-3 md:p-10 w-full bg-black">
            <div className="">
              <h1 className="text-white text-base lg:text-3xl pb-2">Create Tutorials in 3 Clicks.</h1>
              <p className="text-white/50 text-xs max-w-lg lg:text-sm">With WizardShot, You Click Capture, And We’ll Capture What’s Happening on Your Screen And Turn It Into A Tutorial.</p>
            </div>
            <button className="flex gap-2 items-center text-white pt-4 lg:pt-0">
              <span className="text-base font-normal underline">Try Wizardshot</span>
              <Image src={ArrowRight} alt="Arrow Right" />
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-5 px-2 sm:px-7 md:mx-auto flex flex-wrap space-y-12 lg:justify-between mt-20">
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-center">
            <Image src={WizardLogo} alt="Logo" className="w-10 h-10" />
            <h3 className="text-2xl">Wizardshot</h3>
          </div>
          <span className="text-lg max-w-xs font-semibold tracking-wide">Turn complex process into a simple step-by step Guide</span>
          <div className="grid grid-cols-2 w-9/12">
            <div className="border-2 border-black flex flex-col items-center justify-center">
              <span className="text-4xl tracking-tight font-black">12</span>
              <span className="block uppercase text-base font-bold">Years</span>
            </div>
            <div className="border-2 border-black flex flex-col py-3 gap-0.5 items-center justify-center">
              <span className="text-sm uppercase font-bold">Built By</span>
              <Image src={BlackLogo} alt="Logo" className="block text-black" />
              <span className="block text-sm font-bold">HELPJUICE</span>
            </div>
            <div className="col-span-2 border-2 border-black flex items-center justify-center px-5 py-2.5">
              <span className="text-xs whitespace-nowrap font-medium">#1 Rated Knowledge Base Software</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="pb-2 font-semibold">Learn More</h3>
          <ol>
            <li className="pb-1.5">Wizardshot</li>
            <li className="pb-1.5">Community Page</li>
            <li className="pb-1.5">Help Center</li>
            <li className="pb-1.5">Security Information</li>
          </ol>
        </div>
        <div>
          <h3 className="pb-2 font-semibold">Company</h3>
          <ol>
            <li className="pb-1.5">About Us</li>
            <li className="pb-1.5">Status Page</li>
          </ol>
        </div>
        <div className="flex flex-col">
          <span className="text-right">📞 +1 (833) 387 3877</span>
          <span className="pb-5">✉️ success@wizardshot.com</span>
          <div className="flex gap-6 mb-7 ml-auto">
            <Image src={tikTokLogo} alt="TikTok Logo" />
            <Image src={InstagramLogo} alt="Instagram Logo" />
          </div>
          <div className="space-x-4">
            <button className="text-xl font-bold">Sign Up</button>
            <button className="text-xl font-bold">Log In</button>
          </div>
        </div>
      </div>
      <footer className="text-center text-base font-normal mt-20">
        <span>© 2024 Wizardshot – All rights reserved.</span>
      </footer>
    </main>
  );
}
