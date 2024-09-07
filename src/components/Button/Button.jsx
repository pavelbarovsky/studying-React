import classes from './Button.module.css'

console.log(classes)

const Button = ({children, isActive, ...props}) => {

  return (
    <button {...props} className={
      isActive ? `${classes.button} ${classes.active}` : classes.button}
    >
      {children}
    </button>
  )
}

export default Button