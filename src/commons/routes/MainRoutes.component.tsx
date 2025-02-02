import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ProtectedRouteComponent } from './guards/ProtectedRoute.component';
import { MemoryComponent } from '../../modules/memory/memory-index.component';

export const MainRouter = () => {

  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <ProtectedRouteComponent>
                <MemoryComponent />
              </ProtectedRouteComponent>} />
          </Routes>
          
        </BrowserRouter>
      ) 
};
