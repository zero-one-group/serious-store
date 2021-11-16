import React, { Component } from 'react';
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
import "../../components/style.css";
import PRODUCTS from '../../_mocks_/products';
import USERLIST from '../../_mocks_/user';

class SalesForm extends Component{
    state = {
        customer: "",
        orderDate: "",
        address: "",
        product: "",
        unitPrice: "",
        qty: "",
        discount: "",
        createdAt: "",
        orderNumber: "",
        orderDetails: [
            {
                orderDetailId: "",
                product: "",
                qty: "",
                unitPrice: "",
                discount: "",
                subTotal: "",
                orderNumber: "",
                createdAt: "",
            }
        ],
    };

    TABLE_HEAD = [
        { id: 'product', label: 'Product', alignRight: false },
        { id: 'qty', label: 'Qty', alignRight: true },
        { id: 'unit_price', label: 'Unit Price', alignRight: true },
        { id: 'discount', label: 'Discount', alignRight: true },
        { id: 'subtotal', label: 'Subtotal', alignRight: true },
        { id: '' }
    ];

    // componentDidMount = () => {
    //     PRODUCTS.map((item)=> {
    //         console.log(item);
    //     })
    // }

    handleChange = (event) => {
        
    };
    
    handleAddItems = () => {
        const state = this.state;
        let orderDetails = state.orderDetails;
        const discount = !state.discount ? 0 : state.discount
        console.log(discount/100);
        const subTotal = parseInt(state.qty) * parseInt(state.unitPrice) * (1 - discount/100)
        console.log(parseInt(state.qty) * parseInt(state.unitPrice));
        console.log(subTotal);
        orderDetails.push({
            product: state.product,
            qty: state.qty,
            unitPrice: state.unitPrice,
            discount: state.discount,
            subTotal: subTotal,
        });
        this.setState({ orderDetails: orderDetails });
        this.clearItems();
        console.log(this.state.orderDetails);
    };

    disabledAddItems = ()=>{
        const state = this.state;
        if (
            !state.product ||
            !state.unitPrice ||
            !state.qty
          ) {
            return true;
          }
          return false;
    }

    clearItems = () => {
        this.setState({
            product: "",
            unitPrice: "",
            qty: "",
            discount: "",
        })
    };

    handleOnchange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    render(){
      const state = this.state;
      const orderDetails = state.orderDetails
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
                                    onChange={this.handleOnchange}
                                    value={this.state.customer}
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
                                    onChange={this.handleOnchange}
                                    value={this.state.orderDate}
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
                                    onChange={this.handleOnchange}
                                    value={this.state.address}
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
                                  onChange={this.handleOnchange}
                                  value={this.state.product}
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
                                    value={this.state.unitPrice}
                                    onChange={this.handleOnchange}
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
                                    onChange={this.handleOnchange}
                                    value={this.state.qty}
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
                                    onChange={this.handleOnchange}
                                    value={this.state.discount}
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
                                onClick={this.handleAddItems}
                                disabled={this.disabledAddItems()}
                            >
                                Tambahkan
                            </Button>
                        </Stack>
                        <Divider/>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 800 }}>
                                <TableHead>
                                    <TableRow>
                                        {this.TABLE_HEAD.map((head) =>(
                                            <TableCell 
                                                align={head.alignRight ? "right": "left"}
                                                key={head.id}
                                            >
                                                {head.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                {orderDetails.length > 0 ? (
                                    <TableBody>
                                        {orderDetails.map((detail)=>(
                                            <TableRow>
                                                <TableCell align="left" key={detail.product}>{detail.product}</TableCell>
                                                <TableCell align="right" key={detail.qty}>{detail.qty}</TableCell>
                                                <TableCell align="right" key={detail.unitPrice}>{detail.unitPrice}</TableCell>
                                                <TableCell align="right" key={detail.discount}>{detail.discount}</TableCell>
                                                <TableCell align="right" key={detail.subTotal}>{detail.subTotal}</TableCell>
                                                <TableCell align="right">
                                                    <IconButton size="small" onClick={this.handleAddItems}>
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
                                <Form.Label column="sm" className="align-items-right"><h6>Discount</h6></Form.Label>
                            </Col>
                            <Col align="right" md="2">
                                <Form.Label column="sm" className="align-items-right"><h6>Rp. 0</h6></Form.Label>
                            </Col>
                        </Row>
                        <Row className="mt-1">
                            <Col align="right" xs="1" md="6"></Col>
                            <Col align="right" md="3">
                                <Form.Label column="sm" className="align-items-right"><h6>Total</h6></Form.Label>
                            </Col>
                            <Col align="right" md="2">
                                <Form.Label column="sm" className="align-items-right"><h6>Rp. 0</h6></Form.Label>
                            </Col>
                        </Row>
                    </Form>
                </CardContent>
            </Card>
        </Page>
      )
    }
}

export default SalesForm;
