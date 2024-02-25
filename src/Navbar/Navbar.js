import {
  Button,
  Container,
  LinkAncorText,
  LinkText,
  Section,
} from "../Component";
import { StyledNavbar, StyledText } from "./Navbar.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function Navbar() {
  return (
    <>
      <Section>
        <Container>
          <StyledNavbar>
            <StyledText to="/">PRAB🔻</StyledText>
            <div>
              <LinkText to="/about">CONTACT</LinkText>
              <Button>Project</Button>
              <LinkText to="/about">ABOUT</LinkText>
              <LinkAncorText href="https://github.com/prab002" target="_blank">
                <FontAwesomeIcon icon={faGithub}  style={{ marginRight: '5px' }}/>
                GIT
              </LinkAncorText>
            </div>
          </StyledNavbar>
        </Container>
      </Section>
    </>
  );
}
