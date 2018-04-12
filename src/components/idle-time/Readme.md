** Usage **

Ensure what you are wrapping with the IdleTime can accept the properties that the IdleTime passes to its children
* resumeIdleTimer
* pauseIdleTimer
* resetIdleTimer  

Otherwise consider utilising the [React Context API](https://reactjs.org/docs/context.html)

App.[js|ts]
```javascript static
import * as React from 'react';
import { IdleTime } from 'ui-react-component-kit'

class App extends React.Component {
  render() {
    return (
      <IdleTime sessionTimeout={sessionTimeout}>
        {/* rest of your app */}
      </IdleTime>
    );
  }
}

export default App
```

index.[js|ts]
```javascript static
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```