import React from "react";
import Welcome from "./pages/Welcome";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree";
import StepFour from "./pages/StepFour";
import CollectedInfo from "./pages/CollectedInfo";
import Thanks from "./pages/Thanks";
import "./styles/main.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Welcome/>
    },
    {
      path:"/step-one",
      element:<StepOne/>
    },
    {
      path:"/step-two",
      element:<StepTwo/>
    },
    {
      path:"/step-three",
      element:<StepThree/>
    },
    {
      path:"/step-four",
      element:<StepFour/>
    },
    {
      path:"/collected",
      element:<CollectedInfo/>
    },
    {
      path:"/thanks",
      element:<Thanks/>
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
