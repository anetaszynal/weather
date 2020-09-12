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
  grid-gap: 20px;
  
      @media(max-width: 730px){
        grid-template-columns: 1fr;
        }
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  background-color: transparent;
  border: 1px solid #192a5691;
  border-radius: 8px;
  box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);
    
      &::placeholder {
      color: #192a56;
      }
  
      @media(max-width: 730px){
        font-size: 15px;
        }
`;

export const Button = styled.button`
  border: 1px solid #192a5691;
  border-radius: 8px;
  width: 40px;
  height: 40px;
  box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);
  background-color: transparent;
  
      @media(max-width: 730px){
        margin-bottom: 10px;
        width: 100%;
        }
`;