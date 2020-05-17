import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-20%',
    transform: 'translate(-50%, -50%)',
    height: '70%',
    width: '80%'
  }
};

const buttonStyle = {
  btn: {
    backgroundColor: '#3A5F85',
    color: 'white',
    padding: '.5rem 2rem',
    display: 'inline-block',
    borderRadius: '100px',
    fontSize: '1rem',
    cursor: 'pointer',
  }
}

function GifModal(props){
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal(){
    setIsOpen(false);
  }

    return (
      <div>
        <button style={buttonStyle.btn} onClick={openModal}>View Demo</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel={props.title}
        >

          <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={closeModal}>close</button>
          <iframe style={{ height: `100%`, width: `100%`}} src={props.gif} title={props.gif}/>
        </Modal>
      </div>
    );
}

export default GifModal;