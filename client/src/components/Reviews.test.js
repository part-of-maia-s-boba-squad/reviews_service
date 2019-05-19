import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Reviews from './Reviews.jsx';

describe('Reviews Component', () => {
 
    it('should render without throwing an error', () => {
      expect(shallow(<Reviews />).contains(<div className="content">Hello World!</div>)).toBe(true);
    });
  
    it('should be selected by class "content"', function() {
      expect(shallow(<Reviews />).is('.content')).toBe(true);
    });
  
    it('should mount in a full DOM', function() {
      expect(mount(<Reviews />).find('.content').length).toBe(1);
    });
  
    it('should render to static HTML', function() {
      expect(render(<Reviews />).text()).toEqual('Hello World!');
    });
     
  });