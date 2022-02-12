import { Dropdown } from "react-bootstrap";
import styled from "styled-components";

export const UserDropdownStyled = styled(Dropdown)`
  .dropdown-toggle::after {
    display: none;
  }

  .dropdown-item {
    padding: 0;

    .btn {
      font-weight: 300;
      color: #666;
      font-size: 1rem;
    }
  }
`;
