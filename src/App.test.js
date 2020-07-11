
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    test('should render mode', () => {
        expect(wrapper.find('form.login-form').text()).toBe('Simple React Template');
    });

    test('should have a learn more button', () => {
        expect(wrapper.find('button.open-btn')).toBeDefined();
    });
});