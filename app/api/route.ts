export async function GET() {
    return Response.json({message: "Hello World from back-end"});
}

export async function POST() {
    return Response.json({message: "Hello World from post back-end"});
}