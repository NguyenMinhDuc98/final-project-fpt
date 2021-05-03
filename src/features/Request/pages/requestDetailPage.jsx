import { Col, Row, Spinner } from "reactstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import LeftNavbar from "../../../components/Sidebar/left-navbar";
import '../../../assets/styles/style.scss';
import './requestDetailPage.scss';
import RequestDetail from "../components/requestDetail";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getListRequest } from "../requestSlice";
import { useParams } from "react-router";
import cityOfVN from '../../../assets/cityOfVietNam';

function RequestDetailPage() {
    const request = useSelector(state => state.request);
    const dispatch = useDispatch();
    const param = useParams();
    const [cityOfVn, setCityOfVn] = useState(cityOfVN);

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

        let city;
        let district;

        if (cityOfVn) {
            city = cityOfVn.find((x) => x.Id == requestDetail.city);
            district = city.Districts.find((x) => x.Id == requestDetail.district);
        }

        initialValues = {
            customerName: requestDetail.Customer.name,
            customerPhone: requestDetail.Customer.phone_number,
            repairerName: requestDetail.Repairer.name,
            repairerPhone: requestDetail.Repairer.phone_number,
            service: requestDetail.service.name,
            address: requestDetail.address + ', ' + district.Name + ', ' + city.Name,
            estimate_time: requestDetail.estimate_time,
            estimate_price: estimate_price,
            request_issues_name: request_issues_name,
            cost_of_supplies: requestDetail.invoice ? requestDetail.invoice.cost_of_supplies : null,
            other_cost: requestDetail.invoice ? requestDetail.invoice.other_cost : null,
            invoice_total_price: requestDetail.invoice ? requestDetail.invoice.total_price : null,
            invoice_status: requestDetail.invoice ? requestDetail.invoice.status : null,
            request_status: requestDetail.request_statuses[0].status.name,
            description: requestDetail.description,
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
                                        invoice={requestDetail ? requestDetail.invoice : null}
                                        request_statuses={requestDetail ? requestDetail.request_statuses : null}
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