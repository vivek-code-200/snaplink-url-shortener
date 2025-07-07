import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db("snaplink")
        const collection = db.collection("url")
        const data = await collection.find({}).toArray();

        // Convert ObjectId to String for client use
        const formatted = data.map((item) => ({
            ...item,
            _id: item._id.toString(),
        }));

        return new Response(JSON.stringify(formatted), {
            headers: { 'Content-Type': 'application/json' },
            status: 200,
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
            status: 500,
        });
    }
}

export async function DELETE(request) {

    const client = await clientPromise;
    const db = client.db("snaplink")

    const { id } = await request.json();
    console.log(id)

    if (!id) {
        return new Response(JSON.stringify({ error: 'No Id provided' }), {
            status: 400,
        });
    }
    try {
        const collection = db.collection("url")
        await collection.deleteOne({ id: id })

        return new Response({ success: true }, {
            status: 200,
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to Delete data' }), {
            status: 500,
        });
    }

}