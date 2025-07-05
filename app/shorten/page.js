"use client"
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'

export default function Page() {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setgenerated] = useState("")

    useEffect(() => {
        document.title = "Generate Links : SnapLink"
    }, [])

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        }

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                // alert(result.message)
                seturl("")
                setshorturl("")
                setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                toast.success(result.message, {
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

    }

    return (
        <div className='text-white flex lg:my-20 my-10 flex-col items-center justify-center'>
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
            <h1 className='font-bold text-center md:text-2xl text-xl '>Generate Your Own Custom URLs</h1>
            <p className='text-gray-500'>Your Links Your Control!!!</p>
            <div className='mt-8 max-[500px]:w-[90vw] p-10 px-14 flex flex-col gap-6 rounded-lg border-[0px] bg-[rgba(255,0,183,0.04)]'>
                <div className='flex flex-col'>
                    <label className='text-gray-400 my-2' htmlFor="url">Original URL</label>
                    <input onChange={(e) => { seturl(e.target.value) }} className='border-[1px] border-gray-500 text-[15px] p-2 px-5 rounded-lg' type="text" value={url} name="url" id="" placeholder='Enter Original URL' />
                </div>
                <div className='flex flex-col'>
                    <label className='text-gray-400 mb-2' htmlFor="url">Your URL</label>
                    <input onChange={(e) => { setshorturl(e.target.value) }} className='border-[1px] border-gray-500 p-2 text-[15px] px-5 rounded-lg' type="text" value={shorturl} name="url" id="" placeholder='Enter your URL' />
                </div>

                <button onClick={() => generate()} className='p-1 px-5 my-6 bg-[rgb(137,36,118)] hover:bg-[rgba(161,70,145,0.74)] cursor-pointer disabled:bg-[rgba(137,36,92,0.85)] disabled:cursor-not-allowed' disabled={url.length < 10 || shorturl.length < 3}>Generate</button>
            </div>

            {generated && <div className='mt-5 text-center'>
                <div className='text-gray-500 '>Your Link is Generated 👇 !!!</div>
                <Link className='text-gray-400 hover:text-gray-200' target='_blank' href={generated}>{generated}</Link>
            </div>}

            <Link href='/shorten/links'><button className="flex items-center gap-2 border-2 mt-5 text-gray-400 border-gray-700 bg-[rgba(255,255,255,0)] p-1 px-4 w-fit rounded-full cursor-pointer hover:bg-[rgba(255,255,255,0.04)] hover:text-white">Your recent Links <Image alt='link symbol' className='mix-blend-lighten invert-100' width={18} height={18} src="/link.png" /></button></Link>

        </div>
    )
}

// export default page

