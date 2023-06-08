import React from "react";
import Team3 from "../../components/Team3";
import MainLayout from "../../layouts/main";
import Video from "../../components/Video";
import Intro3 from "../../components/Intro3";
import Blogs3 from "../../components/Blogs3";
import AboutUs8 from "../../components/About-Us8";
import Services7 from "../../components/Services7";
import Testimonials1 from "../../components/Testimonials1";
import WorkWithoutFilter from "../../components/Work-Without-Filter";
import IntroWithVertical2 from "../../components/Intro-with-vertical2";

const Home7 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  });
  return (
    <MainLayout>
      {/* <IntroWithVertical2 /> */}
      {/* <Intro3 /> */}
      <div className="image-container">
        <img
          className="responsive-image"
          src="/assets/img/contentIndex/index01.png"
          alt="Image"
        />
      </div>
      <AboutUs8 />
      <Services7 />
      {/* <WorkWithoutFilter /> */}
      <Video />
      {/* <Team3 /> */}
      {/* <Testimonials1 bigTitle /> */}
      {/* <Blogs3 smallTitle /> */}

    </MainLayout>
  );
};

export default Home7;
