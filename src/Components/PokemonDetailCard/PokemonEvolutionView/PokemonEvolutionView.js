import React from "react";
import PokemonCard from "../../PokemonCard/PokemonCard";
import "./PokemonEvolutionView.scss";

export default function PokemonEvolutionView() {
  //   return <div className="view">PokemonEvolutionView</div>;
  return (
    // <div>
    <div className="cards-container">
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
    </div>
    // </div>
  );
}