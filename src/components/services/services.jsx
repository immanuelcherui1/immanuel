const services = [
 ['Web development', 'Responsive websites, landing pages and backend services built with React, JavaScript, Python and Flask.'],
 ['Graphic design', 'Brand visuals, social media graphics and print-ready marketing materials for businesses and campaigns.'],
 ['ICT support', 'Practical troubleshooting for laptops, printers and office software, with clear documentation and digital records.']
];
export default function Services() {
 return <section id="services"><p className="eyebrow">WHAT I BRING</p><h2 className="section-title">From idea to working solution.</h2><div className="grid md:grid-cols-3 gap-6">{services.map(([title,details],i) => <article className="service-card" key={title}><span>0{i+1}</span><h3>{title}</h3><p>{details}</p></article>)}</div><hr className="section-border"/></section>;
}
