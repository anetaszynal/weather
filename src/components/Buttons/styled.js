import styled from "styled-components";

export const Paragraph = styled.p`
  margin: 0;
  padding: 10px 0 10px 20px;
  font-size: 20px;
  font-weight: bold;
  color: #192a56;
`;

export const Wrapper = styled.div`
  margin: 0;
  padding: 10px 20px 10px 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  
   @media(max-width: 730px){
        grid-template-columns: 1fr;
        }
`;

export const Button = styled.button`
  padding: 10px;
  border: none;
  background-color: #192a56;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  box-shadow: 0px 0px 4px 0px rgb(22 20 147);
  
    &:hover{
      filter: brightness(150%);
    }
`;