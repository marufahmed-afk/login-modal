
import LoginForm from './LoginForm';
import checkPropTypes from 'check-prop-types';
import { toggleModal } from '../../actions/login';

describe('LoginForm', () => {

    describe('checking proptypes', () => {

        it('Should check propTypes', () => {
            const expectedProps = {
                toggleModal: toggleModal()
            }

            const propsTest = checkPropTypes(LoginForm.propTypes, expectedProps, 'props', LoginForm.name);
            expect(propsTest).toBeUndefined();
        })
    });
});
