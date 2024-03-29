import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from "./components/Header";

import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import MusicPage from "./pages/MusicPage";


function App() {
  return (
    <>
    <Container fluid className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/projects" element={<ProjectsPage />}/>
          <Route path="/contact" element={<ContactPage />}/>
          <Route path="/music" element={<MusicPage />}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </Container>
    </>
  );
}

export default App;
