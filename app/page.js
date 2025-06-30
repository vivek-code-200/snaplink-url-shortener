import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-white mt-15">
      <div className="md:w-[75vw]  mx-auto flex flex-col gap-4 justify-center items-center  border-gray-800 rounded-lg p-4">

        <p className="md:text-4xl text-3xl text-center ">Create Your Customized Short URL</p>
        <p className="text-gray-500 md:text-[16px] text-[15px] text-center">We are the most straightforward URL shortener in the world. Most of the URL shorteners will track you or ask you to give your details for login . We understand your needs and hence we have created this URL shortener.</p>
        <p className="text-gray-400 text-xl">Customize your links now 👇</p>
        <Link href='/shorten'><button className="flex items-center gap-2 border-2 text-gray-400 border-gray-700 bg-[rgba(255,255,255,0)] p-1 px-4 w-fit rounded-full cursor-pointer hover:bg-[rgba(255,255,255,0.04)] hover:text-white">Customize Your Links <Image alt="link symbol" className='mix-blend-lighten invert-100' width={18} height={0} src="/link.png"/></button></Link>
      </div>

      <div className="trusted flex flex-col items-center justify-center mt-15 gap-5">
        <h1 className="lg:text-3xl text-2xl px-5 lg:px-0 text-center lg:w-[30vw] ">Trusted By Industry Leaders Worldwide</h1>
        <p className="text-gray-500 lg:w-[40vw] px-5 lg:px-0 text-center">From global enterprises to growing startups, businesses across industries rely on SnapLink for smarter, faster, and secure link sharing.</p>
        <div className="flex md:gap-10 gap-6 flex-wrap md:flex-nowrap justify-center">
          <Image className="mix-blend-color-dodge" alt="rotring brand" width={50} height={50} src="/rotring.png" />
          <Image className="mix-blend-lighten" alt="AT&T brand" width={50} height={50} src="/at.png" />
          <Image className="mix-blend-lighten" alt="airbnb brand" width={50} height={50} src="/airbnb.png" />
          <Image className="mix-blend-lighten" alt="pbs brand" width={50} height={50} src="/pbs.png" />
          <Image className="mix-blend-lighten" alt="xerox brand" width={50} height={50} src="/xerox.png" />
          <Image className="mix-blend-lighten" alt="google brand" width={50} height={1} src="/google.png" />
          <Image className="mix-blend-lighten" alt="facebook brand" width={50} height={0} src="/facebook.png" />
          <Image className="mix-blend-lighten" alt="yonex brand" width={50} height={50} src="/yonex.png" />

        </div>
      </div>

      <div className="survey mt-20">
        <h1 className="text-2xl font-bold md:mx-28 mx-5 border-b-[1px] border-gray-500 text-center">Primary Research</h1>
        <p className="text-gray-500 md:mx-28 mx-5 mt-8  text-center ">To gain valuable insights into user needs and preferences, we conducted a comprehensive survey. This survey alllowed us to collect feedback from a diverse group of respondents about their challenges with link management and expectations from a URL shortener. The data gathered helped shape SnapLink's features, ensuring the platform addresses real world problems while offering a seamless user experience.</p>

        <div className="ques md:p-10 p-7 m-10 md:w-[55vw] md:mx-auto mx-3  border-2 rounded-lg border-gray-500">
          <div>
            <h2 className="text-white">Q1: What challenges do you face with managing URLs for your campaigns or projects?</h2>
            <p className="text-gray-500 text-[15px] py-3 border-b-2">ANS: One of my biggest challenges is keeping URLs consise and manageable for social media and email campaigns. Long URLs look unprofessional and can reduce engagement. Tracking the performance of each link is also a priority, but it can be cumbersome with existing tools.</p>
          </div>
          <div className="mt-5">
            <h2 className="text-white">Q2: How important is it for you to customize URLs (e.g., adding slugs or branded links)?</h2>
            <p className="text-gray-500 text-[15px] py-3 border-b-2">ANS: Customization is very important. Branded links increase trust with users and improve click-through rates. Being able to add a unique slug or include the company name in the URL helps reinforce our brand identity.</p>
          </div>
          <div className="mt-5">
            <h2 className="text-white">Q3: How do you currently track the performace of your shared links?</h2>
            <p className="text-gray-500 text-[15px] py-3 border-b-2">ANS: I primarily used Google Analytics, but it's difficult to tie specific links to compaign without proper tagging or dedicated tools. Having a built-in analytics feature in the URL shortener would simplify the process and save time.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
