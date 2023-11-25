import { useState } from "react";
import BoxAllChat from "./component/BoxAllChat";
import Layout from "./component/Layout";
import QuickButton from "./component/QuickButton";
import BoxChat from "./component/BoxChat";

function App() {
  const [showContent, setShowContent] = useState(null)

  console.log(showContent)


  return (
    <>
      <Layout>
        {/* {showContent === "Chat" && <BoxAllChat/>} */}
        <BoxChat/>
        {/* Quick button */}
        <QuickButton setShowContent={setShowContent} />
      </Layout>
    </>
  );
}

export default App;
