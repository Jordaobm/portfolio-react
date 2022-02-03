import styled from "styled-components";
import { COLORS } from "../../styles/colors";

export const Footer = () => {
  return (
    <Container>
      <Content> Footer</Content>
    </Container>
  );
};

const Container = styled.header`
  width: 100%;
  padding: 0 2%;
  margin-top: 80px;
  height: 400px;
  @media (max-width: 768px) {
    position: relative;
    top: -300px;
  }
`;

const Content = styled.div`
  width: 100%;
  background-color: ${COLORS.blue};

  height: 100%;
  display: flex;
  max-width: 1230px;
  margin: 0 auto;
  margin-top: 160px;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  gap: 120px;
`;
