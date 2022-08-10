import { describe, test } from 'vitest';
import { render } from 'solid-testing-library';
import { App } from '@/App';

describe('<App />', () => {
  test('it will render', () => {
    const { unmount } = render(() => <App />);
    unmount();
  });
});
