import {
  CircleDesign,
  CircleDiv,
  ContentContainer,
  DotContiner,
  ParaContainer,
} from "./AboutMe";
import { Route, Link, useLocation } from "wouter";

const handleNavigateToGitHub = () => {
  window.location.href = "https://github.com/prab002";
};

export function AboutMEdata() {
  return (
    <ContentContainer>
      <DotContiner>
        <CircleDiv>
          <CircleDesign color="#ff605c" />
          <CircleDesign color="#ffbd44" />
          <CircleDesign color="#00ca4e" />
        </CircleDiv>
      </DotContiner>
      <h3>About me</h3>
      <ParaContainer>
        <p>
          🚀 Hi there! I'm Prabhanjan Sharma, a passionate MERN (MongoDB,
          Express.js, React, Node.js) stack developer on a journey to create
          seamless and dynamic web applications.
        </p>
        <Link to="/rs">transper pae</Link>
        <button onClick={handleNavigateToGitHub}>GITHUB</button>
      </ParaContainer>
    </ContentContainer>
  );
}
