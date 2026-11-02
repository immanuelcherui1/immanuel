import Footer from './components/footer';
import Navbar from './components/navbar';
import Home from './pages/Home';
export default function App() {
 return <><a className="skip-link" href="#main">Skip to content</a><Navbar/><main id="main" className="page-container"><Home/></main><Footer/></>;
}
