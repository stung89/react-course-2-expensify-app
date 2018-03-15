import React from 'react';
import { shallow } from 'enzyme';
import LoadingPage from '../../components/LoadingPage';

test('should correctly render LoadingPage', () => {
    const wrapper = shallow(<LoadingPAge />);
    expect(wrapper).toMatchSnapshot();
});