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

  const defaultWidth = {
    width: 401 + (repositories?.length - 1) * 410,
    items: repositories?.length,
  };

  return (
    <Container>
      <FirstCarousel defaultWidth={defaultWidth}>
        {repositories?.map((e) => (
          <Repository key={e?.id} id={e?.id} />
        ))}
      </FirstCarousel>
      <SecondCarousel defaultWidth={defaultWidth}>
        {repositories?.map((e) => (
          <Repository key={e?.id} id={e?.id} />
        ))}
      </SecondCarousel>
    </Container>
  );
};

const Container = styled.div``;

interface CarouselProps {
  defaultWidth: {
    width: number;
    items: number;
  };
}

const FirstCarousel = styled.div<CarouselProps>`
  display: flex;
  gap: 20px;
  /* background: red; */

  @keyframes firstCarousel {
    0% {
      transform: translateX(${(props) => props?.defaultWidth?.width}px);
    }

    100% {
      transform: translateX(0px);
    }
  }

  animation: firstCarousel ${(props) => props?.defaultWidth?.items * 4}s linear
    0s infinite normal forwards;
`;

const SecondCarousel = styled.div<CarouselProps>`
  display: flex;
  gap: 20px;
  /* background: yellow; */
  position: relative;
  top: -234px;

  @keyframes secondCarousel {
    0% {
      transform: translateX(0px);
    }

    100% {
      transform: translateX(-${(props) => props?.defaultWidth?.width}px);
    }
  }

  animation: secondCarousel ${(props) => props?.defaultWidth?.items * 4}s linear
    0s infinite normal forwards;
`;
