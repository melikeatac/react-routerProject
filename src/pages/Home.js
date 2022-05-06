import { useState } from "react";
import Searchbar from "../components/Searchbar";
import Recipe from "../components/Recipe";
import "../components/style.css";
function Home() {
  const [recipe, setRecipe] = useState([
    {
      id: 1,
      name: "Spring Recipes",
      imageURL:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2015%2F05%2F07%2F356820-Simply-Steamed-Asparagus-Photo-by-homeschooler3-2000.jpg&w=272&h=272&c=sc&poi=face&q=60",
      description:
        "Looking for ways to use all the fresh produce springing up? We've got over 750 trusted spring recipes to help you eat up the season's bounty.",
    },
    {
      id: 2,
      name: "Chicken Thigh Recipes",
      imageURL:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F12%2F16%2F8589870_jamaican-brown-stew-chicken_chef-john-2000.jpg&w=272&h=272&c=sc&poi=face&q=60",
      description:
        "Looking for ways to use all the fresh produce springing up? We've got over 750 trusted spring recipes to help you eat up the season's bounty.",
    },
    {
      id: 3,
      name: "Deviled Eggs",
      imageURL:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F07%2F22%2F5568049-2000.jpg&w=272&h=272&c=sc&poi=face&q=60",
      description:
        "Looking for ways to use all the fresh produce springing up? We've got over 750 trusted spring recipes to help you eat up the season's bounty.",
    },
    {
      id: 4,
      name: "Salmon Recipes",
      imageURL:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2019%2F02%2F588592120Firecracker20Salmon20Photo20by20France20C.jpg&w=272&h=272&c=sc&poi=face&q=60",
      description:
        "Looking for ways to use all the fresh produce springing up? We've got over 750 trusted spring recipes to help you eat up the season's bounty.",
    },
    {
      id: 5,
      name: "Starring Asparagus",
      imageURL:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F04%2F02%2Fasparagus-carbonara.png&w=272&h=272&c=sc&poi=face&q=60",
      description:
        "Looking for ways to use all the fresh produce springing up? We've got over 750 trusted spring recipes to help you eat up the season's bounty.",
    },
    {
      id: 6,
      name: "Rhubarb Muffins",
      imageURL:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F02%2F441906.jpg&w=272&h=272&c=sc&poi=face&q=60",
      description:
        "Looking for ways to use all the fresh produce springing up? We've got over 750 trusted spring recipes to help you eat up the season's bounty.",
    },
    {
      id: 7,
      name: "World's Best Lasagna",
      imageURL:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8963973.jpg&w=272&h=272&c=sc&poi=face&q=60",
      description:
        "Looking for ways to use all the fresh produce springing up? We've got over 750 trusted spring recipes to help you eat up the season's bounty.",
    },
    {
      id: 8,
      name: "Fashioned Pancakes",
      imageURL:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F05%2F07%2FGood-Old-Fashioned-Pancakes-2000.jpg&w=272&h=272&c=sc&poi=face&q=60",
      description:
        "Looking for ways to use all the fresh produce springing up? We've got over 750 trusted spring recipes to help you eat up the season's bounty.",
    },
    {
      id: 9,
      name: "Guacamole Recipes",
      imageURL:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F04%2F02%2F642310.jpg&w=272&h=272&c=sc&poi=face&q=60",
      description:
        "Looking for ways to use all the fresh produce springing up? We've got over 750 trusted spring recipes to help you eat up the season's bounty.",
    },
  ]);
  const [search, setSearch] = useState("");

  return (
    <div className="containerFluid">
      <h1 style={{ color: "#008080", margin: "40px 0px", textAlign: "center" }}>
        Community Picks
      </h1>
      <div style={{ textAlign: "center" }}>
        <Searchbar search={search} setSearch={setSearch} />
      </div>
      <Recipe recipes={recipe} setRecipes={setRecipe} search={search} />
    </div>
  );
}

export default Home;
