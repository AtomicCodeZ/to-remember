import styled from "styled-components";

export const Container = styled.header`
  max-width: 1260px;

  margin: 0 auto;
  padding: 3rem 0;

  display: flex;
  justify-content: space-between;

  .logo {
    &__title {
      font-weight: bold;
      font-size: 2.5rem;

      color: var(--blue);
    }
  }

  .link-group {
    display: flex;
    align-items: center;
    gap: 4.5rem;

    .navigation {
      display: flex;
      align-items: center;
      gap: 3.125em;

      &__link {
        color: var(--white);

        font-size: 1.125rem;
        font-weight: 500;

        transition: color 0.1s linear;

        &:hover {
          color: var(--blue);
        }
      }
    }

    .search {
      width: 18.25rem;
      height: 3rem;

      &__input {
        width: 100%;
        height: 100%;

        padding: 0.5rem 1.5rem;

        background: var(--dark-200);
        color: var(--white);

        border: 0;
        border-radius: 30px;

        font-size: 1.125rem;
        font-weight: 500;

        transition: outline 0.05s linear;

        &::placeholder {
          color: var(--grey);
        }

        &:focus {
          outline: 2px solid var(--blue);
        }
      }
    }
  }
`;
