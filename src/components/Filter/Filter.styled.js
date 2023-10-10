import styled from 'styled-components';

// Define un componente de estilo para el input
export const FilterInput = styled.input`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-color: dodgerblue;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;
