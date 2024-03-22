import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/dashboard/DashboardPage'
import ExpensesPage from './pages/expenses/ExpensesPage'
import IncomesPage from './pages/incomes/IncomesPage'
import RegisterPage from './pages/register/RegisterPage'
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={DashboardPage} />
          <Route path='/expenses' Component={ExpensesPage} />
          <Route path='/incomes' Component={IncomesPage} />
          <Route path='/register' Component={RegisterPage} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
