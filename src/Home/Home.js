import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Section } from "../Component";
import { HomeInner, HomeTitle, ModelConatine } from "./Home.styled";
import { TypeAnimation } from "react-type-animation";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { PrabMac } from "./Models/MacModel.Model";

export function Home() {
  return (
    <>
      <Section>
        <Container>
          <HomeInner>
            <HomeTitle>
              <TypeAnimation
                sequence={[
                  "PRABHANJAN",
                  2000,
                  "DEVELOPER",
                  2000,
                  "LEARNER",
                  2000,
                  () => {
                    console.log("Sequence completed");
                  },
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </HomeTitle>
            <ModelConatine>
              <PrabMac />
            </ModelConatine>
          </HomeInner>
        </Container>
      </Section>
    </>
  );
}
