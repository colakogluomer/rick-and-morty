import CharacterDetail from "@/components/CharacterDetail";
import React from "react";
import { GetCharacterById } from "../../apollo-client";

const Character = ({ character }) => {
  return <CharacterDetail character={character} />;
};

export default Character;

export async function getServerSideProps(context) {
  const { data } = await GetCharacterById(context);
  if (!data.character) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      character: data.character,
    },
  };
}
