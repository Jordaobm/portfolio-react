/* eslint-disable react/no-unescaped-entities */
import { COLORS } from "../../styles/colors";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { CommentIcon } from "../../assets/icons";

export const GoBack = () => {
  return (
    <Container>
      <Content>
        <a href="#top">Voltar ao topo ↑</a>
      </Content>
    </Container>
  );
};

const Container = styled.footer`
  width: 100%;
  padding: 0 2%;
  height: 100px;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  max-width: 1230px;
  margin: 0 auto;
  justify-content: end;
  align-items: center;
  text-align: center;

  a {
    font-size: 20px;
    line-height: 31px;
    color: ${COLORS.gray};
  }
`;
