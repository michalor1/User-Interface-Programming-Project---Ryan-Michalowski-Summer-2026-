import './App.css';
import Books from './components/Books.js';
import Profile from './components/Profile.js';
import Navbar from './components/Navbar.js';
import LoginForm from './components/LoginForm.js';
import RegisterForm from './components/RegisterForm.js';

const books = [
{  
    id: 1234,
    title: "Test"
}, 

]

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <br/>
      <br/>
      <LoginForm />
      <br/>
      <br/>
      <RegisterForm />
    </div>
  );
}

export default App;
