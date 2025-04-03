import React from 'react'
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom'
import Layout from './Layouts/Layout'
import MainLayout from './Layouts/MainLayout'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Pricing from './Pages/Pricing'
import Support from './Pages/Support'
import Updates from './Pages/Updates'
import Blogs from './Pages/Blogs'
import Contact from './Pages/Contact'
import Faq from './Pages/Faq'
import ProductDetail from './Pages/ProductDetail'
import CaseStudies from './Pages/CaseStudies'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="/" element={<MainLayout/>}>
          <Route path="products" element={<Products />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="support" element={<Support />} />
          <Route path="updates" element={<Updates />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="faq" element={<Faq />} />
          <Route path="product-detail" element={<ProductDetail />} />
          <Route path="case-studies" element={<CaseStudies />} />
          
        </Route>
      </Routes>
    </Router>
  )
}

export default App