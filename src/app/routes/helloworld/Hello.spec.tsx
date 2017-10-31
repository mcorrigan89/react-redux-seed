import * as React from 'react';
import { HelloWorld } from './Hello';
import 'jest';
import { shallow, configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<HelloWorld />', () => {
  test('should render App', () => {
    const component = shallow(<HelloWorld />);
    expect(component.text()).toBeDefined();
    expect(component.text()).toBe('Hello World!');
  });
});
