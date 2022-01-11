import Form from "./Form";

const Modal = (props) => {
    const { closeModal } = props;
  
    return (
      <div className="overlay">
        <div className="content">
        <button className="closeBtn" onClick={closeModal}>X</button>
        <Form /> 
        </div>
      </div>
    );
  };
  
  export default Modal;
  
  