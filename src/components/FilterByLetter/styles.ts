import styled from "styled-components";

export const Container = styled.section`
  max-width: 1260px;

  margin: 0 auto;
  padding-bottom: 1.9375rem;

  display: flex;
  justify-content: space-between;
  gap: 1.75rem;

  overflow-x: scroll;

  cursor: pointer;

  &::-webkit-scrollbar {
    height: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: var(--dark-200);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--blue);
    border-radius: 0.25rem;
  }

  .filter-link {
    color: var(--white);

    padding: 0.375rem 2.4rem;

    border: 1px solid var(--dark-200);
    border-radius: 2rem;

    &--active {
      background: var(--dark-200);

      padding: 0.375rem 1.25rem;
    }
  }
`;
