import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProgressTrackersPage from '../pages/ProgressTrackersPage';
import FirebaseApp from './FirebaseApp';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App(): JSX.Element {
  return (
    <div className='App'>
      <FirebaseApp>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route exact path='/'>
                <ProgressTrackersPage />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </FirebaseApp>
    </div>
  );
}

export default App;
