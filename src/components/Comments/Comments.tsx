/* eslint-disable react/no-unescaped-entities */
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
    setShowComment(scrolled >= 0.5 ? "showComment" : "hideComment");
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
          Desde 2020 na área de desenvolvimento, meu primeiro contato com
          ReactJS ocorreu em NLW's da Rocketseat e me surpreendi com a
          biblioteca e também com o poder do TypeScript .
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

const Container = styled.main`
  width: 100%;
  padding: 0 2%;
  border-bottom: 1px solid rgba(17, 17, 17, 0.1);
  height: 266px;
  @media (max-width: 768px) {
    position: relative;
    top: -350px;
    height: auto;
    padding-bottom: 60px;
  }
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
