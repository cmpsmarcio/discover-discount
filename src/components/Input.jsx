import styled from 'styled-components'

const Input = styled.input.attrs({
  type:"number", 
  step:"0.01"
})`
  width: 40%;
  font-size: 19px;
  padding: 10px 10px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  border-left: 3px solid #324bd6;

  :read-only {
    border-left: 3px solid #420068;
    background-color: #e7c1f3;
  }
`

export default Input