import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SelectInput from '../select/SelectInput';
import TextTareaInput from '../textTarea/TextTareaInput';
import { MODAL_INPUTS } from '../../data/inputs';
import './InvitationModal.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const InvitationModal = ({
  open,
  handleClose,
  changedProperties,
  setChangedProperties,
  handleSend,
}) => {
  const handleChange = (backend_property, value) => {
    setChangedProperties({
      ...changedProperties,
      [backend_property]: value,
    });
  };

  const renderInputs = () => {
    return MODAL_INPUTS.map((input) => {
      if (input.type === 'select') {
        return (
          <SelectInput
            key={input.id}
            id={input.id}
            label={input.label}
            options={input.options}
            handleChange={(event) =>
              handleChange(input.backend_property, event.target.value)
            }
            value={changedProperties[input.backend_property]}
          />
        );
      }

      if (input.type === 'texttarea') {
        return (
          <TextTareaInput
            key={input.id}
            label={input.label}
            handleChange={(event) =>
              handleChange(input.backend_property, event.target.value)
            }
            value={changedProperties[input.backend_property]}
          />
        );
      }
      return null;
    });
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          {renderInputs()}
          <button className='invitationButton' onClick={handleSend}>
            Send invitation
          </button>
        </Box>
      </Modal>
    </div>
  );
};

export default InvitationModal;
