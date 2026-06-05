import { db } from "@/db";
import { newsletterSubscriptions } from "@/db/schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return Response.json({ error: "Email required" }, { status: 400 });
    }

    await db
      .insert(newsletterSubscriptions)
      .values({ email })
      .onConflictDoNothing();

    return Response.json({ success: true });
  } catch (error) {
    console.error("Newsletter error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
