import { CocktailsList } from "../components/CocktailsList";
import { Section } from "../components/Section";
import { Loader } from "../components/Loader";
import { useEffect, useState } from "react";
import { getTrendingCocktails } from "../api/cocktail-service";

export const Home = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    async function fetchTrendingCocktails() {
      const cocktail = await getTrendingCocktails();
      const drinks = cocktail.map((element) => element.drinks[0]);
      setCocktails(drinks);
    }

    fetchTrendingCocktails();
  }, []);

  return (
    <>
      <Section>
        <h1 className="text-center font-black text-gray-700 text-4xl mb-10">
          Trending cocktails
        </h1>

        <CocktailsList cocktails={cocktails} />
      </Section>
    </>
  );
};
