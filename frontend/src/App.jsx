import AuthUser from "./components/AuthUser";
import Guest from "./guest/guest";
import Auth from "./guest/Auth";

function App() {
  const { getToken } = AuthUser();
  if (!getToken()) {
    return <Guest />;
  }
  return (
    <Auth />
  );
}

export default App;
