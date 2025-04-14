import { ImageResponse } from "next/og";

import { allProjects, baseUrl } from "@/utils/data";

export const runtime = "edge";

export const contentType = "image/png";

export const GET = async (
    req: Request,
    { params }: { params: Promise<{ id: string }> },
) => {
    const { id } = await params;

    const project = allProjects.find(
        (p) => p.name.toLowerCase().replaceAll(" ", "-") === id,
    );

    const fontData = await fetch(
        new URL(
            "../../../../../public/fonts/RobotoMono-Bold.ttf",
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
                    src={`${baseUrl}/images/og/template.png`}
                    style={{ position: "absolute", width: 800, height: 418 }}
                />
                <p
                    style={{
                        fontSize: 32,
                        position: "absolute",
                        left: 103,
                        bottom: 97,
                    }}
                >
                    Project:
                </p>
                <p
                    style={{
                        fontSize: 32,
                        position: "absolute",
                        left: 103,
                        bottom: 55,
                    }}
                >
                    {project ? project.name : "Not Found"}
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
