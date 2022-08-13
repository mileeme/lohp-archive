/** @jsxImportSource @emotion/react */

import {useState, useEffect} from "react";
import styled from "@emotion/styled/macro";
import Container from "../Container/Container";
import { theme } from "../../Styles/theme";
import { mq } from "../../Styles/tokens";
import Typography from "../Typography";
import Button from "../Button/Button";

export default function PageNotification() {
  const [remove, setRemove] = useState(false)
  const [display, SetDisplay] = useState();

  useEffect(() => {
    let deleteSection = setTimeout(() => {
      SetDisplay("none")
    }, 400)

    return () => clearTimeout(deleteSection);
  }, [remove])

  function handleDeleteClick() {
    setRemove(true);
  }
  const NotificationWrapper = styled.div`
    color: ${theme.palette.information.warning.dark};
    display: ${remove ? display : "block"};
    transition: all .3s ease-out;
    padding: 16px 0;
  `
  const NotificationHeader = styled.div`
    display: grid;
  `

  return (
      <Container css={{ background: theme.palette.background.yellowLight}} flex
      >
        <NotificationWrapper>

          <NotificationHeader>
            <Typography label="This is a prototype in progress" h4Bold />
            <Typography label="Links or buttons are not connected yet. To review responsive or transition behavior, resize the window, click buttons and inputs. Currently working on the guided search component. Updates to follow." h4 />
          </NotificationHeader>

          <Button
          variant='secondary'
          size='sm'
          label="Close notification"
          onClick={handleDeleteClick}
          css={{
            borderRadius: 50,
            marginTop: 8,
          }}
        />
        </NotificationWrapper>
      </Container>
  );
}
