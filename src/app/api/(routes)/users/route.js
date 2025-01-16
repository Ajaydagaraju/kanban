import nocodb from '@/app/lib/nocodb'; 

export async function GET() {
  try {
    const response = await nocodb.get('/users');
    return Response.json(response.data);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const response = await nocodb.post('/users', body);
    return Response.json(response.data, { status: 201 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}



// export async function GET() {
//     console.log("GET request received!");
//     return new Response(JSON.stringify({ message: "Users fetched successfully!" }), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
  
