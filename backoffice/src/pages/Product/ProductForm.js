import React, { useReducer } from "react";
import { Link } from 'react-router-dom';
import {
    Card,
    CardContent,
    Stack,
    Button,
    Typography,
    CardMedia,
    Box, Grid
} from '@mui/material';
import "../../components/style.css";
import { Form, Col, Row } from 'react-bootstrap';
import Page from '../../components/Page';
import formReducer from "../../reducers/formReducer";
import image from "./avatar_2.jpg"

const initialState = {
    productName: "",
    productType: "",
    productPrice: "",
    productStock: "",
    productDescription: "",
    productId: true,
};

function ProductForm() {
    const [state, dispatch] = useReducer(formReducer, initialState);

    const handleOnchange = (event) => {
        dispatch({
            type: "INPUT",
            field: event.target.name,
            payload: event.target.value,
        });
    };

    return (
        <Page>
            <Stack direction="row" alignItems="right" mb={5} spacing={1}>
                <Button
                    variant="contained"
                    // component={Link}
                    to="#"
                >
                    Save
                </Button>
                <Button
                    variant="contained"
                    component={Link}
                    to="/app/sales/"
                >
                    Discard
                </Button>
            </Stack>
            <Card>
                <CardContent>
                <Typography className="mb-4" variant="h4" gutterBottom>
                    Product
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <Form>
                            <Row className="mb-3">
                                <Col md="3">
                                    <Form.Label column="sm">Nama Produk</Form.Label>
                                </Col>
                                <Col size="sm" xs="12" md="6">
                                    <Form.Control
                                        size="sm"
                                        id="productName"
                                        name="productName"
                                        onChange={handleOnchange}
                                        value={state.productName}
                                    />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md="3">
                                    <Form.Label column="sm">Tipe</Form.Label>
                                </Col>
                                <Col size="sm" xs="12" md="6">
                                    <Form.Control
                                        size="sm"
                                        id="productType"
                                        name="productType"
                                        onChange={handleOnchange}
                                        value={state.productType}
                                    />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md="3">
                                    <Form.Label column="sm">Harga Satuan</Form.Label>
                                </Col>
                                <Col size="sm" xs="12" md="6">
                                    <Form.Control
                                        size="sm"
                                        id="productPrice"
                                        name="productPrice"
                                        onChange={handleOnchange}
                                        value={state.productPrice}
                                    />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md="3">
                                    <Form.Label column="sm">Stok</Form.Label>
                                </Col>
                                <Col size="sm" xs="12" md="6">
                                    <Form.Control
                                        size="sm"
                                        id="productStock"
                                        name="productStock"
                                        onChange={handleOnchange}
                                        value={state.productStock}
                                    />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md="3">
                                    <Form.Label column="sm">Deskripsi</Form.Label>
                                </Col>
                                <Col size="sm" xs="12" md="6">
                                    <Form.Control
                                        as="textarea"
                                        size="sm"
                                        id="productDescription"
                                        name="productDescription"
                                        onChange={handleOnchange}
                                        value={state.productDescription}
                                    />
                                </Col>
                            </Row>
                        </Form>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <CardMedia
                            component="img"
                            alt="Image User"
                            className="image-product mb-2"
                            image={image}
                        />
                        <Stack direction="row" spacing={2}>
                            <Button
                                variant="outlined"
                                // component={Link}
                                // to="/app/sales/"
                                sx={{ml: 2}}
                            >
                                Active
                            </Button>
                            <Button
                                variant="outlined"
                                color="error"
                                // component={Link}
                                // to="/app/sales/"
                                className="ml-4"
                            >
                                Inactive
                            </Button>
                        </Stack>
                    </Grid>
                </Grid>
                </Box>
                </CardContent>
            </Card>
        </Page>
    )
}

export default ProductForm
