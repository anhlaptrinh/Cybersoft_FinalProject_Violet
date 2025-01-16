
import { createRoot } from 'react-dom/client'

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

import App from './App.tsx'







import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import {BrowserRouter} from 'react-router-dom'

const queryClient = new QueryClient()
createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    
    <BrowserRouter>
    <App />
  </BrowserRouter>
    
  </QueryClientProvider>,
)
