import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Router } from "next/router";
import client from "../apollo-client";
import Characters from "@/components/Characters";
import { GetAllCharacters } from "../apollo-client";

const indexPage = 1;
export default function Home({ characters, page }) {
  return (
    <Characters
      characters={characters}
      currentPage={indexPage}
      totalPages={page}
    />
  );
}

export async function getStaticProps(params) {
  const page = Number(params?.page) || 1;
  const { data } = await GetAllCharacters(page);
  return {
    props: {
      characters: data.characters.results,
      page: data.characters.info.pages,
    },
  };
}
