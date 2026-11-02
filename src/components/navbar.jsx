import { useState } from "react";
export default function Navbar() {
 const [open, setOpen] = useState(false);
 const menus = ['About', 'Services', 'Skills', 'Experience', 'Projects', 'Contact'];
 return <header className="site-header"><nav className="site-nav" aria-label="Main navigation" onKeyDown={e => {if(e.key === 'Escape') setOpen(false)}}>
  <a className="wordmark" href="#home" onClick={() => setOpen(false)}>immanuel<span>.</span></a>
  <button className="menu-toggle" aria-expanded={open} aria-controls="main-menu" onClick={() => setOpen(!open)}>{open ? 'Close menu' : 'Menu'}</button>
  <ul id="main-menu" className={open ? 'nav-links open' : 'nav-links'}>{menus.map(item => <li key={item}><a href={'#'+item.toLowerCase()} onClick={() => setOpen(false)}>{item}</a></li>)}</ul>
 </nav></header>
}
