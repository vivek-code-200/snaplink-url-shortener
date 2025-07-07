"use client"
import { useState } from 'react'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'

const Page = () => {

    const [contactform, setcontactform] = useState({ name:"",email:"",subject:"", message: "" })

    useEffect(() => {
      document.title="Contact us : SnapLink"
    }, [])
    
    const handleChange = (e) => {
        setcontactform({ ...contactform, [e.target.name]: e.target.value })
    }

     const send = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "name": contactform.name,
            "email": contactform.email,
            "subject":contactform.subject,
            "message":contactform.message
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        }

        fetch("/api/send", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                toast(result.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
            .catch((error) => console.error(error))

        setcontactform({ name:"",email:"",subject:"", message: "" })
    }

    return (
        <div className='p-5 lg:px-16 pt-32'>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <h1 className='lg:text-4xl text-3xl text-white lg:px-32'>Contact</h1>
            <h2 className='text-gray-200 text-center lg:text-3xl text-2xl lg:mt-5 mt-10'>Get in Touch</h2>
            <p className='text-center text-gray-400 text-[15px] lg:text-base px-5'>Questions, Bug reports, Feedback, Feature requests - We are here for it all.</p>
            <p className='text-center text-gray-500 text-[15px] lg:text-base'>Feel free to get in touch !</p>

            <div className='container flex xl:flex-row flex-col gap-8 lg:justify-center text-gray-500 mx-auto md:px-20 my-10 p-4 lg:w-[70vw] min-h-[55vh] border-y-1 border-gray-500 rounded-2xl'>
                <div className='box1 xl:w-[25vw] lg:h-full p-4 border-0 border-gray-600 bg-[rgba(255,0,183,0.04)] rounded-2xl'>
                    <h3 className='text-gray-200 text-xl  '>Contact Information</h3>
                    <p className=' mt-2'>Use our contact form for all Information and Requests , And We&apos;ll get back to you as soon as possible. We look forward to connecting...</p>
                    <p className='my-2 text-center'>OR</p>
                    <p className='border-b-1 pb-3'>Contact us directly via contact Information below:</p>

                    <ul className='mt-5 flex flex-col gap-5'>
                        <li className=''><div className='flex gap-3'><Image alt='Phone symbol' width={25} height={40} src="/callgif.gif" /> <div className='text-gray-300'>Phone </div></div><span className='mx-8'>+91 7646062081</span></li>
                        <li className=''><div className='flex gap-3'><Image alt='Email symbol' width={25} height={40} src="/emailgif.gif" /> <div className='text-gray-300'>Email </div></div><span className='mx-9 max-[345px]:text-[15px]'>vivekkumarsoni7646@gmail.com</span></li>
                    </ul>
                </div>
                <div className='box2 xl:w-[40vw] p-5 flex flex-col justify-center gap-8 '>
                    <div className='flex lg:flex-row flex-col gap-10'>

                        <div className='flex lg:w-1/2 flex-col gap-1'>
                            <label className='text-gray-300' htmlFor="name">Your Name</label>
                            <input onChange={(e)=>handleChange(e)} type="text" name="name" value={contactform.name} id="" className=' outline-none border-b-2 p-1 ' placeholder='Enter your name' required />
                        </div>
                        <div className='flex lg:w-1/2 flex-col gap-1'>
                            <label className='text-gray-300' htmlFor="email">Your Email</label>
                            <input onChange={(e)=>handleChange(e)} type="text" name="email" value={contactform.email} id="" className='outline-none border-b-2 p-1 ' placeholder='Enter your email' required />
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='text-gray-300' htmlFor="subject">Your Subject</label>
                        <select onChange={(e)=>handleChange(e)} className='outline-none border-b-2 p-1 px-2 ' name="subject" value={contactform.subject} id="" required>
                            <option value="Question">Question</option>
                            <option value="Bug">Bug Report</option>
                            <option value="Feedback">Feedback</option>
                            <option value="Requests">Features Request</option>
                        </select>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label className='text-gray-300' htmlFor="message">Your Message</label>
                        <textarea onChange={(e)=>handleChange(e)} className='outline-none border-b-2 p-1' name="message" value={contactform.message} id="" placeholder='Write your message here' required></textarea>
                    </div>

                    <button onClick={()=>{send()}} className='bg-[rgb(110,29,96)] text-center text-white p-2 hover:bg-[rgba(153,66,138,0.63)] cursor-pointer disabled:bg-[rgba(137,36,92,0.85)] disabled:cursor-not-allowed' disabled={contactform.name<3|| contactform.email<10 || contactform.subject<3||contactform.message<5}>Send your request</button>
                </div>
            </div>
        </div>
    )
}

export default Page