import { AppHeader } from "@components/AppHeader/AppHeader";
import { AppMain } from "@components/AppMain/AppMain";
import "@/App.css";

export default function App() {
  return (
    <div className="app">
      <AppHeader />
      <AppMain />
    </div>
  );
}

