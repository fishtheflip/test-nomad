import Nav from './nav';
import Login from './login';
import Singup from './singup';
import ClientProfile from './client-profile';
import ManagerProfile from './manager-profile';

function App() {
  return (
    <div >
      <Nav/>
      <Login/>
      <Singup/>
      <ClientProfile/>
      <ManagerProfile/>
    </div>
  );
}

export default App;
