import { Section } from '../components/Section';
import { Loader } from '../components/Loader';
import { GoBackBtn } from '../components/GoBackBtn';
import { CocktailInfo } from '../components/CocktailInfo';
import { useLocation, useParams } from 'react-router-dom';
import { routes } from '../routes';
import { useEffect, useState } from 'react';

import { getCocktailDetail } from '../api/cocktail-service';

export const CocktailDetail = () => {
  const { cocktailId } = useParams();
  const [cocktail, setCocktail] = useState({});
  // console.log(param);

  const location = useLocation();
  console.log(location);

  useEffect(() => {
    getCocktailDetail(cocktailId).then((response) => {
      setCocktail(response);
    });
  }, []);

  useEffect(() => {
    console.log(cocktail);
  }, [cocktail]);

  return (
    <>
      <GoBackBtn path={location?.state?.from ?? '/'} />
      {cocktail && <CocktailInfo {...cocktail} />}
    </>
  );
};
