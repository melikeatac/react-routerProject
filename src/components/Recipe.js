import { useState } from "react";
import ModalComponent from "./ModalComponent";
import Modal from "react-modal";

function Recipe({ recipes, setRecipes, search }) {
  let filteredFunctions = recipes.filter(
    (recipe) => recipe.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
  );
  Modal.setAppElement("body");
  const [modalIsOpen, setIsOpen] = useState(false);
  return (
    <div className="row" style={{ marginTop: "50px" }}>
      {filteredFunctions.map((recipe) => (
        <div className="col-12 col-md-6 col-lg-4 mb-5" key={recipe.id}>
          <div className="card">
            <img src={recipe.imageURL} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{recipe.name}</h5>
              <p className="card-text">{recipe.description}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <a
                  className="btn btn-primary"
                  onClick={() => setIsOpen(true)}
                  style={{ color: "#ffffff" }}
                >
                  DETAIL
                </a>
                <ModalComponent
                  modalIsOpen={modalIsOpen}
                  setIsOpen={setIsOpen}
                  recipes={recipes}
                ></ModalComponent>
                <a
                  onClick={() =>
                    setRecipes(() =>
                      recipes.filter((selected) => selected !== recipe)
                    )
                  }
                  style={{ color: "#ffffff" }}
                  className="btn btn-primary"
                >
                  DELETE
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Recipe;
