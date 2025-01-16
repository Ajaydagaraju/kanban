import nocodb from "@/app/lib/nocodb";

export async function GET(req, { params }) {
  const { id } = params; // Extract ID from dynamic route
  try {
    const response = await nocodb.get(`/Users/${id}`); // Fetch user by ID
    return Response.json(response.data);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  const { id } = params; // Extract ID from dynamic route
  try {
    const body = await req.json(); // Parse request body
    const response = await nocodb.patch(`/Users/${id}`, body); // Update user by ID
    return Response.json(response.data);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  const { id } = params; // Extract ID from dynamic route
  try {
    const response = await nocodb.delete(`/Users/${id}`); // Delete user by ID
    return Response.json({ message: 'User deleted successfully' });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
