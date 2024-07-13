import React, { useState } from 'react';
import '../css/main.css';
import { Form, Button, Container, Modal} from 'react-bootstrap';

function Main() {
  const [file, setFile] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false); 
  const [text, setText] = useState(); 
  const [showModal, setShowModal] = useState(false);

  

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setLoaded(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    window.location.reload(); // Обновление страницы
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      alert('Выберите аудиофайл');
      return;
    }

    const formData = new FormData();
    formData.append('file_bytes', file);
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8000/summarize', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        const parsedData = data[0]
        console.log(parsedData);
        setText(parsedData)
        setShowModal(true);

      } else {
        throw new Error('Ошибка при отправке файла на сервер');
      }
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Произошла ошибка при отправке файла на сервер');
    }
    finally {
    setLoading(false);
  }
  };

  return (
    <div className={loading ? 'loading-cursor' : ''}>
    <Container className='main-cont'>
     
        <div className='audio-place'>
        <div className='audio-text'>
        <p className='audio-text-head'>Summarai</p>
        <p className='audio-text-body'>
        Превратите разговоры в действия с Summarai
        интеллектуальным транскрибатором, который помогает вести заметки и структурировать задачи.
        </p>
        </div>
        <div className='audio-content'> 
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Control type="file" size='lg' onChange={handleFileChange} />
        </Form.Group>
       
        <div className={`submit-block ${loaded ? 'loaded' : ''}`}>
        <div className='submit-arrow'>
        <svg fill="#f4ff70" width="160px" height="160px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <title>arrow-trend-down</title>
          <path d="M31.25 22.93c0-0.69-0.56-1.25-1.25-1.25s-1.25 0.56-1.25 1.25v0 3.913l-10.987-11.698c-0.228-0.243-0.552-0.394-0.911-0.394-0.145 0-0.284 0.025-0.413 0.070l0.009-0.003-6.361 2.176-6.945-15.504c-0.2-0.439-0.635-0.739-1.141-0.739-0.69 0-1.25 0.56-1.25 1.25 0 0.185 0.040 0.361 0.112 0.519l-0.003-0.008 7.411 16.546c0.201 0.439 0.637 0.738 1.142 0.738 0.144 0 0.283-0.024 0.411-0.069l-0.009 0.003 6.678-2.285 10.618 11.307h-4.181c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h7.070c0.17-0.001 0.332-0.036 0.479-0.098l-0.008 0.003c0.064-0.034 0.119-0.069 0.171-0.108l-0.003 0.002c0.083-0.041 0.154-0.086 0.219-0.139l-0.002 0.002 0.013-0.018c0.060-0.067 0.113-0.141 0.158-0.221l0.003-0.006c0.087-0.085 0.144-0.2 0.152-0.329l0-0.001c0.033-0.093 0.056-0.2 0.064-0.312l0-0.004 0.004-0.020z"></path>
        </svg>
        </div>
        <button  className='slide-button2' type="submit">
          Загрузить на сервер
        </button>
        </div>
        
        <Modal className='modal-full' show={showModal} onHide={() => handleCloseModal()}>
        <Modal.Header className='modal-head' closeButton>
   
        </Modal.Header>
        <Modal.Body>
          {text && text.replace(/{/g, '').replace(/}/g, '').split('\n').map((line, index) => (
                <p key={index}>{line}</p>
          ))}
        </Modal.Body>
        <Modal.Footer className='modal-foot'>
          
        </Modal.Footer>
        </Modal>
        
        </Form>
        </div>
        </div>


      
    </Container>
    </div>
  );
}

export default Main;