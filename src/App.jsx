import BoxAllChat from "./component/BoxAllChat";
import Layout from "./component/Layout";
import QuickButton from "./component/QuickButton";

function App() {
  return (
    <>
      <Layout>
        <BoxAllChat/>
        {/* Quick button */}
        <QuickButton />
      </Layout>
    </>
  );
}

export default App;
