import React from 'react';
import './ProjectCard.css';


export default function ProjectCard({ title, description, link }){
return (
<article className="project-card">
<div className="project-main">
<h3>{title}</h3>
<p>{description}</p>
</div>
{link && <a href={link} className="project-link">View</a>}
</article>
);
}