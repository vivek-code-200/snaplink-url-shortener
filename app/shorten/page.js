"use client"
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid';
import { useRef } from 'react'

export default function Page() {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setgenerated] = useState("")
    const [id, setid] = useState("")

    const ref=useRef()

    const [urls, seturls] = useState([])

    useEffect(() => {
        document.title = "Generate Links : SnapLink"
        let urlsnumber = localStorage.getItem("snaplink");
        if (urlsnumber != null) {
            let urls = JSON.parse(localStorage.getItem("snaplink"))
            seturls(urls)
        }    
    }, [])

    useEffect(() => {
        setid(`${uuidv4()}`)
    }, [url])


    const saveToLocal = () => {
        localStorage.setItem("snaplink", JSON.stringify(urls))
    }

    const generate = async() => {

        await setTimeout(() => {
            ref.text="ge"
        }, 2000);


        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl,
            "id": id
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
                setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                if(result.success===true){
                    seturl("")
                    setshorturl("")
                    seturls([...urls, { "url": url, "shorturl": shorturl, "id": id }])
                    localStorage.setItem("snaplink", JSON.stringify([...urls, { "url": url, "shorturl": shorturl, "id": id }]))
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
                }
                else{
                    toast.error(result.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                }
            })
            .catch((error) => console.error(error))

    }

    const copyText = (text) => {
        navigator.clipboard.writeText(text);
        toast.success('🔗 URL Copied!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    return (
        <div className='text-white flex  py-44 flex-col items-center justify-center'>
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
                    {/* <p className='text-xs mt-2 text-gray-500'>Note : 🚫Space is not allowed</p> */}
                </div>

                <button ref={ref} onClick={() => generate()} className='p-1 px-5 my-6 bg-[rgb(137,36,118)] hover:bg-[rgba(161,70,145,0.74)] cursor-pointer disabled:bg-[rgba(137,36,92,0.85)] disabled:cursor-not-allowed' disabled={url.length < 10 || shorturl.length < 3 || shorturl.includes(" ")}>Generate</button>
            </div>

            {generated && <div className='mt-5 text-center'>
                <div className='text-gray-500 '>Your Link is Generated 👇 !!!</div>
                <div className='flex gap-5'>
                    <Link className='text-gray-400 hover:text-gray-200 hover:underline' target='_blank' href={generated}>{generated}</Link>
                    <Image onClick={() => copyText(generated)} src="/copy1.svg" width={50} height={80} className='w-5 invert-100 opacity-50 hover:opacity-100 cursor-pointer' alt="copy" />
                </div>
            </div>
            }

            <Link href='/shorten/links' className=" border-2 mt-5 text-gray-400 border-gray-700 bg-[rgba(255,255,255,0)] p-1 px-4 w-fit rounded-full cursor-pointer hover:bg-[rgba(255,255,255,0.04)] hover:text-white"><button className='flex gap-2  items-center cursor-pointer' >Your recent Links <Image alt='link symbol' className='mix-blend-lighten invert-100' width={18} height={18} src="/link.png" /></button></Link>

        </div>
    )
}

// export default page

