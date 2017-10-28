import * as React from 'react';
import { Todo } from './Todo';
import 'jest';
import { shallow, configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Counter />', () => {
  test('should render Todo', () => {
    const component = shallow(<Todo />);
    expect(component.find('#todo')).toBeDefined();
  });

  test('should say Todo Component', () => {
    const component = shallow(<Todo />);
    expect(component.find('#todo').text()).toBe('TODO Component');
  });
});
