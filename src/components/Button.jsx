import styled from 'styled-components'

const Button = styled.button.attrs({
  type:"submit", 
})`
  background: #0184db;
  border: 2px solid #0099FF;
  border-radius: 5px;
  color: #FDFDFD;
  font-size: 17px;
  padding: 15px 50px;
  margin-top: 2em;
  display: block;
  cursor: pointer;

  :hover {
    background: #0099FF;
  }
 
`
export default Button