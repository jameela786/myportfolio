import React from 'react';
import './Footer.css';


export default function Footer(){
return (
<footer className="site-footer">
<div className="container footer-inner">
<div>© {new Date().getFullYear()} Jameel Shaik</div>
<div>Built with React • Designed for simplicity</div>
</div>
</footer>
);
}