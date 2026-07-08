import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";
import Hero from "./components/features/Hero/Hero";
import Skills from "./components/features/Skills/Skills";

function App() {
  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <div id="content">
          <Hero />
          <Skills />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
