import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-white pt-32">
      <div className="md:w-[75vw]  mx-auto flex flex-col gap-4 justify-center items-center  p-4">

        <p className="md:text-4xl text-3xl text-center ">Create Your Customized Short URL</p>
        <p className="text-gray-500 md:text-[16px] text-[15px] text-center">We are the most straightforward URL shortener in the world. Most of the URL shorteners will track you or ask you to give your details for login . We understand your needs and hence we have created this URL shortener.</p>
        <p className="text-gray-400 text-xl">Customize your links now 👇</p>
        <Link href='/shorten'><button className="flex items-center gap-2 border-2 text-gray-400 border-gray-700 bg-[rgba(255,255,255,0)] p-1 px-4 w-fit rounded-full cursor-pointer hover:bg-[rgba(255,255,255,0.04)] hover:text-white">Customize Your Links <Image alt="link symbol" className='mix-blend-lighten invert-100' width={18} height={0} src="/link.png" /></button></Link>
      </div>

      <div>
        <h1 className="md:text-4xl text-3xl mt-16 text-center mx-10 ">What is SnapLink?</h1>
        <p className="text-gray-500 mt-4 text-center">SnapLink is like a tool which sortifies your long links into your customized one.</p>
        <div className="w-[75vw] mx-auto mt-8 flex items-center justify-between gap-5 md:gap-0 md:flex-row flex-col">
          <div className="flex flex-col gap-2 w-[40vw] justify-center items-center">
            <h3 className="text-gray-300 font-bold">Long URL</h3>
            <p className="text-xs shadow-lg shadow-gray-400 md:w-[30vw] h-[14vh] w-[90vw] border-0 overflow-auto p-4 rounded-2xl text-gray-600">https://www.google.com/search?sca_esv=92a21b5f98878f45&rlz=1C1CHBF_enIN1133IN1133&sxsrf=AE3TifN6g_BzMx59WmbEem0wyN5oKIV8Vg:1750071872300&q=ui+for+url+shortener+website&udm=2&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIeoJTKjrFjVxydQWqI2NcOha3O1YqG67F0QIhAOFN_ob1yXos5K_Qo9Tq-0cVPzex8akBC0YDCZ6Kdb3tXvKc6RFFaJZ5G23Reu3aSyxvn2qD41n-47oj-b-f0NcRPP5lz0IcnVzj2DIj_DMpoDz5XbfZAMcEl5-58jjbkgCC_7e4L5AEDQ&sa=X&ved=2ahUKEwi2rJ7i5fWNAxVr4zgGHR7GMzoQtKgLegQIFhAB&biw=1536&bih=826&dpr=1.25</p>
          </div>
          <img src="/leftarrow.svg" className="w-10 md:rotate-180 rotate-270 invert-100 opacity-60 md:mt-5" alt="" />
          <div className="flex flex-col gap-2 w-[40vw] justify-center items-center">
            <h3 className="text-gray-300 font-bold text-center">Customized short URL</h3>
            <p className="text-base shadow-lg shadow-gray-400 md:w-[30vw] h-[14vh]  w-[80vw] border-0 overflow-auto p-4 rounded-2xl text-gray-600">https://snaplink-one.vercel.app/ <span className="text-gray-300">your_choice</span></p>
          </div>
        </div>

      </div>

      <div className="mt-20 w-full">
        <h1 className="text-center text-3xl border-b-2 border-gray-500 lg:w-[30vw] w-[90vw]  mx-auto ">How SnapLink Works?</h1>
        <div className="flex lg:flex-row flex-col gap-10 lg:mx-20 mx-5 mt-10">
          <div className="flex items-center justify-center lg:w-1/2 ">

            <img src="/neonbg.jpg" className="object-contain  rounded-2xl shadow-2xl shadow-gray-400 hover:shadow-white" alt="" />
          </div>

          <div className="flex gap-5 flex-col lg:w-1/2 lg:border-l-1 border-gray-500  md:px-20">

            <div className="flex flex-col items-start" >
              <h2 className="text-xl my-3">Step 1 :</h2>
              <div className="border-y-1 w-64 hover:shadow-lg shadow-gray-400 rounded-lg p-5 flex flex-col justify-center items-center">
                <img src="/step1.png" className="rounded-full" alt="" />
                <p className="mt-3 text-gray-400 text-center">Click on Customize your Links button</p>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <h2 className="text-xl my-3">Step 2 :</h2>
              <div className="border-y-1 w-64 hover:shadow-lg shadow-gray-400 rounded-lg p-5 flex flex-col justify-center items-center">
                <img src="/step2.png" className=" rounded-lg" alt="" />
                <p className="mt-3 text-gray-400 text-center">Input your long and short URL.</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl my-3">Step 3 :</h2>
              <div className="border-y-1 w-64 hover:shadow-lg shadow-gray-400 rounded-lg p-5 flex flex-col justify-center items-center">
                <img src="/step3.png" className=" rounded-lg" alt="" />
                <p className="mt-3 text-gray-400 text-center">Click on Generate button And Enjoy!!!</p>
              </div>
            </div>
          </div>
        </div>



      </div>
      <div className="trusted flex flex-col items-center justify-center mt-15 gap-5">
        <h1 className="lg:text-3xl text-2xl px-5 lg:px-0 text-center lg:w-[30vw] ">Trusted By Industry Leaders Worldwide</h1>
        <p className="text-gray-500 lg:w-[40vw] px-5 lg:px-0 text-center">From global enterprises to growing startups, businesses across industries rely on SnapLink for smarter, faster, and secure link customization.</p>
        {/* <div className="flex md:gap-10 gap-6 flex-wrap md:flex-nowrap justify-center">
          <Image className="mix-blend-color-dodge" alt="rotring brand" width={50} height={50} src="/rotring.png" />
          <Image className="mix-blend-lighten" alt="AT&T brand" width={50} height={50} src="/at.png" />
          <Image className="mix-blend-lighten" alt="airbnb brand" width={50} height={50} src="/airbnb.png" />
          <Image className="mix-blend-lighten" alt="pbs brand" width={50} height={50} src="/pbs.png" />
          <Image className="mix-blend-lighten" alt="xerox brand" width={50} height={50} src="/xerox.png" />
          <Image className="mix-blend-lighten" alt="google brand" width={50} height={1} src="/google.png" />
          <Image className="mix-blend-lighten" alt="facebook brand" width={50} height={0} src="/facebook.png" />
          <Image className="mix-blend-lighten" alt="yonex brand" width={50} height={50} src="/yonex.png" />

        </div> */}
      </div>

      <div className="survey mt-20">
        <h1 className="text-2xl font-bold md:mx-28 mx-5 border-b-[1px] border-gray-500 text-center">Primary Research</h1>
        <p className="text-gray-500 md:mx-28 mx-5 mt-8  text-center ">To gain valuable insights into user needs and preferences, we conducted a comprehensive survey. This survey alllowed us to collect feedback from a diverse group of respondents about their challenges with link management and expectations from a URL shortener. The data gathered helped shape SnapLink&apos;s features, ensuring the platform addresses real world problems while offering a seamless user experience.</p>

        <div className="ques md:p-10 p-7 m-10 md:w-[55vw] md:mx-auto mx-3  border-2 rounded-lg border-gray-500">
          <div>
            <h2 className="text-white">Q1: What challenges do you face with managing URLs for your campaigns or projects?</h2>
            <p className="text-gray-500 text-[15px] py-3 border-b-2">ANS: One of my biggest challenges is keeping URLs consise and manageable for social media and email campaigns. Long URLs look unprofessional and can reduce engagement. Tracking the performance of each link is also a priority, but it can be cumbersome with existing tools.</p>
          </div>
          <div className="mt-5">
            <h2 className="text-white">Q2: How important is it for you to customize URLs (e.g., adding slugs or branded links)?</h2>
            <p className="text-gray-500 text-[15px] py-3 ">ANS: Customization is very important. Branded links increase trust with users and improve click-through rates. Being able to add a unique slug or include the company name in the URL helps reinforce our brand identity.</p>
          </div>
          {/* <div className="mt-5">
            <h2 className="text-white">Q3: How do you currently track the performace of your shared links?</h2>
            <p className="text-gray-500 text-[15px] py-3 border-b-2">ANS: I primarily used Google Analytics, but it&apos;s difficult to tie specific links to compaign without proper tagging or dedicated tools. Having a built-in analytics feature in the URL shortener would simplify the process and save time.</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
