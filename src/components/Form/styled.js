import styled from "styled-components";

export const Title = styled.h2`
  margin: 20px 0;
  font-size: 24px;
  color: #192a56;
`;

export const Paragraph = styled.p`
  margin: auto;
  font-size: 20px;
  font-weight: bold;
  color: #192a56;
`;

export const Content = styled.form`
  padding: 15px 20px 0px;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 10px;
  
      @media(max-width: 730px){
        grid-template-columns: 1fr;
        }
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 12px;
  background-color: #192a56;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 0px 4px 0px rgb(22 20 147);
    
      &::placeholder {
      color: white;
      font-weight: bold;
      font-size: 15px;
      }
      
       &:hover{
      filter: brightness(150%);
      }
`;

export const Button = styled.button`
  border-radius: 8px;
  width: 40px;
  height: 40px;
  box-shadow: 0px 0px 4px 0px rgb(22 20 147);
  background-color: #192a56;
  border: none;
  color: white;
  
       &:hover{
      filter: brightness(150%);
      }
  
      @media(max-width: 730px){
        margin-bottom: 10px;
        width: 100%;
        }
`;