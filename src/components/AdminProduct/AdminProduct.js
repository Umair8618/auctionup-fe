import React, { useEffect, useState } from "react";
import axios from "axios";
import user from "../../assets/images/dashboard/user.png";
import DashboardAdminSidebar from "../DashboardAdminSidebar/DashboardAdminSidebar";
// import Modal from "react-modal";
import Modal from "react-bootstrap/Modal";
import {
  ModalDialog,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalBody,
} from "react-bootstrap";
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import ReactDom from "react-dom";

const AdminProduct = (props) => {
  const [show, setShow] = useState(false);
  // get product
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/products").then((res) => {
      if (res.status == 200) {
        setProduct(res.data.products);
      }
    });
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (id) => {
    axios.delete("http://localhost:3000/products/" + id).then((res) => {
      if (res.status == 200) {
        alert("product deleted");
      }
    });
  };

  return (
    <section className="dashboard-section padding-bottom mt--240 mt-lg--440 pos-rel">
      <div className="container">
        <div className="row justify-content-center">
          <DashboardAdminSidebar activePage={"adminProduct"} />
          <div className="col-lg-8">
            <div className="row">
              <div className="col-12">
                <div className="dash-pro-item mb-30 dashboard-widget">
                  {/* <div className="header">
                    <h4 className="title">Users Details</h4>
                  </div> */}
                  <div className="form-group">
                    <Container responsive fluid>
                      <Row>
                        <Col md="12">
                          <Card className="strpied-tabled-with-hover">
                            <Card.Header>
                              <Card.Title as="h4">
                                AuctionUp.Products
                              </Card.Title>

                              <button
                                className="custom-button white m-2 "
                                variant="primary"
                                onClick={handleShow}
                              >
                                <i className="fa fa-edit"></i>Create
                              </button>
                              <Modal show={show} onHide={handleClose}>
                                <Modal.Header>
                                  <Modal.Title>Create new User</Modal.Title>
                                </Modal.Header>
                                <Modal.Body></Modal.Body>
                                <Modal.Footer>
                                  <button
                                    variant="secondary"
                                    onClick={handleClose}
                                    className="custom-button white"
                                  >
                                    Close
                                  </button>
                                  <button
                                    type="submit"
                                    className="custom-button"
                                    name="register"
                                    // onClick={HandleSubmit}
                                  >
                                    Create
                                  </button>
                                </Modal.Footer>
                              </Modal>
                            </Card.Header>
                            <Card.Body className="table-full-width table-responsive px-0">
                              <Table className="table-hover table-striped table-bordered">
                                <thead>
                                  <tr>
                                    <th className="border-0">Product ID</th>
                                    <th className="border-0">Title</th>
                                    <th className="border-0">Category</th>
                                    <th className="border-0">Condition</th>
                                    <th className="border-0">Color</th>
                                    <th className="border-0">City</th>
                                    <th className="border-0">Street</th>
                                    <th className="border-0">Zip code</th>
                                    <th className="border-0">Base Price</th>
                                    <th className="border-0">Final Price</th>
                                    <th className="border-0">Start Date</th>
                                    <th className="border-0">End Date</th>
                                    <th className="border-0">Description</th>
                                    <th className="border-0">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {product != null ? (
                                    <>
                                      {product.map((value, index) => (
                                        <>
                                          <tr>
                                            <td>{value._id}</td>
                                            <td>{value.title}</td>
                                            <td>{value.category}</td>
                                            <td>{value.condition}</td>
                                            <td>{value.color}</td>
                                            <td>{value.city}</td>
                                            <td>{value.street}</td>
                                            <td>{value.zip}</td>
                                            <td>{value.basePrice}</td>
                                            <td>{value.finalPrice}</td>
                                            <td>{value.startDate}</td>
                                            <td>{value.endDate}</td>
                                            <td>{value.description}</td>
                                            <td>{value.description}</td>
                                            <td>
                                              <button
                                                className="custom-button white m-2 "
                                                variant="primary"
                                                onClick={() =>
                                                  handleDelete(value._id)
                                                }
                                              >
                                                <i className="fa fa-trash"></i>
                                              </button>
                                            </td>
                                          </tr>
                                        </>
                                      ))}
                                    </>
                                  ) : (
                                    <>
                                      <tr>
                                        <td>no products found!</td>
                                      </tr>
                                    </>
                                  )}
                                </tbody>
                              </Table>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminProduct;
