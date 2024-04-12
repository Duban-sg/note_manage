import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { onChange,onClose } from '../../store/reducers/menuCollapseState';
import Offcanvas from 'react-bootstrap/Offcanvas';



function OffCanva({ name, ...props }) {
    const show = useSelector((state) => state.offCanvasState.value);
  
    const handleClose = () => onClose(false);
    const toggleShow = () => onChange();

  
    return (
      <>
        <Button variant="primary" onClick={toggleShow} className="me-2">
          {name}
        </Button>
        <Offcanvas show={show} onHide={handleClose} scroll={false} backdrop={false} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

export default OffCanva;