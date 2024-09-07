import logo from '/react.svg'
import { useState, useEffect } from 'react'
// import classes from './Header.module.css'
import { styled } from 'styled-components'


const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #282c34;
  padding: 10px 20px;
  color: white;
`

const Header = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000)

    return () => {
      clearInterval(interval)
      console.log('cleaning...')
    }
  }, [])
  
  
  return (
    <HeaderContainer>
      <img src={logo} alt="Logotype" />
      
      <p>Время {now.toLocaleTimeString()}</p>
      <p>Дата {now.toLocaleDateString()}</p>
    </HeaderContainer>
  ) 
}

export default Header