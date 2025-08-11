const Hero = () => {
    return (
        <section className="flex h-fit w-full flex-col gap-16">
            <div>
                <h1>About Me</h1>
            </div>
            <main className="flex flex-col gap-4">
                <div>
                    <h3>Muhammad Fadhil Kholaf</h3>
                </div>
                <p>
                    I’m a software engineering graduate from SMK Telkom Malang,
                    born in 2006 in Tulungagung. I spent most of my early life
                    between Tulungagung and Trenggalek. My journey into
                    programming began at around 16 years old.
                </p>
                <p>
                    In my first year of high school, I explored Java and
                    object-oriented programming (OOP) — and quickly discovered
                    how much I enjoyed coding. By my second year, I shifted my
                    focus to web development, specializing in Node.js and
                    React.js.
                </p>
            </main>
        </section>
    );
};

export default Hero;
