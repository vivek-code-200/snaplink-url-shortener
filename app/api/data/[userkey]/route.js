import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET(req,{ params }) {
    const client=await clientPromise;
    const db=client.db('snaplink');

    const { userkey }=params;
    // console.log({userkey})
    
    const links=await db.collection('url').find({userkey}).toArray();

    return NextResponse.json({ links });
}