// Components - Home
import Hero from './components/Hero';
import Projects from './components/Projects';
import Expertise from './components/Expertise';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Technologies from './components/Technologies';
import Description from './components/Description';
import Resume from './components/Resume';

// Dependencies and Libraries
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NextUIProvider} from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={[
            <Hero/>,
            <Description/>,
            <Expertise/>,
            <Technologies/>,
            <Experience/>,
            <Projects/>
          ]}/>
          <Route path='resume' element={[
            <Resume/>
          ]}/>
          <Route path='projects' element={[
            
          ]}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </NextUIProvider>
  );
}

export default App;
