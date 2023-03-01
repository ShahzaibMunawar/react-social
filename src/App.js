import React from "react";
// import CustomForm from "./Form/my-form";
// import MovieApp from "./Form/my-form-2";
import MySocialApp from "./Form/MySocialApp";
import SocialRoutes from "./SocialRoutes";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";

const queryClient = new QueryClient();
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <SocialRoutes />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
