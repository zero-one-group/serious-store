import React, { useState, useReducer } from "react";
import {
    Card,
    CardContent,
    Container,
    Stack,
    Button,
    Typography,
    CardMedia,
    Grid
} from '@mui/material';
import { Form, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Page from '../../components/Page';
import formReducer from "../../reducers/formReducer";

import image from "./avatar_2.jpg"
import "../../components/style.css";

const handleChange = (event) => {
    setRole(event.target.value);
};

const initialState = {
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    accessApp: "",
    // TODO: Refactor image source
    photo: image,
};

const roleValue = [
    {},
    { value: 'admin', label: 'Admin' },
    { value: 'manager', label: 'Manager' },
    { value: 'staff', label: 'Staff' },
];

function UserForm() {
    const [state, dispatch] = useReducer(formReducer, initialState);
    const [role, setRole] = useState(false);

    const handleOnchange = (event) => {
        dispatch({
            type: "INPUT",
            field: event.target.name,
            payload: event.target.value,
        });
    };

    return (
        <Page title="User">
            <Container>
                <Stack direction="row" alignItems="right" mb={5} spacing={1}>
                    <Button
                        variant="contained"
                        // component={RouterLink}
                        to="#"
                    >
                        Save
                    </Button>
                    <Button
                        variant="contained"
                        component={Link}
                        to="/app/user/"
                        to="#"
                    >
                        Discard
                    </Button>
                </Stack>
                <Grid container spacing={2}>
                    <Grid item xs="12" md="7" lg="7">
                        <Card>
                            <CardContent>
                            <Typography className="mb-4" variant="h4" gutterBottom>
                                User
                            </Typography>
                            <Form>
                                <Row className="mb-3">
                                    <Col md="3">
                                        <Form.Label column="sm">Nama</Form.Label>
                                    </Col>
                                    <Col size="sm" xs="12" md="8">
                                        <Form.Control
                                            size="sm"
                                            id="name"
                                            name="name"
                                            value={state.name}
                                            onChange={handleOnchange}
                                        />
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col md="3">
                                        <Form.Label column="sm">E-Mail</Form.Label>
                                    </Col>
                                    <Col size="sm" xs="12" md="8">
                                        <Form.Control
                                            size="sm"
                                            id="email"
                                            name="email"
                                            value={state.email}
                                            onChange={handleOnchange}
                                        />
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col md="3">
                                        <Form.Label column="sm">Alamat</Form.Label>
                                    </Col>
                                    <Col size="sm" xs="12" md="8">
                                        <Form.Control
                                            size="sm"
                                            id="address"
                                            name="address"
                                            as="textarea"
                                            placeholder="Alamat"
                                            style={{ height: '100px' }}
                                            value={state.address}
                                            onChange={handleOnchange}
                                        />
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col md="3">
                                        <Form.Label column="sm">No Tlp</Form.Label>
                                    </Col>
                                    <Col size="sm" xs="12" md="8">
                                        <Form.Control
                                            size="sm"
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            value={state.phoneNumber}
                                            onChange={handleOnchange}
                                        />
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col md="3">
                                        <Form.Label column="sm">Akses Aplikasi</Form.Label>
                                    </Col>
                                    <Col size="sm" xs="12" md="8">
                                        <Form.Control
                                            size="sm"
                                            id="accessApp"
                                            name="accessApp"
                                            value={state.accessApp}
                                            onChange={handleOnchange}
                                        />
                                    </Col>
                                </Row>
                            </Form>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item item xs="12" md="5" lg="5">
                        <Card>
                            <CardContent>
                                <CardMedia
                                    component="img"
                                    alt="Image User"
                                    className="image-user"
                                    image={state.photo}
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Page>
    )
}

export default UserForm;
