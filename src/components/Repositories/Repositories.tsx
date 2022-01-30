import { useEffect, useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import { Repository } from "../Repository/Repository";
export const Repositories = () => {
  const [showText, setShowText] = useState("");

  const handleScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;
    setShowText(scrolled > 0 ? "showRepositories" : "hideRepositories");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const repositories = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
  ];

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
        {repositories?.map((e) => (
          <Repository key={e?.id} id={e?.id} />
        ))}
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
  animation: ${(props) => props?.scrollPosition} 0.5s ease 0s 1 normal forwards;

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

const CarouselContainer = styled.div`
  width: 100%;
  background-color: ${COLORS.blueopacity10};
  display: flex;
  gap: 20px;
`;
