type AttributionProps = {
  className?: string;
  linkClassName?: string;
};

function Attribution({
  className = "",
  linkClassName = "",
}: AttributionProps) {
  return (
    <footer className={`attribution pt-10 ${className}`}>
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
        className={linkClassName}
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        href="https://github.com/Fonsicreus"
        className={linkClassName}
      >
        Satella
      </a>.
    </footer>
  );
}

export default Attribution;