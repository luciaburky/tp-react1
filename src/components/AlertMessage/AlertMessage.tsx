import {useState} from 'react'
import AlertGenerator from '../AlertGenerator/AlertGenerator';

const AlertMessage = () => {
    // guarda valor en campo de texto
    const [inputValue, setInputValue] = useState('');
    // guarda msj
    const [message, setMessage] = useState('');
    // muestra componente hijo segun el estado actual
    const [showAlert, setShowAlert] = useState(false);
    // si el campo de texto es no vacío, se guarda texto q escribió en message
    const handleClick = () => {
    if(inputValue.trim() !== '') {
        setShowAlert(true);
        setMessage(inputValue);
    } else {
        setShowAlert(false);
    }
    }
    return (
        <div className='m-3'>
            <h2>Mensaje</h2>
            <input type="text" value={inputValue} onChange={(e) => 
            setInputValue(e.target.value)}/>
            <button onClick={handleClick}>Mostrar</button>

            {showAlert && <AlertGenerator message={message}/>}
        </div>
    )
  }
  
export default AlertMessage;