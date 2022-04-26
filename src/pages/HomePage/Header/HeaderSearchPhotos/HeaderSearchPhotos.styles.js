import styled from 'styled-components';

const SearchPhotosInput = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: .75rem;

  input {
    display: block;
    width: 100%;
    max-width: 400px;
    border: 1px solid black;
    border-radius: 4px;
    padding: .25rem .75rem;
    font-size: .875rem;
  }
`;

export default SearchPhotosInput;
