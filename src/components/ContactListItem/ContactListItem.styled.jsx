import styled from 'styled-components';

export const ListItemStyle = styled.li`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
`;

export const NameContactStyle = styled.p`
  margin-right: 10px;
`;

export const ButtonContactStyle = styled.button`
  padding: 5px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  font-size: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: 400;
  background-color: gold;

  :hover {
    background-color: royalblue;
    transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
