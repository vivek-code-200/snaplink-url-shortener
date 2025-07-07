import clientPromise from "@/lib/mongodb"

export async function POST(request) {

    const body=await request.json()
    const client=await clientPromise;
    const db=client.db("snaplink")
    const collection =db.collection("url")

    // Check if the shorturl exists
    const link=await collection.findOne({shorturl: body.shorturl})
    if(link){
        return Response.json({success:false, error:true, message:"Customized URL already exists!"})
    }

    const result=await collection.insertOne({
        url:body.url,
        shorturl:body.shorturl,
        id:body.id
    })

    return Response.json({success:true,error:false,message:"URL Generated Successfully!"})
}