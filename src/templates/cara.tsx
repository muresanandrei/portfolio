import React, {useState} from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"

const Cara = () => {
  const [position, setPosition] = useState(false);

  return (
  <Layout>
    <a href="javascript:;" style={{'position':'fixed', 'top':'20px', 'left': '20px', 'zIndex':99999}} onClick={() => setPosition((s) => !s)}>Change view to {!position ? 'horizontal' : 'vertical'}</a>
    <Parallax pages={!position ? 5 : 4} horizontal={position}>
      <Hero offset={0} factor={1} />
      <Projects offset={1} factor={!position ? 2 : 1} />
      <About offset={!position ? 3 : 2} factor={1} />
      <Contact offset={!position ? 4 : 3} factor={1} />
    </Parallax>
  </Layout>
)
}

export default Cara
