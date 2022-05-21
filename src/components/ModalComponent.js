import React, { useState } from "react";
import Modal from "react-modal";
import "../components/style.css";
function ModalComponent({ recipe }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a
        className="btn btn-primary"
        onClick={() => setOpen(true)}
        style={{ color: "#ffffff" }}
      >
        DETAIL
      </a>
        <Modal key={recipe.id} className="customstyle" isOpen={open}>
          {/* {console.log("OPEEEN", open)} */}

          <span className="modalSpan" onClick={() => setOpen(false)}>
            X
          </span>
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
          <button className="buttonModal" onClick={() => setOpen(false)}>
            CLOSE
          </button>
        </Modal>
    </>
  );
}

export default ModalComponent;
