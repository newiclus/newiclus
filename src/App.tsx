import React from "react";
import { Routes, Route } from "react-router";

import { ThemeProvider } from "@components/theme/provider";
import Dashboard from "@components/dashboard";

function App(): React.JSX.Element {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
