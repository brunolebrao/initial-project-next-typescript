import Home from './HelloNext';
import { renderTheme } from '../../styles/render-theme';

describe('<Home />', () => {
  it('is a dummy test', () => {
    renderTheme(<Home />);
    expect(1).toBe(1);
  });
});
