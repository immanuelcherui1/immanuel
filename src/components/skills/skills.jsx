const groups = [
 ['Development', ['JavaScript', 'React', 'Python', 'Flask', 'REST APIs', 'MySQL', 'SQLite', 'SQLAlchemy']],
 ['Design', ['Figma', 'Adobe Illustrator', 'Photoshop', 'Canva', 'Branding', 'Print production']],
 ['Tools & support', ['Git & GitHub', 'Vercel', 'Netlify', 'ICT troubleshooting', 'Microsoft Office', 'Google Workspace']]
];
export default function Skills() {
 return <section id="skills"><h2 className="section-title">Tools I work with.</h2><div className="grid md:grid-cols-3 gap-6">{groups.map(([title,tools]) => <div key={title} className="skill-group"><h3>{title}</h3><ul>{tools.map(tool => <li key={tool}>{tool}</li>)}</ul></div>)}</div><hr className="section-border"/></section>;
}
