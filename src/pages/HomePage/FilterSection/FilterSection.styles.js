import styled from 'styled-components';

export const FilterSectionContainer = styled.section`
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.BorderColor};

  h2 {
    font-size: 1.125rem;
    font-weight: 600;
  }
`;

export const FilterArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: .75rem;
  padding: .75rem 0;

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
  span {
    display: inline-block;
    cursor: pointer;
    font-size: .875rem;
  }
`;