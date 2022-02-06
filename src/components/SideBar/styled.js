import styled from "styled-components";

export const SideBarStyled = styled.div`
  .sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 100; /* Behind the navbar */
    padding: 40px 0 0; /* Height of navbar */
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
  }

  .sidebar .nav-item button {
    font-weight: 500;
    color: #333;
    font-size: 0.85rem;
  }

  .sidebar .nav-item button.active {
    color: #2b5f78;
  }
`;
