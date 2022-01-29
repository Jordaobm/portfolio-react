import styled from "styled-components";
import { COLORS } from "../../styles/colors";

export const Repositories = () => {
  return (
    <Container>
      <Content>
        <section>
          <p>Sobre meus repositórios</p>
          <h3>O que você vai encontrar?</h3>
        </section>

        <section>
          <p>
            Utilizo o espaço do meu github para centralizar todo o conhecimento
            que venho adquirindo desde que comecei a estudar programação. Lá
            terá uma variedade de repositórios, desde sites simples com intuíto
            apenas de treinar a escrita de código até aplicativos um pouco mais
            complexos que me auxiliam no dia a dia, como o{" "}
            <strong>Notes</strong> e o <strong>Finances</strong>.
          </p>
          <p>
            Dentro do meu github construo aplicações para reforçar conceitos
            básicos e avançados, como foi recentemente o caso do
            <strong>performance-react</strong> e <strong>tests-react</strong>.
          </p>
        </section>
      </Content>
    </Container>
  );
};

const Container = styled.header`
  width: 100%;
  margin-top: 60px;
  background-color: ${COLORS.blueopacity10};
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  max-width: 1230px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  padding: 120px 2%;

  @media (max-width: 1050px) {
    flex-direction: column;
    gap: 20px;
  }

  section {
    @media (max-width: 1050px) {
      width: 100%;
    }

    p {
      font-size: 16px;
      line-height: 19px;
      color: ${COLORS.bluetext};
      margin-bottom: 19px;
      max-width: 620px;
      @media (max-width: 1050px) {
        width: 100%;
        max-width: 100%;
      }
    }

    h3 {
      font-weight: 600;
      font-size: 48px;
      line-height: 58px;

      max-width: 339px;

      color: ${COLORS.black};

      @media (max-width: 1050px) {
        width: 100%;
        max-width: 100%;
      }
    }
  }

  section + section {
    p {
      font-size: 16px;
      line-height: 27px;
      color: ${COLORS.bluetext};
    }
  }
`;
