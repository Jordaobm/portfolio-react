import { useEffect, useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import Carousel from "react-simply-carousel";
import { ForkIcon, StarIcon } from "../../assets/icons";

export const Repositories = () => {
  const [showText, setShowText] = useState("");
  const [showCarousel, setShowCarousel] = useState("");
  const handleScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;
    console.log(scrolled);
    setShowText(scrolled > 0 ? "showRepositories" : "hideRepositories");
    setShowCarousel(scrolled >= 1 ? "showRepositories" : "hideRepositories");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <Container>
        <Content scrollPosition={showText}>
          <section>
            <p>Sobre meus repositórios</p>
            <h3>O que você vai encontrar?</h3>
          </section>

          <section>
            <p>
              Utilizo o espaço do meu github para centralizar todo o
              conhecimento que venho adquirindo desde que comecei a estudar
              programação. Lá terá uma variedade de repositórios, desde sites
              simples com intuíto apenas de treinar a escrita de código até
              aplicativos um pouco mais complexos que me auxiliam no dia a dia,
              como o <strong>Notes</strong> e o <strong>Finances</strong>.
            </p>
            <p>
              Dentro do meu github construo aplicações para reforçar conceitos
              básicos e avançados, como foi recentemente o caso do
              <strong>performance-react</strong> e <strong>tests-react</strong>.
            </p>
          </section>
        </Content>
      </Container>

      <CarouselContainer>
        <Carousel
          speed={1000 * 8}
          autoplay
          autoplayDirection="forward"
          activeSlideIndex={activeSlide}
          onRequestChange={setActiveSlide}
          itemsToShow={5}
          infinite
        >
          {Array.from({ length: 10 }).map((item, index) => (
            <RepositoryContainer key={index}>
              <Repository>
                <header>TypeScript</header>
                <h1>finances</h1>
                <p>
                  Finances é um aplicativo de gerenciamento de contas onde o
                  foco é simplificar a forma como você monta a sua planilha
                  financeira de gastos. A ideia aqui é manter o usuário sempre
                  informado do quanto gastou e quanto há entre seus gastos e
                  ganhos.
                </p>

                <footer>
                  <div>
                    <ForkIcon /> <p>3</p>
                  </div>
                  <div>
                    <StarIcon /> <p>29</p>
                  </div>
                </footer>
              </Repository>
            </RepositoryContainer>
          ))}
        </Carousel>
      </CarouselContainer>
    </>
  );
};

const Container = styled.header`
  width: 100%;
  margin-top: 60px;
  background-color: ${COLORS.blueopacity10};
  padding: 0 2%;
  padding-top: 120px;
  margin-top: 120px;
`;

interface ContentProps {
  scrollPosition: string;
}

const Content = styled.div<ContentProps>`
  @keyframes showRepositories {
    0% {
      transform: translateY(30px);
      opacity: 0;
    }

    100% {
      transform: translateY(-30px);
      opacity: 1;
    }
  }

  @keyframes hideRepositories {
    0% {
      transform: translateY(-30px);
      opacity: 1;
    }

    100% {
      transform: translateY(30px);
      opacity: 0;
    }
  }
  width: 100%;
  display: flex;
  max-width: 1230px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  opacity: 0;
  animation: ${(props) => props?.scrollPosition} 1s ease 0s 1 normal forwards;

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

const CarouselContainer = styled.div``;

const RepositoryContainer = styled.div`
  border: 20px solid ${COLORS.blueopacity10};
`;

const Repository = styled.div`
  width: 388px;

  display: flex;
  flex-direction: column;
  background-color: ${COLORS.white};

  padding: 24px;
  header {
    display: flex;
    justify-content: end;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: ${COLORS.react};
  }

  h1 {
    margin-top: 24px;
    margin-bottom: 7px;
    font-weight: 600;
    font-size: 22px;
    line-height: 27px;
    color: ${COLORS.black};
  }

  > p {
    font-size: 12px;
    line-height: 15px;
    color: ${COLORS.grayopacity40};
  }

  footer {
    margin-top: 18px;
    display: flex;
    gap: 20px;

    div {
      gap: 5px;

      display: flex;
      align-items: center;
      svg {
        width: 20px;
        height: 20px;
      }

      p {
        font-weight: 600;
        font-size: 10px;
        line-height: 12px;

        color: ${COLORS.green};
      }
    }
  }
`;
