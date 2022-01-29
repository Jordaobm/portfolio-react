import styled from "styled-components";
import { Linkedin } from "../../assets/icons";
import { COLORS } from "../../styles/colors";
export const Header = () => {
  return (
    <Container>
      <Content>
        <p>
          <FirsName>Jordão</FirsName>
          <LastName>
            B<Bullet>.</Bullet> Massariol
          </LastName>
        </p>

        <a
          href={process.env.NEXT_PUBLIC_REACT_APP_LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin />
          <p>jordão-beghetto-massariol-9a9800105</p>
        </a>
      </Content>
    </Container>
  );
};

const Container = styled.header`
  width: 100%;
  height: 80px;
  padding: 0 2%;
  border-bottom: 1px solid ${COLORS.border};
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  max-width: 1230px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  height: 80px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  @media (max-width: 660px) {
    justify-content: center;

    a {
      display: none;
    }
  }
`;

const Bullet = styled.span`
  color: ${COLORS.blue};
  position: relative;
`;

const FirsName = styled.span`
  font-weight: 800;
  font-size: 28px;
  line-height: 34px;
  color: #141414;

  color: ${COLORS.black};
`;

const LastName = styled.span`
  left: 8px;

  position: relative;

  font-size: 28px;
  line-height: 34px;

  color: ${COLORS.black};
`;
