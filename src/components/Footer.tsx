import { footerData } from "@/constants/data/footer";

import PageTransitionLink from "./PageTransitionLink";

const Footer = () => {
    return (
        <footer className="layout flex h-fit flex-col justify-between gap-x-16 gap-y-8 py-16 lg:flex-row">
            <header className="flex w-full flex-col gap-y-4 break-words lg:w-1/3">
                <div className="flex flex-col gap-y-2">
                    <h3>ファディル</h3>
                    <p>Lifelong learner web developer. Email me here</p>
                </div>
                <a
                    href="mailto:fadhilkholafbusiness@gmail.com"
                    className="bg-secondary text-primary inline-block w-fit rounded-lg px-4 py-2 no-underline"
                >
                    <span className="animated-underline before:bg-primary">
                        ✉️ Email →
                    </span>
                </a>
            </header>
            <main className="flex w-full flex-wrap justify-between gap-8 lg:w-1/2">
                {footerData.map((section, i) => {
                    const [[name, links]] = Object.entries(section);
                    return (
                        <div
                            key={i}
                            className="flex min-w-[8rem] flex-col gap-2"
                        >
                            <h4>{name}</h4>
                            <ul className="flex flex-col gap-y-2">
                                {links.map((link, j) => (
                                    <li key={j}>
                                        {link.href.startsWith("/") ? (
                                            <PageTransitionLink
                                                href={link.href}
                                                className="text-secondary animated-underline bg-transparent p-0"
                                            >
                                                {link.title}
                                            </PageTransitionLink>
                                        ) : (
                                            <a
                                                target="_blank"
                                                href={link.href}
                                                className="animated-underline"
                                            >
                                                {link.title}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </main>
        </footer>
    );
};

export default Footer;
