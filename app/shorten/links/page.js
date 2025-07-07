"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'

const Page = () => {

    const [urls, seturls] = useState([])

    useEffect(() => {
        // getLinks()
        document.title = "Your Links : SnapLink"

        let urlnumber = localStorage.getItem("snaplink");
        if (urlnumber != null) {
            let urls = JSON.parse(localStorage.getItem("snaplink"))
            seturls(urls)
            localStorage.setItem("snaplink", JSON.stringify(urls))

        }
    }, [])

    // const getLinks = async () => {

    //     await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/data`)
    //         .then((res) => res.json())
    //         .then((json) => setdburls(json))
    //         .catch((err) => console.error('Failed to fetch: ', err))

    // }

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

    const handleDelete = async (id) => {
        console.log("Deleting link with Id ", id)
        let c = confirm("Do you really want to delete ?")
        if (c) {


            let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/data`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });

            if (res.ok) {
                seturls(urls.filter(item => item.id != id))
                localStorage.setItem("snaplink", JSON.stringify(urls.filter(item => item.id != id)))
                toast.success('URL Deleted!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            } else {
                console.error("Failed to delete")
            }
        }

    }

    return (
        <div className='text-gray-500 p-5 lg:px-16 pt-36'>
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
            <div className='flex justify-between items-center lg:px-32'>
                <h1 className='lg:text-4xl text-2xl text-white '>Your Links</h1>
                <Link href='/shorten'><button className="flex items-center gap-2 border-2 lg:mt-5 text-gray-400 border-gray-700 bg-[rgba(255,255,255,0)] p-1 px-4 w-fit rounded-full cursor-pointer hover:bg-[rgba(255,255,255,0.04)] hover:text-white">Generate Links <Image alt='link symbol' className='mix-blend-lighten invert-100' width={18} height={18} src="/link.png" /></button></Link>

            </div>

            <div className='lg:w-[75vw] min-h-[58vh] mx-auto my-16'>
                {urls.length === 0 && <div className='text-2xl text-center pt-40'>404 | You have not customized any links yet.</div>}

                {urls.length !== 0 && <table className="md:w-[75vw] mx-auto">
                    <thead className='w-full border-1 bg-[rgba(255,0,183,0.04)]'>
                        <tr>
                            <th className='w-1/3 p-2'>Original Links</th>
                            <th className='w-1/3'>Customized links</th>
                            <th className='w-1/3'>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='w-full border-b-1 '>
                        {urls.map((item) => {
                            return (
                                <tr key={item.id} className=''>
                                    <td className='max-w-[10vw] overflow-x-scroll py-4 text-center'>{item.url}</td>
                                    <td className='lg:w-1/3 max-w-[10vw] overflow-x-scroll  py-4 text-center'>{`${item.shorturl}`}</td>
                                    <td className='w-1/3 text-center py-4 '>
                                        <div className='lg:flex hidden  justify-center gap-3'>
                                            <div onClick={() => { copyText(`${process.env.NEXT_PUBLIC_HOST}/${item.shorturl}`) }} className='text-center bg-[rgba(255,255,255,0)] border-x-1 border-gray-500 flex items-center gap-1 p-1 px-3 rounded-full text-gray-300 opacity-40 hover:opacity-90 justify-center w-fit cursor-pointer hover:text-gray-300 text-[14px]'>Copy<Image className='invert-100 block lg:block' alt='copy symbol' width={15} height={15} src="/copy.svg" /></div>
                                            <Link target='_blank' href={`${process.env.NEXT_PUBLIC_HOST}/${item.shorturl}`}><span className='text-center bg-[rgba(255,255,255,0)] border-x-1 border-gray-500 flex items-center gap-1 p-1 px-3 rounded-full text-gray-300 opacity-40 hover:opacity-90 justify-center w-fit cursor-pointer hover:text-gray-300 text-[14px]'>Open<Image className='invert-100' alt='arrow symbol' width={15} height={15} src="/open1.svg" /></span></Link>
                                            <span onClick={() => { handleDelete(item.id) }} className='text-center bg-[rgba(255,255,255,0)] border-x-1 border-gray-500 flex items-center gap-1 p-1 px-3 rounded-full text-gray-300 opacity-40 hover:opacity-90 justify-center w-fit cursor-pointer hover:text-gray-300 text-[14px]'>Delete<Image className='invert-100' alt='delete symbol' width={15} height={15} src="/delete.svg" /></span>
                                        </div>
                                        <div className=' flex lg:hidden  justify-center gap-2'>
                                            <div onClick={() => { copyText(`${process.env.NEXT_PUBLIC_HOST}/${item.shorturl}`) }} className='p-2 bg-[rgba(255,255,255,0)] border-1 border-gray-500  items-center rounded-full  opacity-40 hover:opacity-90 flex justify-center  cursor-pointer hover:text-gray-300 '><Image className='invert-100' alt='copy symbol' width={15} height={35} src="/copy.svg" /></div>
                                            <Link target='_blank' href={`${process.env.NEXT_PUBLIC_HOST}/${item.shorturl}`}><span className='p-2 bg-[rgba(255,255,255,0)] border-1 border-gray-500  items-center rounded-full  opacity-40 hover:opacity-90 flex justify-center  cursor-pointer hover:text-gray-300 '><Image className='invert-100' alt='arrow symbol' width={15} height={45} src="/open1.svg" /></span></Link>
                                            <span onClick={() => handleDelete(item.id)} className='p-2 bg-[rgba(255,255,255,0)] border-1 border-gray-500  items-center rounded-full  opacity-40 hover:opacity-90 flex justify-center  cursor-pointer hover:text-gray-300 '><Image className='invert-100' alt='delete symbol' width={15} height={35} src="/delete.svg" /></span>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                }
            </div>
        </div>
    )
}

export default Page
