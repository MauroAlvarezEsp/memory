import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MainRouter } from './commons/routes/MainRoutes.component';
import './i18n';

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
        <MainRouter /> 
    </QueryClientProvider>
  );
}

export default App;
