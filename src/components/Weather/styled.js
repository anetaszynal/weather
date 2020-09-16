import styled from "styled-components";

export const Title = styled.h2`
  margin: 20px 20px;
  font-size: 20px;
  color: #192a56;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  
    @media(max-width: 730px){
    grid-template-columns: 1fr;
    }
`;

export const Paragraph = styled.p`
   margin: 10px;
   font-size: 18px;
   font-weight: bold;
   color: #192a56;
   line-height: 1.5;
   text-align: center;
   
   @media(min-width: 730px){
    text-align: left;
    }
`;

export const Image = styled.img`
  max-width: 70px;
  display: block;
  margin: auto;
`

