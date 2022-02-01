import styled from "styled-components";
import { repositories } from "../../services/Repositories";
import { Repository } from "../Repository/Repository";

export const Carousel = () => {
  const defaultWidth = {
    width: 380 + (repositories?.length - 1) * 410,
    items: repositories?.length,
  };

  return (
    <Container>
      <FirstCarousel defaultWidth={defaultWidth}>
        {repositories?.map((repository) => (
          <Repository key={repository?.id} repository={repository} />
        ))}
      </FirstCarousel>
      <SecondCarousel defaultWidth={defaultWidth}>
        {repositories?.map((repository) => (
          <Repository key={repository?.id} repository={repository} />
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

  @keyframes firstCarousel {
    0% {
      transform: translateX(${(props) => props?.defaultWidth?.width}px);
    }

    100% {
      transform: translateX(0px);
    }
  }

  animation: firstCarousel ${(props) => props?.defaultWidth?.items * 7}s linear
    0s infinite normal forwards;
`;

const SecondCarousel = styled.div<CarouselProps>`
  display: flex;
  gap: 20px;
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

  animation: secondCarousel ${(props) => props?.defaultWidth?.items * 7}s linear
    0s infinite normal forwards;
`;
