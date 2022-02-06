import styled from "styled-components";
import { Like, ReactSVG } from "../../assets/icons";
import { useRepositories } from "../../context/repositories";

import { COLORS } from "../../styles/colors";

export const Description = () => {
  const { repositories } = useRepositories();

  return (
    <Container>
      <Content>
        <AboutMe>
          <Tag>
            <div>
              <Like />
            </div>

            <p>Espero que goste!</p>
          </Tag>

          <h1>
            Desenvolvedor <br /> ReactJS e React-Native
          </h1>

          <p>
            Com um pouco mais de 1 ano de carreira de desenvolvimento, <br />
            estou me aprofundando cada vez mais nas tecnologias <br />
            ReactJS e React-Native, em TypeScript e JavaScript.
          </p>

          <Actions>
            <Button
              style={{ background: `${COLORS.green}` }}
              href={process.env.NEXT_PUBLIC_REACT_APP_GITHUB_URL}
              target="_blank"
              rel="noreferrer"
            >
              Github
            </Button>

            <Button href="#about">Saiba mais ↓</Button>
          </Actions>
        </AboutMe>

        <Card>
          <section>
            <header>
              <p>Portfólio</p>
              <p>Desenvolvedor</p>
            </header>

            <main>
              <h2>{repositories?.length} Repositórios</h2>
              <p>Conheça um pouco mais sobre meu trabalho</p>
            </main>

            <footer>
              <img
                src={`${process.env.NEXT_PUBLIC_REACT_APP_GITHUB_URL}.png`}
                alt="Foto de Jordão"
              />

              <div>
                <h5>Jordão B. Massariol</h5>
                <p>Desenvolvedor</p>
              </div>
            </footer>
          </section>

          <figure>
            <ReactSVG />
          </figure>
        </Card>
      </Content>
    </Container>
  );
};

const Container = styled.main`
  width: 100%;
  margin-top: 80px;
  overflow: hidden;
  padding: 0 2%;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  max-width: 1230px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1180px) {
    flex-direction: column;
    gap: 60px;
  }
`;

export const AboutMe = styled.div`
  width: 40%;

  @media (max-width: 1180px) {
    width: 100%;
  }

  h1 {
    margin-top: 30px;
    margin-right: 10px;
    font-weight: 600;
    font-size: 40px;
    line-height: 46px;

    color: ${COLORS.black};
  }

  > p {
    margin-top: 18px;

    font-size: 14px;
    line-height: 22px;

    color: ${COLORS.bluetext};
  }
`;
export const Tag = styled.div`
  height: 50px;
  width: fit-content;
  background-color: ${COLORS.grayopacity15};
  display: flex;
  padding: 7px 22px 7px 7px;
  align-items: center;
  border-radius: 1000px;
  gap: 11px;

  div {
    background-color: ${COLORS.white};
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
  }

  p {
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;

    color: ${COLORS.grayopacity40};
  }
`;
export const Actions = styled.div`
  margin-top: 30px;
  display: flex;
`;
export const Button = styled.a`
  flex: 1;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const Card = styled.div`
  position: relative;

  background-color: ${COLORS.blue};
  border-radius: 10px;
  width: 60%;
  height: 386px;
  max-width: 703px;
  padding: 46px;

  display: flex;

  @media (max-width: 1180px) {
    width: 100%;
    max-width: 100%;
  }

  section {
    width: 50%;
    min-width: 305px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    header {
      display: flex;
      gap: 30px;

      p {
        font-size: 12px;
        line-height: 15px;
        color: ${COLORS.black};
      }
    }

    main {
      h2 {
        font-weight: 600;
        font-size: 36px;
        line-height: 38px;

        color: ${COLORS.black};
      }

      p {
        font-weight: 300;
        font-size: 20px;
        line-height: 20px;
        color: ${COLORS.black};
      }
    }

    footer {
      display: flex;
      align-items: center;
      gap: 10px;

      img {
        border-radius: 100%;
        width: 40px;
        height: 40px;
      }

      h5 {
        font-weight: 800;
        font-size: 16px;
        line-height: 15px;

        color: ${COLORS.black};
      }

      p {
        font-weight: 300;
        font-size: 12px;
        line-height: 15px;

        color: ${COLORS.black};
      }
    }
  }

  @keyframes react {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  figure {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    left: -35px;

    animation: react 60s linear 0s infinite normal forwards;

    @media (max-width: 1280px) {
      width: 50%;
      position: relative;
      left: 0px;
    }

    @media (max-width: 630px) {
      position: absolute;

      width: 100%;
      height: 100%;
      opacity: 0.1;

      top: 0%;
      left: 0%;
    }
  }
`;
