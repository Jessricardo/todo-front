import styled from 'styled-components';

export const TaskContainer = styled.div`
  width: 100%;
  padding: 8px 16px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;
export const CheckBox = styled.div`
  display: inline-flex;
  width: 12px;
  border: 1px solid #d2d2d2;
  height: 12px;
  cursor: pointer;
  border-radius: 3px;
  transition: all .25s ease;
  opacity: ${({ hover }) => hover ? '1' : '0'};
`;
export const Check = styled.img`
  transition: all .25s ease;
  width: 10px;
  opacity: ${({ checked }) => checked ? '1' : '0'};
`;
export const Remove = styled.div`
  display: inline-flex;
  font-size: 16px;
  font-family: Avenir;
  color: #d2d2d2;
  transition: all .25s ease;
  opacity: ${({ hover }) => hover ? '1' : '0'};
`;
export const Text = styled.div`
  display: inline-flex;
  font-size: 16px;
  transition: all .25s ease;
  width: 100%;
  padding-left: 12px;
  font-family: Avenir-Light;
  color: ${({ checked }) => checked ? '#adabab' : 'black'};
  text-decoration: ${({ checked }) => checked ? 'line-through' : 'none'};
`;
