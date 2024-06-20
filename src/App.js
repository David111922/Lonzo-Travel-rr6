import "./App.css";
import React, { Suspense } from "react";
import { ColorRing } from "react-loader-spinner";

// Components
const AboutUs = React.lazy(() => import("./components/AboutUs.js"));
const Packages = React.lazy(() => import("./components/Packages"));

function App() {
  return (
    <div className="App">
      <div>
        <Suspense fallback={<ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />}>
          <h1>Hello World</h1>
          <AboutUs />
          <Packages />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
