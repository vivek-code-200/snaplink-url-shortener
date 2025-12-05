import clientPromise from "@/lib/mongodb"
import { v4 as uuidv4 } from "uuid";
import { NextResponse } from "next/server";

export async function POST(request) {

    const body = await request.json()
    const client = await clientPromise;
    const db = client.db("snaplink")
    const collection = db.collection("url")

    const link = await collection.findOne({ shorturl: body.shorturl })
    if (link) {
        return NextResponse.json({ success: false, error: true, message: "Customized URL already exists!" })
    }

    let key = body.userkey;

    let userDoc = null;

    if (key) {
        userDoc = await collection.findOne({ userkey: body.userkey })
    }

    if (!userDoc) {
        key = uuidv4();

        await db.collection('users').insertOne({
            userkey: key,
            createdAt: new Date(),
        });
    }

    const result = await collection.insertOne({
        userkey: key,
        url: body.url,
        shorturl: body.shorturl,
        createdAt: new Date()
    })

    return NextResponse.json({ success: true, error: false, message: "URL Generated Successfully!", userkey: key })
}