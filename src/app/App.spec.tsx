import * as React from 'react';
import { App } from './App';
import 'jest';
import { shallow, configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  test('should render App', () => {
    const component = shallow(<App />);
    expect(component.text()).toBeDefined();
  });
});
