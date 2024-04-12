import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import MainContainer from './components/main/MainContainer'
import CompanyContainer from './components/company/CompanyContainer'
import OrganizationContainer from './components/organization/OrganizationContainer'

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={ <MainContainer /> } />
        <Route path='/company' element={ <CompanyContainer /> } />
        {/* <Route path='/organization' element={ <OrganizationContainer /> }/> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
