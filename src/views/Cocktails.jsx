import { SearchForm } from "../components/SearchForm";
import { Section } from "../components/Section";
import { CocktailsList } from "../components/CocktailsList";
import { Loader } from "../components/Loader";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { searchByName } from "../api/cocktail-service";

export const Cocktails = () => {
  const [cocktails, setCoctails] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFormSubmit = (value) => {
    setSearchParams({ query: value });
  };
  const query = searchParams.get("query");

  useEffect(() => {
    const getCoctailByName = async () => {
      const { drinks } = await searchByName(query);
      setCoctails(drinks);
    };
    getCoctailByName();
  }, [query]);

  return (
    <>
      <Section>
        <h1 className="uppercase text-4xl text-gray-600 text-center">
          Search Cocktails
        </h1>

        <SearchForm onSubmit={handleFormSubmit} />
        {cocktails.length > 0 && <CocktailsList cocktails={cocktails} />}
      </Section>
    </>
  );
};
