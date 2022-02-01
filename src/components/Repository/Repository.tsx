import styled from "styled-components";
import { ForkIcon, StarIcon } from "../../assets/icons";
import { COLORS } from "../../styles/colors";
import { IRepository } from "../../types/Repository";

interface RepositoryProps {
  repository: IRepository;
}

export const Repository = ({ repository }: RepositoryProps) => {
  return (
    <Container href={repository?.html_url} target="_blank" rel="noreferrer">
      <header>{repository?.language}</header>
      <h1>{repository?.name}</h1>
      <p>{repository?.description}</p>

      <footer>
        <div>
          <ForkIcon /> <p>{repository?.forks}</p>
        </div>
        <div>
          <StarIcon /> <p>{repository?.watchers}</p>
        </div>
      </footer>
    </Container>
  );
};

const Container = styled.a`
  width: 388px;
  min-width: 388px;
  height: 234px;

  display: flex;
  flex-direction: column;
  background-color: ${COLORS.white};

  position: relative;

  padding: 24px;
  header {
    display: flex;
    justify-content: end;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: ${COLORS.react};
  }

  h1 {
    margin-top: 24px;
    margin-bottom: 7px;
    font-weight: 600;
    font-size: 22px;
    line-height: 27px;
    color: ${COLORS.black};
  }

  > p {
    font-size: 12px;
    line-height: 15px;
    color: ${COLORS.grayopacity40};

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }

  footer {
    position: absolute;
    bottom: 24px;
    display: flex;
    gap: 20px;

    div {
      gap: 5px;

      display: flex;
      align-items: center;
      svg {
        width: 20px;
        height: 20px;
      }

      p {
        font-weight: 600;
        font-size: 10px;
        line-height: 12px;

        color: ${COLORS.green};
      }
    }
  }
`;
