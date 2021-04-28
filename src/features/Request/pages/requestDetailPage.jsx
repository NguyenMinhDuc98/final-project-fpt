import { Col, Row, Spinner } from "reactstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import LeftNavbar from "../../../components/Sidebar/left-navbar";
import '../../../assets/styles/style.scss';
import './requestDetailPage.scss';
import RequestDetail from "../components/requestDetail";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getListRequest } from "../requestSlice";
import { useParams } from "react-router";

function RequestDetailPage() {
    const request = useSelector(state => state.request);
    const dispatch = useDispatch();
    const param = useParams();

    console.log({ request })
    console.log(param.requestId)

    const token = localStorage.getItem('token');
    const requestList = request.list
    const { isLoading } = request;

    const requestDetail = requestList.find(({ id }) => id == param.requestId);

    console.log({ requestDetail });

    useEffect(() => {
        dispatch(getListRequest(token));
    }, []);

    let initialValues = {}


    if (requestDetail) {
        let anyString = requestDetail.estimate_price;
        let estimate_price = anyString.substring(anyString.length - 3, 0);

        const request_issues_name_list = requestDetail.request_issues;

        const request_issues_name = request_issues_name_list.map((issues, index) => {
            let allIssueName = '';
            if (index == 0) {
                allIssueName = allIssueName.concat(issues.issue.name)
            } else {
                allIssueName = allIssueName.concat(" " + issues.issue.name)
            }
            return allIssueName;
        }
        )

        initialValues = {
            customerName: requestDetail.Customer.name,
            customerPhone: requestDetail.Customer.phone_number,
            repairerName: requestDetail.Repairer.name,
            repairerPhone: requestDetail.Repairer.phone_number,
            service: requestDetail.service.name,
            address: requestDetail.address,
            estimate_time: requestDetail.estimate_time,
            estimate_price: estimate_price,
            request_issues_name: request_issues_name,
            invoice_total_price: requestDetail.invoice ? requestDetail.invoice.total_price : null,
            invoice_status: requestDetail.invoice ? requestDetail.invoice.status : null,
            request_status: requestDetail.request_statuses[0].status.name
        }
    }

    return (
        <div className='request-detail-page container-fluid'>
            <Header />

            <Row>
                <Col lg={3}>
                    <LeftNavbar />
                    <Footer />
                </Col>
                <Col lg={9}>
                    <div className='request-detail'>
                        {
                            isLoading
                                ? <div className='spinner'><Spinner size='xxl' /></div>
                                : (
                                    <RequestDetail
                                        initialValues={initialValues}
                                        invoice={requestDetail.invoice}
                                    />
                                )
                        }
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default RequestDetailPage;