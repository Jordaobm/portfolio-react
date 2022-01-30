import { Repository } from "../Repository/Repository";
import styled from "styled-components";
import { useState } from "react";

export const Carousel = () => {
  const [repositories, setRepositories] = useState([
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
    {
      id: 7,
    },
  ]);

  return (
    <Container>
      <FirstCarousel>
        {repositories?.map((e) => (
          <Repository key={e?.id} id={e?.id} />
        ))}
      </FirstCarousel>
      <SecondCarousel>
        {repositories?.map((e) => (
          <Repository key={e?.id} id={e?.id} />
        ))}
      </SecondCarousel>
    </Container>
  );
};

const Container = styled.div``;

const FirstCarousel = styled.div`
  display: flex;
  gap: 20px;
  /* background: red; */

  @keyframes firstCarousel {
    0% {
      transform: translateX(0px);
    }

    100% {
      transform: translateX(2854.5px);
    }
  }

  animation: firstCarousel 30s linear 0s infinite normal forwards;
`;

const SecondCarousel = styled.div`
  display: flex;
  gap: 20px;
  /* background: yellow; */
  position: relative;
  top: -234px;

  @keyframes secondCarousel {
    0% {
      transform: translateX(-2854.5px);
    }

    100% {
      transform: translateX(0px);
    }
  }

  animation: secondCarousel 30s linear 0s infinite normal forwards;
`;
