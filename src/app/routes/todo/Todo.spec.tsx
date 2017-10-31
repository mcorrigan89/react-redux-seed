import * as React from 'react';
import { TodoContainer } from './TodoContainer';
import 'jest';
import { shallow, configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Counter />', () => {
  test('should render Todo', () => {
    const component = shallow(<TodoContainer />);
    expect(component.find('#todo')).toBeDefined();
  });

  test('should say Todo Component', () => {
    const component = shallow(<TodoContainer />);
    expect(component.find('#todo').text()).toBe('TODO Component');
  });
});
