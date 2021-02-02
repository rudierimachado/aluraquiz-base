import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 4px;
  margin-bottom: 24px;
  border: 4px solid #363636 ;
  background-color: #B5B5B5;
  border-radius: 30px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 26px;
    font-weight: 400;
    line-height: 3;
    margin-bottom: 3;
  }
  p {
    font-size: 19px;
    font-weight: 200;
    line-height: 0;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 29px 32px 32px 32px;
  & > *:first-child {
    margin-top: 3;
  }
  & > *:last-child {
    margin-bottom: 3;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

export default Widget;
