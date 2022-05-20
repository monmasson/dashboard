import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Reviews from './components/Reviews';
import Ratings from './components/Ratings';
import Traffic from './components/Traffic';
import Sentiment from './components/Sentiment';

function App() {
  return (
    <div className="App">


      <div className="sidebar">
        <Sidebar/>
      </div>

<div className='toprighthalf'>
  <div className='top'>

        <div className='reviews'>

<Reviews/>
        </div>

        <div className='AverageRatings'>
<Ratings/>
        </div>

        <div className='Analysis'>
<Sentiment/>
        </div>
        </div>

        <div className="bottom">
          <div className="picture"></div>
          <Traffic/>
        </div>


      </div>

    </div>

  );
}




export default App;
