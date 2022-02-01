import { COLORS } from "../../styles/colors";
import styled from "styled-components";
import { useEffect, useState } from "react";

export const FeaturedRepositories = () => {
  const [showFeatured, setShowFeatured] = useState("");

  const handleScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;
    setShowFeatured(scrolled >= 0.9 ? "showFeatured" : "hideFeatured");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <Content scrollPosition={showFeatured}>
        <Bloco>
          <h1>1.</h1>
          <p>tests-react</p>
          <div>
            <span></span>
          </div>
        </Bloco>
        <Bloco>
          <h1>2.</h1>
          <p>performance-react</p>
          <div>
            <span></span>
          </div>
        </Bloco>
        <Bloco>
          <h1>3.</h1>
          <p>finances</p>
          <div>
            <span></span>
          </div>
        </Bloco>
      </Content>
    </Container>
  );
};

const Container = styled.header`
  width: 100%;
  position: relative;
  top: -180px;
`;

interface ContentProps {
  scrollPosition: string;
}

const Content = styled.div<ContentProps>`
  @keyframes showFeatured {
    0% {
      opacity: 0;
      transform: translateX(250px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes hideFeatured {
    0% {
      opacity: 1;
      transform: translateX(0);
    }

    100% {
      opacity: 0;
      transform: translateX(250px);
    }
  }
  opacity: 0;
  width: 100%;
  display: flex;
  max-width: 1230px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  animation: ${(props) => props?.scrollPosition} 0.5s ease 0s 1 normal forwards;

  gap: 250px;

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

const Bloco = styled.div`
  width: 100%;
  h1 {
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    color: ${COLORS.blue};
  }

  p {
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    color: ${COLORS.black};
  }
  div {
    margin-top: 15px;
    width: 100%;
    height: 2px;
    background-color: ${COLORS.white};

    span {
      width: 20%;
      height: 3px;
      position: relative;
      top: -1px;
      background-color: ${COLORS.blue};
      display: block;
    }
  }
`;