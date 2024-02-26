import styled from "styled-components";
import Theme from "../../Theme/Theme";

export const MacScreenWrapper = styled.div`
  color: #000;
`;

export const MacModelContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 20px;
  color: #000000;
`;

export const MacModelSmallContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(180deg);
  writing-mode: vertical-rl;
  gap: 12px;
  font-weight: 800;
  font-family: PoppinBold;

  hr {
    color: red;
    height: 100px;
     border: 2px solid ${Theme.colors.text};
  }

  span {

  }
`;
export const MacModelSmallLeft = styled.div`
/* width: 100%; */
/* max-width: 400px; */
  display: flex;
  /* align-items: start; */
  /* justify-content: space-between; */
  transform: rotate(180deg);
  writing-mode: vertical-rl;
  gap: 12px;
  font-weight: 800;
  font-family: PoppinBold;

  hr {
    color: red;
    height: 100px;
     border: 2px solid ${Theme.colors.text};
  }

  span {

  }
`;
