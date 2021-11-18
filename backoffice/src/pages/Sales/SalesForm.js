import React, { useReducer } from "react";
import { Link } from 'react-router-dom';
import {
    Card,
    CardContent,
    Stack,
    Button,
    Divider,
    Typography,
    Paper,
    TableContainer,
    TableBody,
    Table,
    TableRow,
    TableCell,
    TableHead,
    Chip,
    IconButton,
} from '@mui/material';
import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Form, Col, Row } from 'react-bootstrap';
import Page from '../../components/Page';
import formReducer from "../../reducers/formReducer";
import PRODUCTS from '../../_mocks_/products';
import USERLIST from '../../_mocks_/user';
import "../../components/style.css";

const TABLE_HEAD = [
    { id: 'product', label: 'Produk', alignRight: false },
    { id: 'qty', label: 'Qty', alignRight: true },
    { id: 'unit_price', label: 'Harga Satuan', alignRight: true },
    { id: 'discount', label: 'Diskon', alignRight: true },
    { id: 'subtotal', label: 'Subtotal', alignRight: true },
    { id: '' }
];

const initialState = {
    customer: "",
    orderDate: "",
    address: "",
    product: "",
    unitPrice: "",
    qty: "",
    discount: "",
    total: 0,
    totalAmount: 0,
    totalDiscount: 0,
    createdAt: "",
    orderNumber: "",
    orderDetails: [],
};

