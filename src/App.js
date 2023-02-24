import React from "react";
// import CustomForm from "./Form/my-form";
// import MovieApp from "./Form/my-form-2";
import AppUiDesign from "./Form/MySocialApp";
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
import "./App.css";

const queryClient = new QueryClient();
function App() {
  
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
      <AppUiDesign />
      </QueryClientProvider>
    </div>
  );
}

export default App;
