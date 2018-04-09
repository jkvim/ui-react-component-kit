** Usage **

App.[js|ts]
```javascript static
import * as React from 'react';
import { BeforeUnload } from 'ui-react-component-kit'

class App extends React.Component {
  render() {
    return (
      <BeforeUnload>
        {/* rest of your app */}
      </BeforeUnload>
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