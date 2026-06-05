import { db } from "@/db";
import { contactSubmissions } from "@/db/schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, organization, email, phone, projectType, message } = body;

    if (!name || !email || !projectType || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await db.insert(contactSubmissions).values({
      name,
      organization: organization || null,
      email,
      phone: phone || null,
      projectType,
      message,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
