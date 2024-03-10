import About from "./ui/components/about/About";
import Blog from "./ui/components/blog/Blog";
import Contact from "./ui/components/contact/Contact";
import Home from "./ui/components/home/Home";
import Navbar from "./ui/components/navbar/Navbar";
import Project from "./ui/components/projects/Project";
import Skills from "./ui/components/skills/Skills";

export default function Page() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Project></Project>
      <Contact></Contact>
      <Blog></Blog>
    </>
  );
}
