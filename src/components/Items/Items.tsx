import styled from "styled-components";
import { FollowersIcon, GitIcon, StarsIcon } from "../../assets/icons";
import { COLORS } from "../../styles/colors";

export const Items = () => {
  return (
    <Container>
      <Content>
        <div>
          <GitIcon />
          <h3>
            Meus projetos <br /> pessoais
          </h3>
        </div>
        <div>
          <StarsIcon />
          <h3>Estrelas</h3>
        </div>
        <div>
          <FollowersIcon />
          <h3>Seguidores</h3>
        </div>
      </Content>
    </Container>
  );
};

const Container = styled.header`
  width: 100%;
  margin-top: 60px;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  max-width: 1230px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  padding: 0 2%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 60px;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 15px;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 10px;
      text-align: center;
    }
  }

  h3 {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;

    color: ${COLORS.black};
  }
`;
