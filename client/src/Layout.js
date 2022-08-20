import Navbar from './features/Navbar';
import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 10 }}>
        <Outlet />
      </Container>
    </>
  );
}
