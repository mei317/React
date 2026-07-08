type IconLinkProps = {
  href: string;
  iconHref: string;
  label: string;
};

function IconLink({ href, iconHref, label }: IconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="text-[var(--text-h)] text-base rounded-md bg-[var(--social-bg)] flex py-1.5 px-3 items-center gap-2 no-underline transition-shadow duration-300 hover:shadow-[var(--shadow)] max-lg:w-full max-lg:justify-center max-lg:box-border"
    >
      <svg className="h-[18px] w-[18px]" role="presentation" aria-hidden="true">
        <use href={iconHref}></use>
      </svg>
      {label}
    </a>
  );
}

export default IconLink;
