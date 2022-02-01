import { COLORS } from "../../styles/colors";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { CommentIcon } from "../../assets/icons";

export const Comments = () => {
  const [showComment, setShowComment] = useState("");

  const handleScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;
    setShowComment(scrolled >= 0.8 ? "showComment" : "hideComment");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <Content scrollPosition={showComment}>
        <CommentIcon />

        <p>
          Comecei a pouco tempo minha jornada para ser um UI Designer... Este
          foi o primeiro conteúdo que adquiri de forma paga, e digo que valeu
          cada centavo, é bem explicadinho e de fácil leitura e compreensão!
        </p>

        <div>
          <p>
            <strong>Jordão</strong> • Desenvolvedor
          </p>
        </div>
      </Content>
    </Container>
  );
};

const Container = styled.header`
  width: 100%;
`;

interface ContentProps {
  scrollPosition: string;
}

const Content = styled.div<ContentProps>`
  @keyframes showComment {
    0% {
      opacity: 0;
      transform: translateY(250px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes hideComment {
    0% {
      opacity: 1;
      transform: translateY(0);
    }

    100% {
      opacity: 0;
      transform: translateY(250px);
    }
  }
  opacity: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1230px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  gap: 14px;
  animation: ${(props) => props?.scrollPosition} 0.5s ease 0s 1 normal forwards;

  @media (max-width: 1050px) {
    flex-direction: column;
    gap: 20px;
  }

  > p {
    margin-top: 10px;
    width: 100%;
    max-width: 700px;

    font-size: 20px;
    line-height: 31px;
    text-align: center;
    color: ${COLORS.black};
  }
`;
