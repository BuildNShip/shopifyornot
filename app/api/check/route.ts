import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const url = searchParams.get("url");

        if (!url) {
            return NextResponse.json({ error: "URL parameter is required" }, { status: 400 });
        }

        // Make the request to the external API
        const response = await fetch(
            `https://api.shopifyornot.in/check?url=${encodeURIComponent(url)}`,
            {
                headers: {
                    Accept: "application/json",
                },
            }
        );

        if (!response.ok) {
            return NextResponse.json({ error: "Failed to check URL" }, { status: response.status });
        }

        const data = await response.json();

        // Return the data with CORS headers
        return NextResponse.json(data, {
            status: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
            },
        });
    } catch (error) {
        console.error("Error checking URL:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}

export async function OPTIONS() {
    return NextResponse.json(
        {},
        {
            status: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
            },
        }
    );
}
