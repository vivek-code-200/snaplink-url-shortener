"use client"
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form'

export default function Page() {

    const {
        register,
        handleSubmit,
        watch,
        setError,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm()

    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [id, setid] = useState("")

    const [generated, setgenerated] = useState("")

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

    const delay = (d) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, d * 1000);
        })
    }

    const generate = async () => {

        await delay(3)

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
                if (result.success === true) {
                    setgenerated(`${process.env.NEXT_PUBLIC_HOST}${shorturl}`)
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
                else {
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
        <div className='text-white flex  py-48 flex-col items-center justify-center'>
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
                <form action="" onSubmit={handleSubmit(generate)} >
                    <div className='flex flex-col'>
                        <label className='text-gray-400 my-2' htmlFor="url">Original URL</label>
                        <input {...register("url", { required: { value: true, message: "Input your Long URL." }, validate: (value) => value.startsWith("https://") || "🚫Link is not valid." })} onChange={(e) => { seturl(e.target.value) }} className='border-[1px] border-gray-500 text-[15px] p-2 px-5 rounded-lg' type="text" value={url} name="url" id="" placeholder='Enter Original URL' />
                        {errors.url && <div className='message text-[12px] text-red-400 m-1'> {errors.url.message}</div>}
                    </div>
                    <div className='flex flex-col mt-4'>
                        <label className='text-gray-400 mb-2' htmlFor="shortUrl">Your URL</label>
                        <input {...register("shortUrl", { required: { value: true, message: "Input your Short URL." }, minLength: { value: 3, message: "Minimum length should be 3." }, validate: (value) => !/\s/.test(value) || "🚫Space is not allowed." })} onChange={(e) => { setshorturl(e.target.value) }} className='border-[1px] border-gray-500 p-2 text-[15px] px-5 rounded-lg' type="text" value={shorturl} name="shortUrl" id="" placeholder='Enter your URL' />
                        {errors.shortUrl && <div className='message text-[12px] text-red-400 m-1'> {errors.shortUrl.message}</div>}
                    </div>

                    <button type='submit' className='p-1 px-5 w-full my-6 mt-8 bg-[rgba(137,36,102,0.79)] hover:bg-[rgb(137,36,102)] cursor-pointer disabled:bg-[rgba(137,36,92,0.85)] disabled:cursor-not-allowed' disabled={isSubmitting}>Generate</button>
                </form>
            </div>
                 {isSubmitting && <div className='text-center flex flex-col gap-2 items-center mt-5'> Generating... <img src="/loader.gif" className='mix-blend-lighten invert-100 w-8' alt="" /></div>}

            {isSubmitSuccessful && generated && <div className='mt-5 text-center'>
                <div className='text-gray-500 '>Your Link is Generated 👇 !!!</div>
                <div className='flex gap-5'>
                    <Link className='text-gray-400 hover:text-blue-500 underline' target='_blank' href={generated}>{generated}</Link>
                    <Image onClick={() => copyText(generated)} src="/copy1.svg" width={50} height={80} className='w-5 invert-100 opacity-50 hover:opacity-100 cursor-pointer' alt="copy" />
                </div>
            </div>
            }

            <Link href='/shorten/links' className=" border-2 mt-5 text-gray-400 border-gray-700 bg-[rgba(255,255,255,0)] p-1 px-4 w-fit rounded-full cursor-pointer hover:bg-[rgba(255,255,255,0.04)] hover:text-white"><button className='flex gap-2  items-center cursor-pointer' >Your recent Links <Image alt='link symbol' className='mix-blend-lighten invert-100' width={18} height={18} src="/link.png" /></button></Link>

        </div>
    )
}

// export default page

