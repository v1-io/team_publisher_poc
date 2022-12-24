import logo from './logo.svg';
import './App.css';

import SendbirdApp from "@sendbird/uikit-react/App";
import "@sendbird/uikit-react/dist/index.css";

function App() {
  return (
    <div className="App">
      <SendbirdApp 
        appId='CF76E553-051D-437B-8A7A-E88D12F53005'
        userId='user1'
      />
    </div>
  );
}

export default App;
