import React, { useState, useEffect } from 'react';
import {
    Card,
    CardContent,
    Container,
    Stack,
    Button,
    Divider,
    Typography,
    FormControl,
    FormLabel,
    FormGroup,
    Paper,
    styled,
    OutlinedInput,
    CardMedia,
    Avatar
} from '@mui/material';
import MuiGrid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Page from '../../components/Page';
import "../../components/style.css";
// import image2 from "./avatar_2.jpg"

const handleChange = (event) => {
    setRole(event.target.value);
};

function SalesForm() {
    const [role, setRole] = useState(false);

    const roleValue = [
        {},
        { value: 'admin', label: 'Admin' },
        { value: 'manager', label: 'Manager' },
        { value: 'staff', label: 'Staff' },
    ];

    return (
        <Page title="Sales">
            <Container>
                <Stack direction="row" alignItems="right" mb={5} spacing={1}>
                    <Button
                        variant="contained"
                        // component={RouterLink}
                        to="#"
                        // startIcon={<Icon icon={plusFill} />}
                    >
                        Save
                    </Button>
                    <Button
                        variant="contained"
                        // component={RouterLink}
                        to="#"
                        // startIcon={<Icon icon={plusFill} />}
                    >
                        Discard
                    </Button>
                </Stack>
                <Card>
                    <CardContent spacing={100}>
                        <Typography variant="h4" gutterBottom>
                            Sales
                        </Typography>
                        <br/>
                        <Stack spacing={1}>
                            <TextField 
                                id="name"
                                name="name"
                                label="Name" 
                                size="small"
                                variant="standard"
                                className="text-field-form"
                            />
                            <TextField 
                                id="email"
                                name="email"
                                label="E-mail" 
                                size="small"
                                variant="standard"
                                className="text-field-form"
                            />
                            <TextField 
                                id="phoneNumber"
                                name="phoneNumber"
                                label="Phone" 
                                size="small"
                                variant="standard"
                                className="text-field-form"
                            /> 
                            <TextField 
                                select
                                id="role"
                                name="role"
                                label="Role" 
                                size="small"
                                variant="standard"
                                className="text-field-form"
                                value={role}
                                onChange={handleChange}
                                SelectProps={{
                                    native: true,
                                }}
                            >
                                {roleValue.map((option) => (
                                    <option key={option.value} value={option.value}>
                                    {option.label}
                                    </option>
                                ))}
                            </TextField>    
                        </Stack>
                    </CardContent>
                </Card>
            </Container>
        </Page>
    )
}

export default SalesForm;
