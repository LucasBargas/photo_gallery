import styled from 'styled-components';

const SearchPhotosInput = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: .75rem;
  position: relative;
  max-width: 480px;

  @media (max-width: 480px) {
    max-width: none;
  }

  input {
    display: block;
    width: 100%;
    max-width: 480px;
    border-radius: 4px;
    padding: 0 2.2rem 0 2.6rem;
    height: 33px;
    font-size: .875rem;

    @media (max-width: 480px) {
      max-width: none;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 33px;
    background: transparent;

    &#loupeBtn {
      left: 0;
      cursor: initial;
      width: 40px;
    }

    &#clearBtn {
      right: 0;
      width: 35px;
    }

    svg {
      font-size: 1.15rem;
      color: ${({ theme }) => theme.colors.DarkIcon};
    }
  }
`;

export default SearchPhotosInput;
