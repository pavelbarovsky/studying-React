import './FeedbackSection.css'
import Button from './Button/Button'
import { useState, useRef } from 'react'


const StateVsRef = () => {
  const input = useRef()
  const [show, setShow] = useState(false)

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setShow(true)
    }
  }

  return (
    <>
      <p>{input.current?.value}</p>
      <h3>INPUT VALUE: {show && input.current.value}</h3>
      <input 
        ref={input}
        className='control' 
        type="text" 
        onKeyDown={handleKeyDown}
      />
    </>
  )
}


const FeedbackSection = () => {

  const [name, setName] = useState('')
  const [reason, setReason] = useState('help')
  const [hasError, setHasError] = useState(false)

  const NameChangeHandler = (e) => {
    setName(e.target.value)
    setHasError(e.target.value.trim().length === 0)
  }


  return (
    <section>
      <h3>Обратная связь</h3>
      <form>
        <label htmlFor="name">Ваше имя</label>
        <input 
          className='control' 
          id='name' 
          type="text" 
          value={name} 
          onChange={NameChangeHandler}
          style={{
            border: hasError ? '1px solid red' : null
          }}
        />

        <label htmlFor="reason">Причина обращения</label>
        <select name="" id="reason" className='control' value={reason} onChange={(e) => setReason(e.target.value)}>
          <option value="error">Ошибка</option>
          <option value="help">Помощь</option>
          <option value="suggest">Предложение</option>
        </select>

        <Button disabled={hasError} isActive={!hasError}>Отправить</Button>


          
      </form>

      <StateVsRef />

    </section>
  )
}

export default FeedbackSection