import React from "react";
import NavBar from "./navbar/NavBar";
import { Container, Grid, IconButton, TextField, Tooltip, Typography } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom';
import "./component.css";

const Details = () => {
    return (
        <>
            <NavBar />
            <Tooltip title="Back">
                <Link to="/employee">
                    <IconButton>
                        <KeyboardBackspaceIcon />
                    </IconButton>
                </Link>
            </Tooltip>
            <Container>

                <Typography variant="h4" gutterBottom color="primary">
                    Employee Information Form
                </Typography>

                <form>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography gutterBottom>
                                First Name
                            </Typography>
                            <TextField
                                fullWidth
                                label="Bum Dan"
                                disabled
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>
                                    Last Name
                            </Typography>
                            <TextField
                                fullWidth
                                label="La Aung"
                                disabled
                            />
                        </Grid>
                        <Grid item xs={6}>
                        <Typography gutterBottom>
                                Gender
                            </Typography>
                        <TextField
                                fullWidth
                                label="Male"
                                name="Gender"
                                disabled
                            />
                        </Grid>
                        <Grid item xs={6}>
                        <Typography gutterBottom>
                                Date of Birth
                            </Typography>
                            <TextField
                                fullWidth
                                label="13/01/2003"
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12}>
                        <Typography gutterBottom>
                                Address
                            </Typography>
                            <TextField
                                fullWidth
                                label="Mayangone/Ward(3)/TharYarAye Street(3)/No.2B"
                                name="address"
                                disabled
                            />
                        </Grid>
                        <Grid item xs={6}>
                        <Typography gutterBottom>
                                Phone Number
                            </Typography>
                            <TextField
                                fullWidth
                                label="09-442-895-068"
                                name="phoneNumber"
                                disabled
                            />
                        </Grid>
                        <Grid item xs={6}>
                        <Typography gutterBottom>
                                Email
                            </Typography>
                            <TextField
                                fullWidth
                                label="helarybumdan@gmail.com"
                                type="email"
                                name="email"
                                disabled
                            />
                        </Grid>
                        <Grid item xs={6}>
                        <Typography gutterBottom>
                                Joined Date
                            </Typography>
                            <TextField
                                fullWidth
                                label="23 May 2023"
                                type="test"
                                disabled
                            />
                        </Grid>
                        <Grid item xs={6}>
                        <Typography gutterBottom>
                                Employee ID
                            </Typography>
                            <TextField
                                fullWidth
                                label="8359"
                                type="id"
                                disabled
                            />
                        </Grid>
                        <Grid item xs={6}>
                        <Typography gutterBottom>
                                Contract Start Date
                            </Typography>
                            <TextField
                                fullWidth
                                label="22 January 2024"
                                type="contract"
                                disabled
                            />
                        </Grid>
                        <Grid item xs={6}>
                        <Typography gutterBottom>
                                Contract End Date
                            </Typography>
                            <TextField
                                fullWidth
                                label="22 January 2025"
                                type="contract"
                                disabled
                            />
                        </Grid>
                        <Grid item xs={6}>
                        <Typography gutterBottom>
                                Department
                            </Typography>
                            <TextField
                                fullWidth
                                label="Rnd-OSS"
                                type="team"
                                disabled
                            />
                        </Grid>
                        <Grid item xs={6}>
                        <Typography gutterBottom>
                                Team
                            </Typography>
                            <TextField
                                fullWidth
                                label="PlatForm System"
                                type="team"
                                disabled
                            />
                        </Grid>
                        <Grid item xs={6}>
                        <Typography gutterBottom>
                                Age
                            </Typography>
                            <TextField
                                fullWidth
                                label="21"
                                type="age"
                                disabled
                            />
                        </Grid>
                        <Grid item xs={6}>
                        <Typography gutterBottom>
                                Position
                            </Typography>
                            <TextField
                                fullWidth
                                label="Assistand Software Engineer"
                                type="position"
                                disabled
                            />
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </>
    );
};

export default Details;