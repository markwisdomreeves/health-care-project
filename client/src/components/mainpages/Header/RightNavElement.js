import styled from 'styled-components';



export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 580px) {
    flex-flow: column nowrap;
    background-color: #0c5d69;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 345px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 999;

    li {
      color: #fff;
    }

    @media (max-width: 400px) {
      width: 320px;
    }
}
`;

export const Icons = styled.i`
  font-size: 2rem;
  margin-bottom: 2rem;
  padding: 1rem;
  font-weight: 700;
  cursor: pointer;
`;
