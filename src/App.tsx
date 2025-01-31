import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MemoryComponent } from './modules/memory/memory.component';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
          <MemoryComponent /> 
    </QueryClientProvider>
  );
}

export default App;
