import { ImageResponse } from "next/og";
import { type NextRequest } from "next/server";

export const runtime = "edge";

export const contentType = "image/png";

export const GET = async (request: NextRequest) => {
    const searchParams = request.nextUrl.searchParams;
    const title = searchParams.get("title");
    const name = searchParams.get("name");

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
                    width: 800,
                    height: 418,
                }}
            >
                <img
                    src="https://res.cloudinary.com/fadhilkholaf/image/upload/v1745588407/fadhilkholaf.my.id/opengraph/fn9xsxvfnq2nvtxyud99.png"
                    alt=""
                    style={{ position: "absolute", width: 800, height: 418 }}
                />
                <p
                    style={{
                        fontSize: 32,
                        position: "absolute",
                        left: 103,
                        bottom: 97,
                        letterSpacing: -1,
                    }}
                >
                    {title && decodeURIComponent(title)}
                </p>
                <p
                    style={{
                        fontSize: 32,
                        position: "absolute",
                        left: 103,
                        bottom: 55,
                        letterSpacing: -1,
                    }}
                >
                    {name && decodeURIComponent(name)}
                </p>
            </div>
        ),
        {
            width: 800,
            height: 418,
            fonts: [{ data: fontData, name: "Roboto Mono Bold" }],
        },
    );
};
