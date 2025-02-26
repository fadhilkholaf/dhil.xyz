import Link from "next/link";

import { footerData } from "@/utils/data";

const Footer = () => {
  return (
    <footer className="layout mt-16 flex h-fit flex-col gap-4 py-16">
      <header>
        <h1>{"Let's connect"}</h1>
      </header>
      <hr />
      <main className="flex flex-wrap justify-between gap-8">
        {footerData.map((section, i) => {
          const [[name, links]] = Object.entries(section);
          return (
            <div key={i} className="flex min-w-[200] flex-col gap-2">
              <h3>{name}</h3>
              <ul className="flex flex-col gap-2">
                {links.map((link, j) => (
                  <li key={j}>
                    <Link
                      target="_blank"
                      href={link.href}
                      className="before:ease-out-cubic relative inline-block w-full no-underline before:absolute before:bottom-0 before:left-0 before:h-px before:w-full before:origin-right before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-[250ms] hover:before:origin-left hover:before:scale-x-100"
                    >
                      {link.title}
                    </Link>
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
