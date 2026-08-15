import { Navigate, Route, Routes } from 'react-router-dom'
import { Footer, Header } from './components'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import AdminLogin from './pages/AdminLogin'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Leadership from './pages/Leadership'

function PublicLayout({ children }) { return <><Header/><main>{children}</main><Footer/></> }
export default function App() { return <Routes>
  <Route path="/" element={<PublicLayout><Home/></PublicLayout>}/>
  <Route path="/about" element={<PublicLayout><About/></PublicLayout>}/>
  <Route path="/leadership" element={<PublicLayout><Leadership/></PublicLayout>}/>
  <Route path="/services" element={<PublicLayout><Services/></PublicLayout>}/>
  <Route path="/projects" element={<PublicLayout><Projects/></PublicLayout>}/>
  <Route path="/products" element={<PublicLayout><Products/></PublicLayout>}/>
  <Route path="/contact" element={<PublicLayout><Contact/></PublicLayout>}/>
  <Route path="/admin/login" element={<AdminLogin/>}/>
  <Route path="/admin" element={<Dashboard/>}/>
  <Route path="*" element={<Navigate to="/" replace/>}/>
</Routes> }
