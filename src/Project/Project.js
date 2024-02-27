import { Container, Section } from "../Component";
import { Data } from "./Dummydata";
import {
  CARDLSIT,
  CardDesign,
  CardTitle,
  CardWrapper,
  DiscriptionContainer,
  InnerImage,
  Ttitle,
} from "./Project.styled";

export function Project() {
  const Datas = Data.map((project) => (
    <CARDLSIT key={project.id}>
      <CardDesign>
        <InnerImage src={project.imageUrl} />
        <CardTitle>{project.title}</CardTitle>
        <DiscriptionContainer>{project.description}</DiscriptionContainer>
      </CardDesign>
    </CARDLSIT>
  ));
  return (
    <>
      <Section>
        <Container>
          <Ttitle>PROJECT LIST</Ttitle>
          <CardWrapper>
            {Datas}
            {Datas}
            {Datas}
            {Datas}
          </CardWrapper>
        </Container>
      </Section>
    </>
  );
}
