export async function GET() {
    const categories = ["dishes", "main", "pizza"]; 
    return Response.json({message: "Hello World from back-end"});
}

export async function POST(req: Request) {

    const body = await req.json();
    return Response.json({message: "Hello World from post back-end"});
}
