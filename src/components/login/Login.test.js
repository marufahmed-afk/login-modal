import Login from './Login';
import checkPropTypes from 'check-prop-types';
import { toggleModal } from '../../actions/login';

describe('Login', () => {

    describe('checking proptypes', () => {

        it('Should check propTypes', () => {
            const expectedProps = {
                login: {},
                toggleModal: toggleModal()
            }

            const propsTest = checkPropTypes(Login.propTypes, expectedProps, 'props', Login.name);
            expect(propsTest).toBeUndefined();
        })
    });
});
