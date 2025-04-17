import { useState } from "react";

function Home() {
  console.log("Component initialised", Math.random());
  let [pageName, setPageName] = useState("");

  /* useEffect(() => {
    console.log("Component Initialized from Use effet");
  }, [pageName]); */

  const pageNameChange = (pageName) => {
    setPageName(pageName);
    console.log("Component Initialized from Use State", Math.random());
  };

  return (
    <>
      <span>
        <input
          type="button"
          value="Home"
          onClick={() => pageNameChange("Home")}
        />
        <input
          type="button"
          value="About"
          onClick={() => pageNameChange("About Us")}
        />
        <input
          type="button"
          value="Contact Us"
          onClick={() => pageNameChange("Contact")}
        />
      </span>
      <div>{pageName}</div>
    </>
  );
}
export default Home;
