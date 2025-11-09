import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Users from './pages/Users'
import UserDetail from './pages/UserDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogPost />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UserDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
