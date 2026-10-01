import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
import CaseStudy from "./pages/CaseStudy.jsx";
import Experiments from "./pages/Experiments.jsx";
import Article from "./pages/Article.jsx";
import About from "./pages/About.jsx";
import Resume from "./pages/Resume.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="/experiments" element={<Experiments />} />
          <Route path="/experiments/:slug" element={<Article />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
