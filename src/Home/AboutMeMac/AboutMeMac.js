import React from "react";
import { Route, Link, useLocation } from "wouter";
import { AboutMeContainer, ContentContainer, ParaContainer } from "./AboutMe";
import { AboutMEdata } from "./RoutePageForMac";
import { PDFViewer } from "./REsume";

export function AboutMeMac() {
  return (
    <>
      <AboutMeContainer>
        <Route path="/">
          <AboutMEdata />
        </Route>
        <Route path="rs">
          {/* <PDFViewer /> */}
        </Route>
      </AboutMeContainer>
    </>
  );
}
