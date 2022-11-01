import { AuthProvider } from "./contexts/AuthContext";
import Navigation from "./shared/navigation";
export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}
