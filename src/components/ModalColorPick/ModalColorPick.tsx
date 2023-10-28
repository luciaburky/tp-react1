import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

type ModalColorProps = {
    show: boolean;
    onHide: () => void;
    handleColorChange: (color: string) => void; 
}

const ModalColorPick = ({show, onHide, handleColorChange}:ModalColorProps) => {
    const [selectedColor, setSelectedColor] = useState('#FFF');
    const handleColorPickerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(event.target.value);
    };
    const handleAcceptClick = () => {
        handleColorChange(selectedColor);
        onHide;
    }
    
    return(
        <Modal show={show} onHide={onHide} centered backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Cambiar color al button</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Label htmlFor = "exampleColorInput">
                    Elegí un color
                </Form.Label>
                <Form.Control
                    type='color'
                    id='exampleColorInput'
                    defaultValue="#FFF"
                    title='Elegi el color'
                    onChange={handleColorPickerChange}>
                </Form.Control>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Salir</Button>
                <Button variant='primary' onClick={handleAcceptClick}> Aceptar</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalColorPick