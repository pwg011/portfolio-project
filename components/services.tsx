const services = [
  {
    number: "01",
    title: "PRODUCT DESIGN & BUILD",
    description: "Websites and web applications.",
  },
  {
    number: "02",
    title: "PRODUCT REFINEMENT",
    description: "Cleaner pages, better flows, refined user experiences.",
  },
  {
    number: "03",
    title: "WORKFLOW AUTOMATION",
    description:
      "Custom tools, document processing, task automation, and practical AI features.",
  },
];

export function Services() {
  return (
    <section className="services-section" aria-labelledby="services-heading">
      <div className="services-inner shell">
        <div className="services-content">
          <h2 className="services-label" id="services-heading">
            Services
          </h2>
          <div className="services-list">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="service-accent" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
