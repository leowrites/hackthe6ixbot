import Navbar from './features/Navbar';
import Container from '@mui/material/Container';
import Home from './features/Home';

export default function Layout() {
  return (
    <Container>
      <Navbar />
      <Home />
    </Container>
  );
}
