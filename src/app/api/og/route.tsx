/* eslint-disable @next/next/no-img-element */

import { ImageResponse } from "next/og";
import { type NextRequest } from "next/server";

export const runtime = "edge";

export const contentType = "image/png";

export const GET = async (request: NextRequest) => {
    const searchParams = request.nextUrl.searchParams;
    const title = searchParams.get("t");
    const subtitle = searchParams.get("s");

    const fontData = await fetch(
        new URL(
            "../../../../public/fonts/RobotoMono-Bold.ttf",
            import.meta.url,
        ),
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
        (
            <div
                style={{
                    display: "flex",
                    position: "relative",
                    width: 600,
                    height: 315,
                }}
            >
                <img
                    src="https://95k1y8fb5v.ufs.sh/f/EyY37ktHRd8rIeH0ElGFbo2a8ISXHvwn0msGAEjBTcMgqukC"
                    alt="Open Graph Image"
                    style={{ position: "absolute", width: 600, height: 315 }}
                />
                <p
                    style={{
                        fontSize: 32,
                        position: "absolute",
                        left: 39,
                        bottom: 60,
                        letterSpacing: -1,
                    }}
                >
                    {title && decodeURIComponent(title)}
                </p>
                <p
                    style={{
                        fontSize: 32,
                        position: "absolute",
                        left: 39,
                        bottom: 18,
                        letterSpacing: -1,
                    }}
                >
                    {subtitle && decodeURIComponent(subtitle)}
                </p>
            </div>
        ),
        {
            width: 600,
            height: 315,
            fonts: [{ data: fontData, name: "Roboto Mono Bold" }],
        },
    );
};
