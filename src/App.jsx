import React, { useState, useEffect } from 'react';
import { Header, Intro, About, AutoNameing, Services, ProjectCard, AutoNameing2, TestiApp, Form, SwirlCursor, ThreeComp, Loader } from './components'


const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data or any asynchronous operation
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 4000); // Simulating 3 seconds of loading time

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <SwirlCursor />
          <Header />
          <Intro />
          <About />
          <AutoNameing />
          <Services />
          <ProjectCard />
          <AutoNameing2 />
          <TestiApp />
          <Form />
        </div>
      )}


    </div>
  )
}

export default App