import { renderTheme } from '../../styles/render-theme';
import HelloNext from './HelloNext';

describe('<Home />', () => {
  it('is a dummy test', () => {
    renderTheme(<HelloNext />);
    expect(1).toBe(1);
  });
});
