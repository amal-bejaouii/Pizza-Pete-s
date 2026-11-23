
import { Routes, Route, Navigate } from "react-router-dom";

import PizzaList from "./pages/PizzaList/PizzaList";
import PizzaDetails from "./pages/PizzaDetails/PizzaDetails";

import "./App.css";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Navigate to="/pizzas" replace />}
      />

      <Route
        path="/pizzas"
        element={<PizzaList />}
      />

      <Route
        path="/pizzas/:id"
        element={<PizzaDetails />}
      />

    </Routes>
  );
}

export default App;

