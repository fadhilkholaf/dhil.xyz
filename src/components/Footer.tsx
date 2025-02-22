import Link from "next/link";

const socials: { title: string; href: string }[] = [
  {
    title: "Awwwards",
    href: "https://awwwards.com/fadhilkholaf",
  },
  {
    title: "GitHub",
    href: "https://github.com/fadhilkholaf",
  },
  {
    title: "Instagram",
    href: "https://instagram.com/fadhilkholaf",
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com/in/fadhilkholaf",
  },
  {
    title: "TikTok",
    href: "https://tiktok.com/@fadhilkholaf",
  },
  {
    title: "X",
    href: "https://x.com/fadhilkholaf",
  },
];

const attributions: { title: string; href: string }[] = [
  {
    title: "Flower",
    href: "https://unsplash.com/photos/selective-focus-photography-of-purple-petaled-flower-ko-Dt_501t4",
  },
  {
    title: "Lily",
    href: "https://tenor.com/view/love-mylofly-jkt48-lily-cantik-lily-lucu-gif-2165950836249670182",
  },
];

const inspo: { title: string; href: string }[] = [
  {
    title: "Ahsan Azizan",
    href: "https://www.ahsanzizan.xyz",
  },
  {
    title: "Fiddle Digital",
    href: "https://fiddle.digital",
  },
  {
    title: "Lusion",
    href: "https://lusion.co",
  },
  {
    title: "Stevia Please",
    href: "https://www.steviaplease.me",
  },
  {
    title: "Theodorus Clarence",
    href: "https://theodorusclarence.com",
  },
];

const Footer = () => {
  return (
    <footer className="layout mt-16 flex h-fit flex-col gap-4 py-16">
      <header>
        <h1>{"Let's connect"}</h1>
      </header>
      <hr />
      <main className="flex flex-wrap justify-between gap-8">
        <div className="min-w-[200]">
          <h3>Socials</h3>
          <ul className="flex flex-col gap-2">
            {socials.map((social, i) => (
              <li key={i}>
                <Link
                  target="_blank"
                  href={social.href}
                  className="before:ease-out-cubic relative inline-block w-full no-underline before:absolute before:bottom-0 before:left-0 before:h-px before:w-full before:origin-right before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-[250ms] hover:before:origin-left hover:before:scale-x-100"
                >
                  {social.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="min-w-[200]">
          <h3>Attributions</h3>
          <ul className="flex flex-col gap-2">
            {attributions.map((attribute, i) => (
              <li key={i}>
                <Link
                  target="_blank"
                  href={attribute.href}
                  className="before:ease-out-cubic relative inline-block w-full no-underline before:absolute before:bottom-0 before:left-0 before:h-px before:w-full before:origin-right before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-[250ms] hover:before:origin-left hover:before:scale-x-100"
                >
                  {attribute.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="min-w-[200]">
          <h3>Inspo</h3>
          <ul className="flex flex-col gap-2">
            {inspo.map((insp, i) => (
              <li key={i}>
                <Link
                  target="_blank"
                  href={insp.href}
                  className="before:ease-out-cubic relative inline-block w-full no-underline before:absolute before:bottom-0 before:left-0 before:h-px before:w-full before:origin-right before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-[250ms] hover:before:origin-left hover:before:scale-x-100"
                >
                  {insp.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
