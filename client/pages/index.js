import React from "react";
import Characters from "@/components/Characters";
import { GetAllCharacters } from "../apollo-client";

const indexPage = 1;
export default function Home({ characters, totalPages }) {
  return (
    <Characters
      characters={characters}
      currentPage={indexPage}
      totalPages={totalPages}
    />
  );
}

export async function getStaticProps({ params }) {
  const page = Number(params?.page) || 1;
  const { data } = await GetAllCharacters(page);
  return {
    props: {
      characters: data.characters.results,
      totalPages: data.characters.info.pages,
    },
  };
}
