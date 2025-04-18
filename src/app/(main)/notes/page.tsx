import { Metadata } from "next";

import { baseUrl, openGraphBaseURL } from "@/constants/data/urls";

export const metadata: Metadata = {
    title: "Notes",
    openGraph: {
        siteName: "Fadhilkholaf",
        url: baseUrl,
        images: [
            {
                url: `${openGraphBaseURL}notes.png`,
                width: 800,
                height: 418,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        creator: "@fadhilkholaf",
        images: `${openGraphBaseURL}notes.png`,
    },
};

const NotesPage = () => {
    return (
        <>
            <h1>{`IT'S NOT DONE YET!!!`}</h1>
        </>
    );
};

export default NotesPage;
