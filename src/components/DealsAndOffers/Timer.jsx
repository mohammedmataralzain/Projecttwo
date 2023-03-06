import { StyleTimer } from "./Style";



const Timer = (props) => {
  return (
    <StyleTimer>
        <p>{props.number}</p>
        <p>{props.type}</p>
    </StyleTimer>
  )
}

export default Timer