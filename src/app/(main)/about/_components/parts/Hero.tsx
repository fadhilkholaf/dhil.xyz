import Image from "next/image";

import Ritsuki from "@/public/images/home/ritsuki.jpeg";

const Hero = () => {
    return (
        <section className="flex h-fit w-full flex-col gap-16">
            <div>
                <h1>About Me</h1>
            </div>
            <main className="flex h-fit w-full flex-col-reverse gap-16 sm:flex-row sm:justify-between">
                <div className="flex flex-col gap-4 sm:w-1/2">
                    <div>
                        <h3>Muhammad Fadhil Kholaf</h3>
                    </div>
                    <p>
                        I am a software engineering student at SMK Telkom
                        Malang. I was born in 2006 in Tulungagung, and I spent
                        the first 16 years of my life in Tulungagung and
                        Trenggalek. My journey to becoming a programmer started
                        when I was about 16 years old.
                    </p>
                    <p>
                        In my first year of high school, I learned Java and
                        object-oriented programming (OOP), and I thought it was
                        fun, to be honest. In the second year, I chose Node.js
                        and React.js as my areas of expertise and started
                        learning web development.
                    </p>
                </div>
                <Image
                    src={Ritsuki}
                    alt="Ritsuki"
                    priority
                    className="aspect-square h-fit w-2/3 max-w-[300px] self-center rounded-lg object-cover sm:self-baseline"
                />
            </main>
        </section>
    );
};

export default Hero;
