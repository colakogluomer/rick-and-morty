import Image from "next/image";
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { useRouter } from "next/router";
import CharacterCard from "./CharacterCard";
import { CHARACTERS } from "../constants/strings";

const Characters = ({ characters, currentPage, totalPages }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-24 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-32">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          {CHARACTERS}
        </h2>
        <Pagination currentPage={currentPage} totalPages={totalPages} />
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {characters.map((character) => (
            <CharacterCard key={character.id} {...character} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Characters;
