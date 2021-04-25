import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { Col, Row } from "reactstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import LeftNavbar from "../../../components/Sidebar/left-navbar";
import MajorForm from "../components/majorForm";
import { editMajor } from "../majorSlice";

function EditMajorPage() {
    const majors = useSelector(state => state.major);
    const history = useHistory();
    const dispatch = useDispatch();
    const listMajor = majors.list;
    const { id } = useParams();
    const major = listMajor[id];
    const token = localStorage.getItem('token');

    console.log('major: ', major.image);

    const initialValues = {
        name: major.name,
        image: ""
    }

    const handleSubmit = (values) => {
        return new Promise(resolve => {
            setTimeout(() => {
                dispatch(editMajor({
                    token: token,
                    name: values.name,
                    image: values.image,
                    id: major.id
                }));
                history.push('/majors');
                resolve(true);
            }, 3000);
        });
    }

    return (
        <div className='major-form-page container-fluid'>
            <Header />

            <Row>
                <Col lg={3}>
                    <LeftNavbar />
                    <Footer />
                </Col>
                <Col lg={9}>
                    <div className='major-form'>
                        <MajorForm
                            initialValues={initialValues}
                            onSubmit={handleSubmit}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
};

export default EditMajorPage;