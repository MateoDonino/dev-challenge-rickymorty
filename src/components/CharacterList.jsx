/* eslint-disable react/prop-types */
import { useState } from "react";
import { CharacterCard } from "./CharacterCard";
import { CharacterModal } from "./CharacterModal";
export const CharacterList = ({ list }) => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {list && list.length === 0 && (
        <h5 className="w-full text-white font-bold text-xl text-center">
          No hay resultados
        </h5>
      )}

      {list &&
        list.map((character) => (
          <CharacterCard
            key={character.id}
            name={character.name}
            image={character.image}
            status={character.status}
            species={character.species}
            onClick={() => setSelectedCharacter(character)}
          />
        ))}

      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          onClick={() => setSelectedCharacter(null)}
        />
      )}
    </div>
  );
};
