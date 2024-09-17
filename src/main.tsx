import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { DraggableList } from "r-draggable-list";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <h1>Hello World</h1> */}
    <DraggableList />
  </StrictMode>
);
