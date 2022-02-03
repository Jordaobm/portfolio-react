import styled from "styled-components";
import { Emoji, ReactSVG, ReactWithShadow } from "../../assets/icons";
import { COLORS } from "../../styles/colors";

export const Footer = () => {
  return (
    <Container>
      <Content>
        <h1>Veja mais no github e linkedin</h1>
        <figure>
          <ReactWithShadow />
        </figure>

        <a
          href={process.env.NEXT_PUBLIC_REACT_APP_LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
        >
          <Emoji />
          <p>Linkedin</p>
        </a>
      </Content>
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

  height: 225px;
  border-radius: 10px;
  display: flex;
  max-width: 1230px;
  margin: 0 auto;
  margin-top: 160px;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  padding: 59px 64px;

  h1 {
    text-align: left;
    font-weight: 600;
    font-size: 40px;
    line-height: 50px;
    color: ${COLORS.black};
    max-width: 379px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: baseline;
    height: 300px;
    justify-content: center;
  }

  position: relative;

  a {
    width: 293px;
    height: 96px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border: 0;
    background-color: ${COLORS.blue};
    cursor: pointer;

    transition: 0.2s;
    border-radius: 10px;

    font-size: 20px;
    line-height: 31px;
    color: ${COLORS.bluetext};

    &:hover {
      filter: brightness(0.95);
    }

    @media (max-width: 1000px) {
      justify-content: flex-start;
      padding: 10px;
    }
  }

  figure {
    @keyframes reactAnimation {
      0% {
        transform: translateY(-25px);
      }

      100% {
        transform: translateY(10px);
      }
    }

    position: absolute;
    left: 40%;
    top: -12%;
    animation: reactAnimation 10s ease 0s infinite alternate-reverse forwards;

    @media (max-width: 1150px) {
      left: 50%;
      svg {
        width: 200px;
        left: 80%;
      }
    }

    @media (max-width: 1000px) {
      right: 0%;
      top: -5%;
      svg {
        width: 400px;
      }
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;
