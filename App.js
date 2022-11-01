import Login from "./screens/loginScreen";
import { Authcontext, AuthProvider } from "./contexts/AuthContext";
import { useContext } from "react";
export default function App() {
  const { loggedIn } = useContext(Authcontext);
  return (
    <AuthProvider>
      <Login />
    </AuthProvider>
  );
}
