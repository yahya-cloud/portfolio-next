"use client";

import Header from "./components/Header/Header";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* Experience */}
      <Experience />

      {/* Education */}
      <Education />

      {/* Projects */}
      <Projects />

      {/* Footer */}
      <Footer />
    </div>
  );
}
