import React from "react";
import Link from "next/link";
import Image from "next/image";

const CharacterCard = (character) => {
  return (
    <Link href={`/details/${character.id}`} className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <Image
          src={character.image}
          alt={character.name}
          width={100}
          height={100}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-lg font-medium  text-gray-900">
        {character.name}
      </h3>
      {character.status === "Alive" ? (
        <p className="mt-1 text-sm text-lime-700">{character.status}</p>
      ) : (
        <p className="mt-1 text-sm text-rose-400">{character.status}</p>
      )}
    </Link>
  );
};

export default CharacterCard;
