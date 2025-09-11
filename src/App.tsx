import React from "react";
import { Summary } from "@/components/Summary";

function App() {
  return (
    <div className="App">
      <aside className="App__sidebar"></aside>
      <div className="App__content">
        <header className="App__header"></header>
        <section className="App__body">
          <Summary />
        </section>
      </div>
    </div>
  );
}

export default App;
