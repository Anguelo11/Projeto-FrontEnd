

const Section = ({ title, titleAlign = "left", link, children }) => {
  return (
    <section className="mb-6">
      <div className="flex justify-content-between align-items-center mb-4">
        <h2
          className="text-[24px] text-dark-gray-2"
          style={{ textAlign: titleAlign }}
        >
          {title}
        </h2>

        {link && (
          <a
            href={link.href}
            className="text-primary text-[18px] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.text}
          </a>
        )}
      </div>

      <div>{children}</div>
    </section>
  );
};

export default Section;
