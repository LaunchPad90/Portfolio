import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '80%',
    width: '75%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
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
  },
  close: {
    fontSize: '2rem', 
    alignSelf: 'flex-end', 
    cursor: 'pointer', 
    backgroundColor: 'red', 
    color: 'white', 
    padding: '.3rem',
  }
}

const linkStyle = {
  link: {
    fontSize: '2rem',
    cursor: 'pointer',
    textDecoration: 'none',
    color: '#3A5F85',
    marginTop: '.5rem'
  }
}

function GifModal(props){

  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {

  // }

  function closeModal(){
    setIsOpen(false);
  }

    return (
      <div>
        <button style={buttonStyle.btn} onClick={openModal}>View Demo</button>
        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel={props.title}
        >

          <button style={buttonStyle.close} onClick={closeModal}>X</button>
          <img autoPlay="autoplay" style={{height: `85%`, width: `90%`}} src={props.gif} alt="gif of app" title={props.gif}/>
          <h2>Please allow a few seconds to view hosted website.</h2>
          <a style={linkStyle.link} href={props.hosted} target="blank">View app</a>
        </Modal>
      </div>
    );
}

export default GifModal;