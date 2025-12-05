import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function DELETE(req,{params}) {
    const client=await clientPromise;
    const db=client.db('snaplink');

    const {userkey,shorturl}=params;

    const result=await db.collection('url').deleteOne({userkey,shorturl});

    if(result.deletedCount===0){
        return NextResponse.json({error:"Not found"},{status:404});
    }
    return NextResponse.json({success:"true",message:"Deleted Successfully!"},{status: 200,})
}