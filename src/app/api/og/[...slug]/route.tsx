import { ImageResponse } from "next/og";

import { Note, notes } from "@/constants/data/notes";
import { allProjects } from "@/constants/data/projects";
import { baseUrl } from "@/constants/data/urls";
import { ProjectInterface } from "@/types/project";

export const runtime = "edge";

export const contentType = "image/png";

const routes: string[] = ["projects", "notes"];

export const GET = async (
    req: Request,
    { params }: { params: Promise<{ slug: string[] }> },
) => {
    const { slug } = await params;

    const isValidRoute = routes.includes(slug[0]);

    let item: Note | ProjectInterface | undefined;

    switch (slug[0]) {
        case routes[0]:
            item = allProjects.find(
                (p) => p.name.toLowerCase().replaceAll(" ", "-") === slug[1],
            );
            break;
        case routes[1]:
            item = notes.find((n) => n.mdx === slug[1]);
            break;
        default:
            item = undefined;
            break;
    }

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
                        bottom: isValidRoute ? 97 : 55,
                        letterSpacing: -1,
                    }}
                >
                    {isValidRoute
                        ? `${slug[0].charAt(0).toUpperCase()}${slug[0].slice(1)}:`
                        : "Not Found"}
                </p>
                {isValidRoute && (
                    <p
                        style={{
                            fontSize: 32,
                            position: "absolute",
                            left: 103,
                            bottom: 55,
                            letterSpacing: -1,
                        }}
                    >
                        {item
                            ? "title" in item
                                ? item.title
                                : item.name
                            : "Not Found"}
                    </p>
                )}
            </div>
        ),
        {
            width: 800,
            height: 418,
            fonts: [{ data: fontData, name: "Roboto Mono Bold" }],
        },
    );
};
