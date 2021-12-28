import { createContext } from "react";

export const CardContext = createContext({
  title: "",
  content: "",
  acces: "",
  coach: "",
  price: "",
});
