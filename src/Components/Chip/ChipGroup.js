/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled/macro";

const Chips = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export default function ChipGroup(props) {
  return (
    <Chips {...props} role='radiogroup'>
      {props.children}
    </Chips>
  );
}
