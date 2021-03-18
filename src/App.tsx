// React
import React from 'react';

// React Router
import { HashRouter } from 'react-router-dom';
import Routes from './routes/Routes';

// Styles
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import GlobalStyle from './theme/globalStyle';

// Components
import Layout from './components/layout/layout/Layout';

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <HashRouter>
      <GlobalStyle />
      <Layout>
        <Routes />
      </Layout>
    </HashRouter>
  );
};

export default App;
