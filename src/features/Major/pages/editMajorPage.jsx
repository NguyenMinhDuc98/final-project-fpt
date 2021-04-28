import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { Col, Row, Spinner } from "reactstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import LeftNavbar from "../../../components/Sidebar/left-navbar";
import MajorForm from "../components/majorForm";
import { editMajor, getListMajor } from "../majorSlice";

function EditMajorPage() {
    const majors = useSelector(state => state.major);
    const history = useHistory();
    const dispatch = useDispatch();
    const param = useParams();

    const token = localStorage.getItem('token');
    const { isLoading } = majors;

    let initialValues = '';

    useEffect(() => {
        dispatch(getListMajor(token));
    }, [])

    const majorNameArr = [];
    let major = null;

    if (majors.list.length > 0) {
        const majorList = majors.list
        major = majors.list.find(({ id }) => id == param.id);

        console.log({major})

        let majorNameList = majorList.map((major) => {
            return (
                majorNameArr.push(major.name.toLowerCase())
            )
        }
        );

        initialValues={
            name: major.name
        }
    }

    const handleSubmit = (values) => {
        dispatch(editMajor({
            token: token,
            name: values.name,
            id: major.id
        }));

        return new Promise(resolve => {
            setTimeout(() => {
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
                        {
                            isLoading
                                ? <div className='spinner'><Spinner size='xxl' /></div>
                                : (
                                    <MajorForm
                                        initialValues={initialValues}
                                        onSubmit={handleSubmit}
                                        majorNameArr={majorNameArr}
                                    />
                                )
                        }
                    </div>
                </Col>
            </Row>
        </div>
    )
};

export default EditMajorPage;