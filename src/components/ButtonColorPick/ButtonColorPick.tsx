import {useState} from "react";
import ModalColorPick from '../ModalColorPick/ModalColorPick';
import {Button} from 'react-bootstrap';

const ButtonColorPick = () => {
    // muestra el color inicial del button
    const [buttonColor, setButtonColor] = useState("#3d7c40");
    // popup del modal
    const [showModal, setShowModal] = useState(false);
    // se cambia el color del button
    const handleColorChange = (color: string) => {
        setButtonColor(color);
    };
    // al hacer click en el button se muestra el modal
    const handleShowModal = () => {
        setShowModal(true);
    };

    return(
        <div className="m-3">
            <h2>Color</h2>
            <Button variant="primary" style= {{backgroundColor: buttonColor}} onClick={handleShowModal}> Cambiar color </Button>
            {showModal && <ModalColorPick 
            show={showModal} 
            onHide={() => setShowModal(false)}
            handleColorChange = {handleColorChange}/> }
        </div>
    )
}

export default ButtonColorPick;