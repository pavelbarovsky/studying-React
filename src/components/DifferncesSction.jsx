import { useState } from 'react'
import { diff } from '../data'
import Button from './Button/Button'

const DiffrencesSections = () => {
  
  const [contentType, setContentType] = useState(null)

  const clickHandle = (type) => {
    console.log('click', type)
    setContentType(type)
  }
  
  return (
    <section>
      <h3>Чем мы отличаемся от других?</h3>
      <Button isActive={contentType === 'way'} onClick={() => clickHandle('way')}>Подход</Button>
      <Button isActive={contentType === 'easy'} onClick={() => clickHandle('easy')}>Доступность</Button>
      <Button isActive={contentType === 'program'} onClick={() => clickHandle('program')}>Концентрация</Button>

      {!contentType &&  <p>Нажми на кнопку</p>}
      {contentType &&  <p>{diff[contentType]}</p>}
    </section>
  )
}

export default DiffrencesSections