import IconLink from "../../ui/IconLink";

const links = [
  { href: "https://github.com/vitejs/vite", iconHref: "/icons.svg#github-icon", label: "GitHub" },
  { href: "https://chat.vite.dev/", iconHref: "/icons.svg#discord-icon", label: "Discord" },
  { href: "https://x.com/vite_js", iconHref: "/icons.svg#x-icon", label: "X.com" },
  { href: "https://bsky.app/profile/vite.dev", iconHref: "/icons.svg#bluesky-icon", label: "Bluesky" },
];

function Skills() {
  return (
    <section id="skills" className="flex border-t border-[var(--border)] text-left max-lg:flex-col max-lg:text-center">
      <div id="social" className="flex-1 p-8 max-lg:py-6 max-lg:px-5">
        <svg className="mb-4 w-[22px] h-[22px]" role="presentation" aria-hidden="true">
          <use href="/icons.svg#social-icon"></use>
        </svg>
        <h2>Connect with us</h2>
        <p>Join the Vite community</p>
        <ul className="list-none p-0 flex gap-2 mt-8 mx-0 mb-0 max-lg:mt-5 max-lg:flex-wrap max-lg:justify-center">
          {links.map((link) => (
            <li key={link.href} className="max-lg:flex-[1_1_calc(50%-8px)]">
              <IconLink {...link} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
