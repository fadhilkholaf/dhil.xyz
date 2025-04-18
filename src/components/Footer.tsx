import { footerData } from "@/constants/data/footer";

import PageTransitionLink from "./PageTransitionLink";

const Footer = () => {
    return (
        <footer className="layout flex h-fit flex-wrap justify-between gap-8 py-32">
            <header className="min-w-[200]">
                <h3>ファディル</h3>
            </header>
            <main className="flex flex-wrap justify-between gap-8">
                {footerData.map((section, i) => {
                    const [[name, links]] = Object.entries(section);
                    return (
                        <div
                            key={i}
                            className="flex min-w-[200] flex-col gap-2"
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
