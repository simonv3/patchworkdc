import { NextRequest, NextResponse } from "next/server";
import api from "@/app/lib/api";

type FollowRequestBody = {
  email: string;
  message?: string;
};

export async function POST(request: NextRequest) {
  try {
    const body: FollowRequestBody = await request.json();
    const { email, message } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const artistId = process.env.NEXT_PUBLIC_ARTIST_ID ?? 1;

    // Make the request to Mirlo API from the backend using the api instance
    const data = await api.post<
      {
        email: string;
        message?: string;
      },
      { success: boolean }
    >(`artists/${artistId}/follow`, {
      email,
      message,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Follow error:", error);
    return NextResponse.json(
      { error: "Failed to submit follow request" },
      { status: 500 },
    );
  }
}
