const services = [
  {
    number: "01",
    title: "PRODUCT DESIGN & BUILD",
    description:
      "Websites and web applications engineered with precision and editorial intent.",
  },
  {
    number: "02",
    title: "PRODUCT REFINEMENT",
    description:
      "Cleaner pages, better flows, and highly refined user experiences for existing products.",
  },
  {
    number: "03",
    title: "WORKFLOW AUTOMATION",
    description:
      "Custom tools, document processing, task automation, and practical AI feature implementation.",
  },
];

export function Services() {
  return (
    <section
      className="services-section"
      id="services"
      aria-labelledby="services-heading"
    >
      <div className="services-inner shell">
        <div className="services-heading">
          <h2 className="services-label" id="services-heading">
            <span aria-hidden="true" />
            Services
          </h2>
        </div>
        <div className="services-list">
          {services.map((service) => (
            <article className="service-row" key={service.number}>
              <span className="service-number">{service.number}</span>
              <div className="service-copy">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
