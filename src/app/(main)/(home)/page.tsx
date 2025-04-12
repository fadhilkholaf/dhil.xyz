"use client";

import { useEffect, useState } from "react";

import { getCurrentlyPlaying } from "@/lib/spotify";
import { SpotifyCurrentlyPlayingInterface } from "@/types/spotify";

import Hero from "./_components/parts/Hero";
import Mood from "./_components/parts/Mood";
import Projects from "./_components/parts/Projects";

const HomePage = () => {
    const [response, setResponse] = useState<
        SpotifyCurrentlyPlayingInterface | false | "loading"
    >("loading");

    useEffect(() => {
        const getResponse = async () => {
            const responseData = await getCurrentlyPlaying();

            setResponse(responseData);
        };

        getResponse();
    }, []);

    return (
        <>
            <Hero />
            <Projects />
            <Mood data={response} />
        </>
    );
};

export default HomePage;
