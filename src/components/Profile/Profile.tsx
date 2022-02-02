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
            Autodidata, criador de conteúdo, professor, atua como UI Designer há
            mais de 8 anos, já passou por inúmeros projetos freelancer, e hoje
            tem um Studio de design.
          </p>

          <figure>
            <InstagramIcon />
            <p>jordaobeghettomassariol</p>
          </figure>
        </ProfileText>
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
  height: 100%;
  display: flex;
  max-width: 1230px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  gap: 120px;
`;

interface Animation {
  showProfilePicture?: string;
  showProfileText?: string;
}

export const ProfileImage = styled.section<Animation>`
  display: flex;
  flex: 1;
  height: 100%;

  justify-content: end;

  div {
    width: 500px;
    height: 500px;
    border-radius: 100%;

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
  height: 100%;
  flex-direction: column;
  text-align: left;
  justify-content: center;

  main {
    p {
      font-size: 16px;
      line-height: 31px;
      color: ${COLORS.bluetext};
    }
    h1 {
      margin-top: 16px;
      font-weight: 600;
      font-size: 48px;
      line-height: 31px;
      color: ${COLORS.black};
      font-weight: 600;

      span {
        color: ${COLORS.blue};
        position: relative;
        left: -12px;
      }

      strong {
        position: relative;
        left: -12px;
        font-weight: 600;
      }
    }

    h3 {
      margin-top: 18px;
      font-size: 28px;
      line-height: 25px;
      font-weight: 400;
      color: ${COLORS.bluetext};
    }
  }

  p {
    margin-top: 50px;
    font-family: Inter;
    font-size: 16px;
    line-height: 30px;

    color: ${COLORS.bluetext};
  }

  figure {
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
