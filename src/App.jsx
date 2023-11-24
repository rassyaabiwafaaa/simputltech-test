import Layout from "./component/Layout";
import QuickButton from "./component/QuickButton";
import SearchBar from "./component/SearchBar";

function App() {
  return (
    <>
      <Layout>
        {/* Quick button */}
        <div className="w-[508px] h-[526px] bg-white mb-3 rounded-sm flex justify-center">
          <SearchBar />
        </div>
        <QuickButton />
      </Layout>
    </>
  );
}

export default App;
