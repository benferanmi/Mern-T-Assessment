import { useUserModeStore } from "./store/userModeStore";
import IndividualView from "./pages/IndividualView";
import BusinessView from "./pages/BusinessView";
import Navigation from "./components/navigations/Navigation";

function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const userMode = useUserModeStore((state: any) => state.userMode);

  return (
    <>
      <Navigation />
      {userMode === "individual" ? <IndividualView /> : <BusinessView />}
    </>
  );
}

export default App;
