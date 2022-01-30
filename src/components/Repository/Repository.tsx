import styled from "styled-components";
import { ForkIcon, StarIcon } from "../../assets/icons";
import { COLORS } from "../../styles/colors";

export const Repository = ({ id }: any) => {
  return (
    <Container id={id}>
      <header>TypeScript</header>
      <h1>finances {id}</h1>
      <p>
        Finances é um aplicativo de gerenciamento de contas onde o foco é
        simplificar a forma como você monta a sua planilha financeira de gastos.
        A ideia aqui é manter o usuário sempre informado do quanto gastou e
        quanto há entre seus gastos e ganhos.
      </p>

      <footer>
        <div>
          <ForkIcon /> <p>3</p>
        </div>
        <div>
          <StarIcon /> <p>29</p>
        </div>
      </footer>
    </Container>
  );
};

const Container = styled.div`
  width: 388px;
  min-width: 388px;

  display: flex;
  flex-direction: column;
  background-color: ${COLORS.white};

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
  }

  footer {
    margin-top: 18px;
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
