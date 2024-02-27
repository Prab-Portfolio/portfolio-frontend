import styled from "styled-components";

export const CardWrapper = styled.ul`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-wrap: wrap;
  padding: 12px;
`;

export const Ttitle = styled.span`
  font-size: 3rem;
  font-weight: 800;
  font-family: PoppinBold;
`;

export const CARDLSIT = styled.li`
  margin: 12px;
  list-style: none;
`;

export const CardDesign = styled.div`
  border-radius: 35px;
  border: 10px solid #fff;
  height: 460px;
  width: 100%;
  max-width: 280px;
  background: #fff;
`;

export const InnerImage = styled.img`
  width: 280px;
  height: 280px;
  border-radius: 30px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const CardTitle = styled.span`
  position: relative;
  display: block;
  width: 100%;
  margin: 12px 7px;
  font-size: 1.5rem;
  font-family: sans-serif;
  font-weight: 600;
`;

export const DiscriptionContainer = styled.div`
  margin: 0px 6px;
  width: 270px;
  font-size: small;
  overflow: scroll;
  height: 100px;
  scrollbar-width: thin; /* For Firefox */
  scrollbar-color: transparent transparent; /* For Firefox */

  &::-webkit-scrollbar {
    width: 0; /* For Chrome, Safari, and Opera */
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent; /* For Chrome, Safari, and Opera */
  }
`;
