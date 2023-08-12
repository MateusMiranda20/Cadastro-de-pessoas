import styled from "styled-components";

export const ContainerItens = styled.div`
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.2) 0.24%,
    rgba(225, 255, 255, 0.9) 0.15%,
    rgba(255, 255, 255, 0.01) 100%
  );
  border-radius: 51px 51px 0px 0px;
  padding: 25px 25px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  height: 100vh;

  ${props =>
    props.isBlu &&
    `
        
        background: linear-gradient(
        157.44deg,
        rgba(255, 255, 255, 0.2) 0.24%,
        rgba(225, 255, 255, 0.9) 0.15%,
        rgba(255, 255, 255, 0.01) 100%

        max-height: calc(100vh - 170px);
    
    `}
`;

export default ContainerItens;
