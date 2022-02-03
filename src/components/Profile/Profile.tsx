import { useEffect, useState } from "react";
import styled from "styled-components";
import { InstagramIcon } from "../../assets/icons";
import { COLORS } from "../../styles/colors";

export const Profile = () => {
  const [showProfilePicture, setShowProfilePicture] = useState("");
  const [showProfileText, setShowProfileText] = useState("");

  const handleScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;
    setShowProfilePicture(
      scrolled >= 0.7 ? "showProfilePicture" : "hideProfilePicture"
    );
    setShowProfileText(scrolled >= 0.7 ? "showProfileText" : "hideProfileText");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <Content>
        <ProfileImage showProfilePicture={showProfilePicture}>
          <div>
            <img
              src={`${process.env.NEXT_PUBLIC_REACT_APP_GITHUB_URL}.png`}
              alt="Perfil"
            />
          </div>
        </ProfileImage>
        <ProfileText showProfileText={showProfileText}>
          <main>
            <p>Autor do conteúdo</p>
            <h1>
              Jordão B <span>.</span> <strong>Massariol</strong>
            </h1>
            <h3>Desenvolvedor</h3>
          </main>
          <p>
            Entusiasta de programação, estudante e dedicado, atuo como
            Desenvolvedor há quase 1 ano profissionalmente, já passei por
            inúmeros projetos empresariais e pessoais. Tenho cada vez mais
            vontade de crescer na área.
          </p>

          <a
            href={process.env.NEXT_PUBLIC_REACT_APP_INSTAGRAM}
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
            <p>jordaobeghettomassariol</p>
          </a>
        </ProfileText>
      </Content>
    </Container>
  );
};

const Container = styled.main`
  width: 100%;
  padding: 0 2%;
  margin-top: 80px;
  overflow: hidden;
  @media (max-width: 768px) {
    position: relative;
    top: -300px;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  max-width: 1230px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  gap: 120px;

  @media (max-width: 1120px) {
    gap: 0px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

interface Animation {
  showProfilePicture?: string;
  showProfileText?: string;
}

export const ProfileImage = styled.section<Animation>`
  display: flex;
  flex: 1;
  height: 400px;

  justify-content: end;

  @media (max-width: 1120px) {
    justify-content: center;
    align-items: center;
  }

  div {
    width: 400px;
    height: 400px;
    border-radius: 100%;

    @media (max-width: 1120px) {
      width: 300px;
      height: 300px;
    }

    @media (max-width: 768px) {
      width: 400px;
      height: 400px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 100%;
    }
  }

  @keyframes showProfilePicture {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes hideProfilePicture {
    0% {
      opacity: 1;
      transform: translateX(0);
    }

    100% {
      opacity: 0;
      transform: translateX(-100px);
    }
  }
  animation: ${(props) => props.showProfilePicture} 1s ease 0s 1 normal forwards;
`;

export const ProfileText = styled.section<Animation>`
  display: flex;
  flex: 1;
  height: 400px;
  flex-direction: column;
  text-align: left;
  justify-content: flex-start;

  @media (max-width: 768px) {
    text-align: center;
  }

  main {
    p {
      margin-top: 30px;
      font-size: 16px;
      line-height: 31px;
      color: ${COLORS.bluetext};

      @media (max-width: 1120px) {
        margin-top: 10px;
      }
      @media (max-width: 768px) {
        margin-bottom: 30px;
      }
    }
    h1 {
      margin-top: 16px;
      font-size: 48px;
      line-height: 31px;
      color: ${COLORS.black};
      font-weight: 600;

      @media (max-width: 1120px) {
        font-size: 36px;
      }

      span {
        color: ${COLORS.blue};
        position: relative;
        left: -12px;
        @media (max-width: 1120px) {
          left: -10px;
        }
      }

      strong {
        position: relative;
        left: -12px;
        font-weight: 600;
      }
    }

    h3 {
      margin-top: 50px;
      font-size: 28px;
      line-height: 25px;
      font-weight: 400;
      color: ${COLORS.bluetext};

      @media (max-width: 768px) {
        margin-top: 16px;
        font-size: 18px;
      }
    }
  }

  > p {
    margin-top: 20px;
    font-family: Inter;
    font-size: 16px;
    line-height: 30px;

    color: ${COLORS.bluetext};

    @media (max-width: 768px) {
      max-width: 500px;
    }
  }

  a {
    margin-top: 30px;
    display: flex;
    align-items: center;
    gap: 24px;
    p {
      margin: 0;
      font-weight: 600;
      font-size: 16px;
      line-height: 31px;
      color: ${COLORS.black};
    }

    @media (max-width: 768px) {
      text-align: center;
      justify-content: center;
      margin-top: 20px;
    }
  }

  @keyframes showProfileText {
    0% {
      opacity: 0;
      transform: translateX(100px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes hideProfileText {
    0% {
      opacity: 1;
      transform: translateX(0);
    }

    100% {
      opacity: 0;
      transform: translateX(100px);
    }
  }
  animation: ${(props) => props.showProfileText} 1s ease 0s 1 normal forwards;
`;
