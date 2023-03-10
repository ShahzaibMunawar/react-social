import React, { useState } from "react";
// import CustomForm from "./Form/my-form";
// import MovieApp from "./Form/my-form-2";
import SocialRoutes from "./SocialRoutes";
import { MemoryRouter, BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <QueryClientProvider
          client={queryClient}
          initialIndex={0}
          initialEntries={["/"]}
        >
          <BrowserRouter>
            <SocialRoutes />
          </BrowserRouter>
        </QueryClientProvider>
      </Provider>
    </div>
  );
}

export default App;
