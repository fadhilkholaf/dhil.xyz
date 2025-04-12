import { footerData } from "@/utils/data";

const Footer = () => {
    return (
        <footer className="layout flex h-fit flex-wrap justify-between gap-8 py-32">
            <header className="min-w-[200]">
                <h3>ファディル</h3>
                {/* <p>050307</p> */}
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
                            <ul className="flex flex-col gap-2">
                                {links.map((link, j) => (
                                    <li key={j}>
                                        <a
                                            target="_blank"
                                            href={link.href}
                                            className="before:ease-out-cubic relative inline-block w-full no-underline before:absolute before:bottom-0 before:left-0 before:h-px before:w-full before:origin-right before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-[250ms] hover:before:origin-left hover:before:scale-x-100"
                                        >
                                            {link.title}
                                        </a>
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
