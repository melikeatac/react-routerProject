import React from "react";
import Modal from "react-modal";
import "../components/style.css";
function ModalComponent({ modalIsOpen, setIsOpen, recipes }) {
  return (
    <>
      {recipes.map((recipe) => (
        <Modal key={recipe.id} className="customstyle" isOpen={!!modalIsOpen}>
          <h2
            style={{
              color: "#ffffff",
            }}
          >
            {recipe.name}
          </h2>
          <p className="modalP">{recipe.description}</p>
          <img src={recipe.imageURL} />
          <br />
          <button className="buttonModal" onClick={() => setIsOpen(false)}>
            CLOSE
          </button>
        </Modal>
      ))}
    </>
  );
}

export default ModalComponent;
