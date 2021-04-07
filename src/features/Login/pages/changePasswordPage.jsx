import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import ChangePasswordForm from "../components/changePasswordForm";
import { changePassword } from "../loginSlice";
import './changePasswordPage.scss';

ChangePasswordPage.propTypes = {};

function ChangePasswordPage() {
    const user = useSelector(state=> state.login);
    const dispatch = useDispatch();
    const history = useHistory();

    console.log('user: ', user.user.phone);

    const handleSubmit = (values) => {
        return new Promise(resolve => {
            console.log('Submit: ', values);

            setTimeout(() => {
                dispatch(changePassword({
                    token: user.token,
                    phoneNumber: user.user.phone,
                    old_password: values.old_password,
                    new_password: values.new_password
                }));
                history.push('/');
                resolve(true);
            }, 3000);
        });

    }

    return (
        <div className='change-password-form'>
            <ChangePasswordForm
                onSubmit={handleSubmit}
            />
        </div>
    )
}

export default ChangePasswordPage;