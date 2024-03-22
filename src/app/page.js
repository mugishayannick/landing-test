import Image from "next/image";
import { Lemon } from "next/font/google";
import { GoogleChromeIcon, WizardLogo, ArrowRight, WizardImage, Grid1, Grid3, Grid2, InstagramLogo, BlackLogo, tikTokLogo } from "@utils/images";
import Faq from "src/components/Faq";

const HeaderLists = [
  {
    id: 1,
    title: "Home"
  },
  {
    id: 2,
    title: "Features"
  },
  {
    id: 3,
    title: "About"
  },
  {
    id: 4,
    title: "Help Center & Community"
  }
]

const GridData = [
  {
    image: Grid1,
    title: '1. Click Capture',
    description: 'Once you install the Chrome extension, fire it up, and click “Capture”.'
  },
  {
    image: Grid2,
    title: '2. Perform Your Actions',
    description: 'Once capturing, Wizardshot carefully monitors what you do to understand how to document it.'
  },
  {
    image: Grid3,
    title: '1. ✅ Done.Article Written',
    description: 'Wizardshot carefully crafts the perfect article based off your actions recorded. Just click “Done” and we’ll write up the article in a second.'
  }
]

const lemon = Lemon({ subsets: ["latin"], weight: '400' });

export default function Home() {
  return (
    <main className="flex flex-col px-32 py-12">
      <nav className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={WizardLogo} alt="Logo" />
          <h3>Wizardshot</h3>
        </div>
        <ul className="flex gap-7">
          {HeaderLists.map((list) => (
            <li key={list.id}>{list.title}</li>
          ))}
        </ul>
        <div className="flex gap-2">
          <button>Login</button>
          <div className="relative">
            <span className={`absolute -top-7 left-1/2 transform -translate-x-1/2 text-sm ${lemon.className} whitespace-nowrap`}>100% free, forever 🤑</span>
            <button className="flex items-center gap-2 bg-black text-white rounded-lg px-5 py-2">
              <Image src={GoogleChromeIcon} alt="Google Icon" />
              <span>Install Wizardshot</span>
            </button>
          </div>
        </div>
      </nav>
      <div className="max-w-7xl m-auto w-full mt-28">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h1 className="text-center pb-2">Your Magic Wand for Instant Documentation</h1>
          <h4 className="pb-10">Turn ANY process into a simple step-by step Guide</h4>
          <button className="flex gap-2 items-center bg-black text-white rounded-lg px-5 py-2">
            <span>Install Wizardshot</span>
            <Image src={ArrowRight} alt="Arrow Right" />
          </button>
          <div className="w-[1019px] p-1.5 rounded-lg mt-10 h-[600px] bg-gradient-to-b from-[#AB96F8] to-[#FF99D0]">
            <Image src={WizardImage} alt="Wizard Image" className="object-cover w-full h-full rounded-lg" />
          </div>
        </div>
        <div className="max-w-3xl mt-36 mx-auto flex flex-col items-center">
          <h1 className="text-center text-4xl tracking-wide pb-12">Say <span className="underline">Goodbye To Writing Docs</span>, and Hello To Wizardshot Doing it for YOU.</h1>
          <div className="flex items-center gap-24">
            {GridData.map((details, index) => (
              <div key={index} className="w-72 h-60 p-2 relative">
                <div className="h-full">
                  <div className={`bgGradient absolute inset-0 z-0 w-50 ${index === 1 ? 'h-[180px]' : index === 2 ? 'h-[210px]' : 'h-[220px]'} blur-xl rounded-[40%]`}></div>
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
        <div className="max-w-3xl mx-auto mt-52">
          <div className="flex flex-col items-center justify-center mb-24">
            <h1 className="text-2xl tracking-widest text-center underline">+32 MORE FEATURES</h1>
            <span className="block text-xl -tracking-wide font-medium">INCLUDING A KB INTEGRATION</span>
          </div>
          <div className="relative bgGradient mx-auto w-[84%] h-[24px] z-0 mb-32">
            <div className="flex absolute -top-2 gap-7">
              <div className="flex gap-2 z-10">
                <h1 className="text-4xl underline">Free</h1>
                <div className="flex h-8 text-sm flex-col justify-center">
                  <span>Free</span>
                  <span>Forever</span>
                </div>
              </div>
              <div className="flex gap-2 z-10">
                <h1 className="text-4xl underline">Unlimited</h1>
                <div className="flex h-8 text-sm flex-col justify-center">
                  <span>Tutorial</span>
                  <span>Creation</span>
                </div>
              </div>
              <div className="flex gap-2 z-10">
                <h1 className="text-4xl underline">Powerful</h1>
                <div className="flex h-8 text-sm flex-col justify-center">
                  <span>Editor &</span>
                  <span>Integrations</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center py-12 px-24 gap-y-8 border-black border-4 rounded-lg">
            <h1 className="text-4xl font-bold text-center">Create A Detailed Tutorial in Less than 3 clicks</h1>
            <div className="relative">
              <button className="flex relative z-10 items-center gap-2 bg-black text-white rounded-lg py-4 px-9">
                <Image src={GoogleChromeIcon} alt="Google Icon" />
                <span>Install Wizardshot</span>
              </button>
              <div className={`bgGradient absolute right-0 top-0 z-0 w-72 h-16 blur-xl rounded-[40%]`}></div>
            </div>
            <div>
              <h1 className="text-2xl text-center">“Has helped us write help docs 100x faster” <span className="block">– Dany River, Cartier Informatie</span></h1>
            </div>
          </div>
        </div>
        <Faq />
        <div className="mt-32 border-black px-6 mx-9 border-b-2">
          <div className="flex p-12 items-center justify-between w-full h-32 bg-black">
            <div className="max-w-lg">
              <h1 className="text-white text-3xl pb-2">Create Tutorials in 3 Clicks.</h1>
              <span className="text-white/50 text-sm">With WizardShot, You Click Capture, And We’ll Capture What’s Happening on Your Screen And Turn It Into A Tutorial.</span>
            </div>
            <button className="flex gap-2 items-center text-white">
              <span className="text-base font-normal underline">Try Wizardshot</span>
              <Image src={ArrowRight} alt="Arrow Right" />
            </button>
          </div>
        </div>
        <div className="flex mx-16 justify-between mt-20">
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center">
              <Image src={WizardLogo} alt="Logo" className="w-10 h-10" />
              <h3 className="text-2xl">Wizardshot</h3>
            </div>
            <span className="text-lg max-w-xs font-semibold tracking-wide">Turn complex process into a simple step-by step Guide</span>
            <div className="grid grid-cols-2 w-8/12">
              <div className="border-2 border-black flex flex-col items-center justify-center">
                <span className="text-4xl tracking-tight font-black">12</span>
                <span className="block uppercase text-base font-bold">Years</span>
              </div>
              <div className="border-2 border-black flex flex-col py-3 gap-0.5 items-center justify-center">
                <span className="text-sm uppercase font-bold">Built By</span>
                <Image src={BlackLogo} alt="Logo" className="block text-black" />
                <span className="block text-sm font-bold">HELPJUICE</span>
              </div>
              <div className="col-span-2 border-2 border-black flex items-center justify-center py-2.5">
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
      </div>
      <footer className="text-center text-base font-normal mt-20">
        <span>© 2024 Wizardshot – All rights reserved.</span>
      </footer>
    </main>
  );
}
