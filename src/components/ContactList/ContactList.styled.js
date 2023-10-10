import styled from 'styled-components';

export const ContactUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Estilos para los elementos li
export const ContactLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 5px;
  border-radius: 5px;
  gap: 20px;
`;

// Estilos para el botón de eliminar
export const DeleteButton = styled.button`
  background-color: red;
  font-size: 12px;
  font-weight: 600;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:active {
    background-color: #f44336;
  }
`;
