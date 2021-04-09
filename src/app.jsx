import { Route, Redirect } from 'react-router-dom';

import TabBar from 'src/components/tab-bar';
import ReviewPage from 'src/pages/review-page';

const App = () => {
  return (
    <div>
      <TabBar />

      <Route exact path="/review" component={ReviewPage} />
      <Redirect from="/" to="/review" />
    </div>
  );
};

export default App;
