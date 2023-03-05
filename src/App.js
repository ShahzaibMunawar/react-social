import React, { useState } from "react";
// import CustomForm from "./Form/my-form";
// import MovieApp from "./Form/my-form-2";
import SocialRoutes from "./SocialRoutes";
import { MemoryRouter, BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";

const queryClient = new QueryClient();
function App() {
  return (
    <div className="App">
      <QueryClientProvider
        client={queryClient}
        initialIndex={0}
        initialEntries={["/"]}
      >
        <BrowserRouter>
          <SocialRoutes />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
