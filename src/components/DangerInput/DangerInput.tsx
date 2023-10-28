import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import DangerBar from '../DangerBar/DangerBar';

const DangerInput = () => {
    // guarda value elegido por el usuario
    const [value, setValue] = useState(0);
    
    // actualiza el estado de value
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue (Number(event.target.value));
    }

    return (
        <div className='m-3 w-50'>
            <h2> Barra de progreso </h2>
            <Form.Range value={value} onChange={handleChange}/>
            <DangerBar value={value}/>
        </div>
    )
}

export default DangerInput;