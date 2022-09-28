import React, { Suspense, lazy } from "react";

const About = lazy(() => import("../About/About"));
const Blog = lazy(() => import("../Blog/Blog"));
const Contact = lazy(() => import("../Contact/Contact"));
const Experience = lazy(() => import("../Experience/Experience"));
const Header = lazy(() => import("../Header/Header"));
const HeaderMain = lazy(() => import("../HeaderMain/HeaderMain"));
const Project = lazy(() => import("../Project/Project"));
const Service = lazy(() => import("../Service/Service"));

const Home = () => {
  return (
    <div>
      <Suspense fallback={<div></div>}>
        <Header />
        <HeaderMain />
        <About />
        {/* <Project /> */}
        {/* <Service /> */}
        <Experience />
        {/* <Blog /> */}
        <Contact />
      </Suspense>
    </div>
  );
};

export default Home;
