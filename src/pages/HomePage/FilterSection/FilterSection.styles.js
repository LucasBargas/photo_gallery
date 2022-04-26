import styled from 'styled-components';

export const FilterSectionContainer = styled.section`
  padding: 1rem 0;
  border-bottom: 1px solid black;

  h2 {
    font-size: 1.125rem;
  }
`;

export const FilterArea = styled.div`
  display: flex;
  gap: .75rem;
  padding-top: .5rem;

  label, input {
    display: inline-block;
  }

  label {
    display: flex;
    align-items: center;
    font-size: .875rem;
    cursor: pointer;

    input {
      margin-right: .25rem;
    }
  }
`;

export const ClearFilter = styled.div`
  padding-top: .25rem;

  span {
    display: inline-block;
    cursor: pointer;
    font-size: .875rem;
  }
`;