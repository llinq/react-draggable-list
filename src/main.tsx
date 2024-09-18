import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import DraggableList from "./lib/DraggableList";

const list = [
  {
    label: "Furia",
    sort: 0,
  },
  {
    label: "Mibr",
    sort: 1,
  },
  {
    label: "Imperial",
    sort: 2,
  },
  {
    label: 'Pain',
    sort: 3
  }, 
  {
    label: "Red Canids",
    sort: 4,
  },
  {
    label: "Oddik",
    sort: 5,
  },
  {
    label: "Case",
    sort: 6,
  },
];

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DraggableList list={list.map((l) => l.label)} />
  </StrictMode>
);
