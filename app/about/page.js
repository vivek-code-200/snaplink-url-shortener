import React from 'react'
import Image from 'next/image'

const page = () => {
    return (
        <div className='p-5 lg:px-16'>
            <h1 className='text-4xl text-white xl:px-32'>About</h1>
            <p className='text-gray-400 lg:w-[70vw] mt-5 xl:px-32'>SnapLink simplifies link management with short URLs. It does not need your credentials to shorten URLs which ensures a platform to make hassle-free platform. </p>

            <div className='box flex xl:flex-row flex-col items-center xl:gap-36 gap-10 my-10 md:mx-44 lg:mx-auto xl:mx-44'>
                <div className='lg:w-1/2 lg:m-5 p-5 border-2 border-gray-500 rounded-2xl'>
                    <Image alt='an image of converting link' className='mix-blend-lighten' src="/neonlink.jpg" width={400} height={500} />
                </div>
                <div className='lg:w-1/2 lg:m-5 p-5 border-2 border-gray-500 rounded-2xl'>
                    <h2 className='text-2xl text-white'>Overview</h2>
                    <p className='text-gray-400 mt-3 text-[15px]'>SnapLink is an innovative URL shortener designed to simplify link management while providing advanced customization and tracking features. Whether users need a quick one-time short link or advanced tools for branding. SnapLink offers a seamless experience.</p>
                    <p className='text-gray-400 mt-3 text-[15px]'>Users can shorten URLs instantly- no sign up required, provides a hassle free platform.</p>
                    <p className='text-gray-400 mt-3 text-[15px]'>Built for marketers, businesses, and everyday users, SnapLink enhances link performance, increases engagement, and making link sharing more efficient and impactful.</p>
                </div>
            </div>

            <div className='choose md:w-[75vw] mx-auto'>
                <h2 className='lg:text-3xl text-2xl text-center text-white border-b-2 border-gray-500 pb-2'>Why Choose SnapLink?</h2>
                <div className='lg:w-[75vw] mx-auto my-10 flex flex-wrap lg:flex-row lg:flex-nowrap gap-5 lg:gap-0 justify-around'>
                    <div className='xl:w-[16vw] md:w-[40vw]  p-4 m-3 border-x-2 rounded-2xl border-gray-500'>
                        <div className='p-2 border-y-[1px] rounded-2xl border-gray-500 flex justify-center'>
                            <Image alt='lock symbol' className='mix-blend-luminosity rounded-2xl' width={200} height={100} src="/lock.png" />
                        </div>
                        <h3 className='text-white mt-2 text-xl'>Custom Slugs</h3>
                        <p className='text-gray-400 mt-2'>Personalize links with custom slugs to enhance branding and recognition. Make every Link professional.</p>
                    </div>
                    <div className='xl:w-[16vw] md:w-[40vw] p-4 m-3 border-x-2 rounded-2xl border-gray-500'>
                        <div className='p-2 border-y-[1px] flex justify-center rounded-2xl border-gray-500 '>
                            <Image alt='links symbol' className='mix-blend-luminosity rounded-2xl' width={200} height={100} src="/links.png" />
                        </div>
                        <h3 className='text-white mt-2 text-xl'>Bulk Link Management</h3>
                        <p className='text-gray-400 mt-2'>Simplify your workflow with bulk shortening and management tools, perfect for handling large campaigns or multiple projects.</p>
                    </div>
                    <div className='xl:w-[16vw] md:w-[40vw] p-4 m-3 border-x-2 rounded-2xl border-gray-500'>
                        <div className='p-2 py-10 border-y-[1px] flex justify-center rounded-2xl border-gray-500 '>
                            <Image alt='Fast symbol' className='mix-blend-luminosity rounded-2xl' width={200} height={200} src="/fast.png" />
                        </div>
                        <h3 className='text-white mt-2 text-xl'>Quick And Fast</h3>
                        <p className='text-gray-400 mt-2'>Quickly shorten a URL without login, does not need to share your credentials.</p>
                    </div>
                </div>
            </div>

            <div className='Testimonials md:w-[75vw] mx-auto'>
                <h2 className='text-3xl text-center text-white border-b-2 pb-2 border-gray-500'>Testimonials</h2>
                <p className='text-xl mt-8 text-gray-400 text-center'>"Don't Take Our Word for it"</p>
                <p className='text-gray-500 text-center mt-1'>See what our users have to say about us</p>
                <div className='lg:w-[75vw] my-10 flex lg:gap-16 gap-5 flex-wrap justify-center mx-auto text-gray-500'>
                    <div className='xl:w-[20vw] lg:w-[50vw] w-full border-y-[1px] rounded-2xl p-2'>
                        <Image className='mix-blend-color-dodge' alt='rating symbol' width={110} height={100} src="/star.png"/>
                        <h3 className='text-gray-300 mt-2'>"I feel so much more secure sharing links"</h3>
                        <p className='my-2'>I can share things with confidence now, and the process is straightforward.</p>
                        <h4 className='text-gray-200 mt-4'>Rohan Chaturvedi</h4>
                        <p>Freelancer</p>
                    </div>
                    <div className='xl:w-[20vw] lg:w-[50vw] w-full border-y-[1px] rounded-2xl p-2'>
                        <Image className='mix-blend-color-dodge' alt='rating symbol' width={110} height={100} src="/star.png"/>
                        <h3 className='text-gray-300 mt-2'>"Effortless and Reliable"</h3>
                        <p className='my-2'>The site is lifesaver when we are in a rush, it does all our work quickly.</p>
                        <h4 className='text-gray-200 mt-4'>Sophia M.</h4>
                        <p>Marketing Manager</p>
                    </div>
                    <div className='xl:w-[20vw] lg:w-[50vw] w-full border-y-[1px] rounded-2xl p-2'>
                        <Image className='mix-blend-color-dodge' alt='rating symbol' width={110} height={100} src="/star.png"/>
                        <h3 className='text-gray-300 mt-2'>"A must-have for any marketer"</h3>
                        <p className='my-2'>SnapLink has made my job so much easier in creating a quick link to customize everything, it's seamless.</p>
                        <h4 className='text-gray-200 mt-4'>Emma J.</h4>
                        <p>Marketing Consultant</p>
                    </div>
                    <div className='xl:w-[20vw] lg:w-[50vw] w-full border-y-[1px] rounded-2xl p-2'>
                        <Image className='mix-blend-color-dodge' alt='rating symbol' width={110} height={100} src="/star.png"/>
                        <h3 className='text-gray-300 mt-2'>"Perfect for my blog"</h3>
                        <p className='my-2'>I run a small blog and use it to shorten links for my posts.</p>
                        <h4 className='text-gray-200 mt-4'>Priya S.</h4>
                        <p>Blogger</p>
                    </div>
                    <div className='xl:w-[20vw] lg:w-[50vw] w-full border-y-[1px] rounded-2xl p-2'>
                        <Image className='mix-blend-color-dodge' alt='rating symbol' width={110} height={100} src="/star.png"/>
                        <h3 className='text-gray-300 mt-2'>"Super easy, super helpful"</h3>
                        <p className='my-2'>I'm not super tech-savvy, but SnapLink is so easy to use.</p>
                        <h4 className='text-gray-200 mt-4'>Sarah T.</h4>
                        <p>Photographer</p>
                    </div>
                    <div className='xl:w-[20vw] lg:w-[50vw] w-full border-y-[1px] rounded-2xl p-2'>
                        <Image className='mix-blend-color-dodge' alt='rating symbol' width={110} height={100} src="/star.png"/>
                        <h3 className='text-gray-300 mt-2'>"Makes sharing links so easy"</h3>
                        <p className='my-2'>I don't have to overthink sharing links anymore.</p>
                        <h4 className='text-gray-200 mt-4'>Raj K.</h4>
                        <p>Business Owner</p>
                    </div>
                    <div className='xl:w-[20vw] lg:w-[50vw] w-full border-y-[1px] rounded-2xl p-2'>
                        <Image className='mix-blend-color-dodge' alt='rating symbol' width={110} height={100} src="/star.png"/>
                        <h3 className='text-gray-300 mt-2'>"Our team loves it"</h3>
                        <p className='my-2'>It's so easy to maintain tons of links at once.</p>
                        <h4 className='text-gray-200 mt-4'>Daniel L.</h4>
                        <p>Content Strategist</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page

export const metadata = {
  title: "About : SnapLink",
  description: "A page which descibes about SnapLink website. ",
};
