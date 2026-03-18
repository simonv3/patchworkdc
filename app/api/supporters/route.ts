import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const artistId = searchParams.get("artistId");
  const sinceDate = searchParams.get("sinceDate") || "2026-01-22";

  if (!artistId) {
    return NextResponse.json(
      { error: "artistId is required" },
      { status: 400 },
    );
  }

  try {
    const apiHost = process.env.NEXT_PUBLIC_API_HOST || "https://mirlo.space";
    const apiKey = process.env.NEXT_PUBLIC_API_KEY || "";

    const response = await fetch(
      `${apiHost}/artists/${artistId}/supporters?sinceDate=${sinceDate}`,
      {
        headers: apiKey ? { Authorization: `Bearer ${apiKey}` } : undefined,
      },
    );

    if (!response.ok) {
      throw new Error(`Mirlo API returned ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to fetch supporters:", error);
    return NextResponse.json(
      { error: "Failed to fetch supporters" },
      { status: 500 },
    );
  }
}
