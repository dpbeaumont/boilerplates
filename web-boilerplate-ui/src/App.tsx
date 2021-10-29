import logo from 'logo.svg';
import './styles/app.css';

const App: React.FC = () =>
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h3>React Web Boilerplate</h3>
      {process.env.REACT_APP_ENVIRONMENT_VARIABLE &&
        <>
          <p>
            Environment Variables Loaded Sucessfully.
          </p>
          <p>
            {process.env.REACT_APP_ENVIRONMENT_VARIABLE}
          </p>
        </>
      }
    </header>
  </div>

export default App;
