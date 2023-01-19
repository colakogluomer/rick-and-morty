import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Characters from "../components/Characters";
import { GetAllCharacters } from "../apollo-client";

function CharactersPage({ characters, currentPage, totalPages }) {
  return (
    <Characters
      characters={characters}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
}

export const getStaticProps = async ({ params }) => {
  const page = Number(params?.page) || 1;
  const { data } = await GetAllCharacters(page);
  if (!data.characters?.results?.length) {
    return {
      notFound: true,
    };
  }

  // Redirect the first page to `/` to avoid duplicated content
  if (page === 1) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      characters: data.characters.results,
      currentPage: page,
      totalPages: data.characters.info.pages,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    // Prerender the next 5 pages after the first page, which is handled by the index page.
    // Other pages will be prerendered at runtime.
    paths: Array.from({ length: 5 }).map((_, i) => `/${i + 2}`),
    // Block the request for non-generated pages and cache them in the background
    fallback: "blocking",
  };
};

export default CharactersPage;