function SalesForm() {
    const [state, dispatch] = useReducer(formReducer, initialState);
    
    const handleAddItems = () => {
        const {
            product,
            qty,
            unitPrice,
            discount,
        } = state;

        const disc = !discount ? 0 : discount;
        const tDisc = parseInt(qty) * parseInt(unitPrice) * (disc/100) 
        const subTotal = parseInt(qty) * parseInt(unitPrice) * (1 - disc/100)
        const total = parseInt(qty) * parseInt(unitPrice)

        state.orderDetails.push({
            product,
            qty,
            unitPrice,
            discount: disc,
            subTotal
        });
        countAmount(total, tDisc, subTotal)
        dispatch({ type: "REMOVE-ORDER-ITEMS" });
        return;
    };

    const countAmount = (total, tDisc, subTotal)=>{
        const totalAmount = state.totalAmount + subTotal;
        const totalDisc = state.totalDiscount + tDisc;
        const tot = state.total + total
        dispatch({
            type: "INPUT",
            field: "total",
            payload: tot,
        });
        dispatch({
            type: "INPUT",
            field: "totalAmount",
            payload: totalAmount,
        });
        dispatch({
            type: "INPUT",
            field: "totalDiscount",
            payload: totalDisc,
        });
    };

    const disabledAddItems = ()=>{
        const {
            product,
            qty,
            unitPrice,
        } = state;

        if (
            !product ||
            !unitPrice ||
            !qty
        ) {
            return true;
        }
        return false;
    }

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
                    /
                </Typography>
                    <Form>
                        <Row className="mb-3">
                            <Col md="1">
                                <Form.Label column="sm">Customer</Form.Label>
                            </Col>
                            <Col size="sm" xs="12" md="5">
                                <Form.Select
                                    size="sm"
                                    onChange={handleOnchange}
                                    value={state.customer}
                                    id="customer"
                                    name="customer"
                                >
                                    <option value={false}>Pilih Customer</option>
                                    {USERLIST.map(item => (
                                        <option key={item.id} value={item.name}>{item.name}</option>
                                    ))}
                                </Form.Select>
                            </Col>
                            <Col md="1">
                                <Form.Label column="sm">Tanggal Order</Form.Label>
                            </Col>
                            <Col size="sm" xs="12" md="5">
                                <Form.Control
                                    size="sm"
                                    type="date"
                                    onChange={handleOnchange}
                                    value={state.orderDate}
                                    id="orderDate"
                                    name="orderDate"
                                />
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col md="1">
                                <Form.Label column="sm">Alamat</Form.Label>
                            </Col>
                            <Col size="sm" xs="12" md="5">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Alamat"
                                    style={{ height: '100px' }}
                                    size="sm"
                                    onChange={handleOnchange}
                                    value={state.address}
                                    id="address"
                                    name="address"
                                />
                            </Col>
                        </Row>

                        <Divider><Chip label="Tambahkan Item"/></Divider>

                        <Row className="mt-4 mb-3">
                            <Col md="1">
                                <Form.Label column="sm">Produk</Form.Label>
                            </Col>
                            <Col size="sm" xs="12" md="5">
                                <Form.Select 
                                    size="sm"
                                    onChange={handleOnchange}
                                    value={state.product}
                                    id="product"
                                    name="product"
                                >
                                    <option value={false}>Pilih Produk</option>
                                    {PRODUCTS.map(item => (
                                        <option key={item.id} value={item.name}>{item.name}</option>
                                    ))}
                                </Form.Select>
                            </Col>
                            <Col md="1">
                                <Form.Label column="sm">Harga</Form.Label>
                            </Col>
                            <Col size="sm" xs="12" md="5">
                                <Form.Control
                                    size="sm"
                                    id="unitPrice"
                                    name="unitPrice"
                                    value={state.unitPrice}
                                    onChange={handleOnchange}
                                />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col md="1">
                                <Form.Label column="sm">Qty</Form.Label>
                            </Col>
                            <Col size="sm" xs="12" md="2">
                                <Form.Control
                                    size="sm"
                                    onChange={handleOnchange}
                                    value={state.qty}
                                    id="qty"
                                    name="qty"
                                />
                            </Col>
                            <Col size="sm" md="3"/>
                            <Col md="1">
                                <Form.Label column="sm">Diskon</Form.Label>
                            </Col>
                            <Col size="sm" xs="11" md="2">
                                <Form.Control
                                    size="sm"
                                    size="sm"
                                    onChange={handleOnchange}
                                    value={state.discount}
                                    id="discount"
                                    name="discount"
                                />
                            </Col>
                            <Col size="sm" xs="1" md="1">
                                <Form.Label column="sm">%</Form.Label>
                            </Col>
                        </Row>
                        <Stack direction="row" justifyContent="left" mb={5}>
                            <Button 
                                variant="contained"
                                startIcon={<Icon icon={plusFill} />}
                                onClick={handleAddItems}
                                disabled={disabledAddItems()}
                            >
                                Tambahkan
                            </Button>
                        </Stack>
                        <Divider/>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 800 }}>
                                <TableHead>
                                    <TableRow>
                                        {TABLE_HEAD.map((head) =>(
                                            <TableCell 
                                                align={head.alignRight ? "right": "left"}
                                                key={head.id}
                                            >
                                                {head.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                {state.orderDetails.length > 0 ? (
                                    <TableBody>
                                        {state.orderDetails.map((detail)=>(
                                            <TableRow>
                                                <TableCell align="left" key={detail.product}>{detail.product}</TableCell>
                                                <TableCell align="right" key={detail.qty}>{detail.qty}</TableCell>
                                                <TableCell align="right" key={detail.unitPrice}>{detail.unitPrice}</TableCell>
                                                <TableCell align="right" key={detail.discount}>{detail.discount}</TableCell>
                                                <TableCell align="right" key={detail.subTotal}>{detail.subTotal}</TableCell>
                                                <TableCell align="right">
                                                    <IconButton size="small" onClick={handleAddItems}>
                                                        <Icon icon="fa-solid:trash" />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                ):(
                                    <TableBody>
                                        <TableRow>
                                            <TableCell align="center" colSpan={6}>
                                                <Icon icon="ic:outline-do-not-disturb-alt" width="50"/>No Items
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                )}
                            </Table>
                        </TableContainer>
                        <Row className="mt-3">
                            <Col align="right" xs="1" md="6"></Col>
                            <Col align="right" md="3">
                                <Form.Label column="sm" className="align-items-right"><h6>Total Harga</h6></Form.Label>
                            </Col>
                            <Col align="right" md="2">
                                <Form.Label column="sm" className="align-items-right"><h6>Rp. {state.total}</h6></Form.Label>
                            </Col>
                        </Row>
                        <Row className="mt-1">
                            <Col align="right" xs="1" md="6"></Col>
                            <Col align="right" md="3">
                                <Form.Label column="sm" className="align-items-right"><h6>Total Diskon</h6></Form.Label>
                            </Col>
                            <Col align="right" md="2">
                                <Form.Label column="sm" className="align-items-right"><h6>Rp. {state.totalDiscount}</h6></Form.Label>
                            </Col>
                        </Row>
                        <Row className="mt-1">
                            <Col align="right" xs="1" md="6"></Col>
                            <Col align="right" md="3">
                                <Form.Label column="sm" className="align-items-right"><h6>Total</h6></Form.Label>
                            </Col>
                            <Col align="right" md="2">
                                <Form.Label column="sm" className="align-items-right"><h6>Rp. {state.totalAmount}</h6></Form.Label>
                            </Col>
                        </Row>
                    </Form>
                </CardContent>
            </Card>
        </Page>
    )
}

export default SalesForm;
