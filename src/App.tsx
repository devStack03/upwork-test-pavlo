import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import './App.css'
import Home from "./pages";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Home />
      </div>
    </QueryClientProvider>
  );
}

export default App
