

const Section = ({ title, titleAlign = "left", link, children}) => {
  return (
    <section className="p-3 mb-6">
      <div className="flex justify-content-between align-items-center mb-4">
        <h2
          style={{ textAlign: titleAlign, color: "#474747", fontsize: "24px", flex: 1}}
        >
          {title}
        </h2>

        {link && (
          <a
            href={link.href}
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            style={{color: "#C92071",
              fontsize: "18px",
              marginLeft: "auto",
              textDecoration: "none"
            }}
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
