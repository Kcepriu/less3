import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "../layout/Layout/Layout";
import { routes } from "../routes";
import { CocktailDetail, Cocktails, Home } from "../views";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/cocktails" element={<Cocktails />} />
        <Route path="/cocktails/:cocktailId" element={<CocktailDetail />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
      {/* <Route path="*" element={<Home />} /> Так не  можна*/}
    </Routes>
  );
};
