import styled from "styled-components";
import Theme from "../../Theme/Theme";

export const AboutMeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 193px;
  padding: 12px 0 12px 12px;

  h3 {
    line-height: 0;
    text-align: center;
  }
`;

export const ContentContainer = styled.div`
  width: 312px;
  height: 195px;
  margin: 0 auto;
  background-color: ${Theme.colors.white};
  z-index: 1;
  padding: 10px;
`;

export const ParaContainer = styled.div`
  width: 300px;
`;

export const DotContiner = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`;

export const CircleDiv = styled.div`
  padding: 0;
`;

export const CircleDesign = styled.span`
  display: inline-block;
  align-items: center;
  width: 10px;
  height: 10px;
  padding: 1px;
  margin: 2px;
  border-radius: 50%;
  background-color: ${(props) => props.color || 'red'};
`;
