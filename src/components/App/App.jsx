import { Routes, Route } from 'react-router-dom';

import Container from 'components/Container';
import AppBar from 'components/AppBar';
import ContactsContainer from 'Pages/Contacts/Contacts';
import Registration from 'Pages/Registration';
import MainPage from 'Pages/MainPage/MainPage';
import Login from 'Pages/Login';

export default function App() {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/contacts" element={<ContactsContainer />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Container>
  );
}
