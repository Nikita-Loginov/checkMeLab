import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ModalProvider } from "./context/ModalContext";

import { IndexPage } from "./pages/IndexPage/IndexPage";
import { PolicyPage } from "./pages/PolicyPage/PolicyPage";
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";
import ContactModal from "./components/shared/Modals/ContactModal/ContactModal";

function App() {
  return (
    <Router>
      <ModalProvider>
        <div className="App min-h-screen bg-light">
          <Header />

          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/policy" element={<PolicyPage />} />
          </Routes>
          <Footer />

          <ContactModal />
        </div>
      </ModalProvider>
    </Router>
  );
}

export default App;
