import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import styled from 'styled-components';
import './App.css'
import GlobalStyles from './styles/global';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <AppWrapper>
        <h1>🛍️ ShopScope</h1>
      </AppWrapper>
    </QueryClientProvider>
  )
}

export default App

const AppWrapper = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
`;