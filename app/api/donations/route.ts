import { NextRequest, NextResponse } from "next/server";
import api from "@/app/lib/api";

type DonationRequestBody = {
  artistId: string;
  price: number;
  message?: string;
  email?: string;
};

type MirloResponse = {
  redirectUrl: string;
};

export async function POST(request: NextRequest) {
  try {
    const body: DonationRequestBody = await request.json();
    const { artistId, price, message, email } = body;

    // Make the request to Mirlo API from the backend using the api instance
    const data = await api.post<
      { price: number; message?: string; email?: string },
      MirloResponse
    >(`artists/${artistId}/tip`, {
      price,
      message,
      email,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Donation error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
