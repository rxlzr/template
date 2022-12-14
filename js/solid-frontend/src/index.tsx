// @refresh reload

import { render } from 'solid-js/web';
import { Router } from 'solid-app-router';
import { App } from '@/App';
import '@static/index.css';

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.body
);
