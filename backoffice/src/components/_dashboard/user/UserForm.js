import React, { useState, useEffect } from 'react'
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
    FormGroup
} from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Page from '../../Page';
import "../../style.css";
// import Controls from "../../components/controls/Controls";

function UserForm() {
    return (
        <Page title="User | Minimal-UI">
            <Container>
                <Stack direction="row" alignItems="right" mb={5}>
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
                    <CardContent>
                        <Typography variant="h4" gutterBottom>
                            User
                        </Typography>
                        <br/>
                        <FormControl>
                            <TextField
                                id="name"
                                name="name"
                                // label="Error"
                                label="Name"
                                size="small"
                                // sx={{
                                //     width: 500,
                                //     maxWidth: '100%',
                                //   }}
                            />
                        </FormControl>
                        <FormControl>
                            <TextField
                                id="email"
                                name="email"
                                label="Email"
                                size="small"
                            />
                        </FormControl>
                    </CardContent>
                </Card>
            </Container>
        </Page>
    )
}

export default UserForm
