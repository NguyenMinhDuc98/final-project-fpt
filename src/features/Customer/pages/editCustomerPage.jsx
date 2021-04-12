import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { Col, Row } from "reactstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import LeftNavbar from "../../../components/Home/components/left-navbar";
import CustomerForm from "../components/customerForm";
import { editCustomer } from "../customerSlice";

function EditCustomerPage() {
    const customers = useSelector(state => state.customer);
    const history = useHistory();
    const dispatch = useDispatch();
    const listCustomer = customers.list;
    const { id } = useParams();
    const customer = listCustomer[id];
    const token = localStorage.getItem('token');

    console.log('customer: ', customer);

    const initialValues = {
        name: customer.name,
        phoneNumber: customer.phone_number,
        email: customer.email
    }

    const handleSubmit = (values) => {
        return new Promise(resolve => {
            setTimeout(() => {
                dispatch(editCustomer({
                    token: token,
                    name: values.name,
                    phoneNumber: values.phoneNumber,
                    email: values.email,
                    id: customer.id,
                    role_id: customer.role_id
                }));
                history.push('/customers');
                resolve(true);
            }, 3000);
        });
    }

    return (
        <div className='customer-form-page'>
            <Header />

            <Row>
                <Col lg={3}>
                    <LeftNavbar />
                    <Footer />
                </Col>
                <Col lg={9}>
                    <div className='customer-form'>
                        <CustomerForm
                            initialValues={initialValues}
                            onSubmit={handleSubmit}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
};

export default EditCustomerPage;