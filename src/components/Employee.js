import React, { useState } from "react"
import NavBar from "./navbar/NavBar";
import Footer from "./navbar/Footer";
import { Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { Typography, TextField, Grid, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip  } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { Link } from 'react-router-dom';
import "./component.css";

const Employee = () => {

    const [open, setOpen] = useState(false);
    const [editForm, setEditForm ] = useState(false)

    const handleDelete = () => {
        setOpen(true);
    };

    const handleEdit = () => {
        setEditForm(true);
    };

    const handleClose = () => {
        setOpen(false);
        setEditForm(false);
    };

    return (
        <>
            <NavBar />

            <div className="employee-lists">
                <h2>
                <Typography gutterBottom color="primary">
                  Employee Lists
                </Typography>
                </h2>
            </div>

            <Dialog open={editForm}>
            <DialogTitle variant="h5" gutterBottom color="primary">Employee Edit Form</DialogTitle>
            <DialogContent>
                <Container maxWidth="md">
                    <form>
                        <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography gutterBottom>
                                First Name
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder="First Name"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>
                                    Last Name
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder="Last Name"
                            />
                        </Grid>
                        <Grid item xs={6}>
                        <Typography gutterBottom>
                                Gender
                            </Typography>
                        <TextField
                                fullWidth
                                placeholder="Gender"
                                name="Gender"
                            />
                        </Grid>
                        <Grid item xs={6}>
                        <Typography gutterBottom>
                                Date of Birth
                            </Typography>
                            <TextField
                                fullWidth
                                type="date"
                                name="dob"
                            />
                        </Grid>
                        <Grid item xs={12}>
                        <Typography gutterBottom>
                                Address
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder="Address"
                                name="address"
                            />
                        </Grid>
                        <Grid item xs={6}>
                        <Typography gutterBottom>
                                Phone Number
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder="Phone"
                                name="phoneNumber"
                            />
                        </Grid>
                        <Grid item xs={6}>
                        <Typography gutterBottom>
                                Email
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder="email.com"
                                type="email"
                                name="email"
                            />
                        </Grid>
                        <Grid item xs={6}>
                        <Typography gutterBottom>
                                Joined Date
                            </Typography>
                            <TextField
                                fullWidth
                                type="date"
                                name="dob"
                            />
                        </Grid>
                        <Grid item xs={6}>
                        <Typography gutterBottom>
                                Employee ID
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder="0000"
                                type="id"
                            />
                        </Grid>
                        <Grid item xs={6}>
                        <Typography gutterBottom>
                                Contract Start Date
                            </Typography>
                            <TextField
                                fullWidth
                                type="date"
                                name="dob"
                            />
                        </Grid>
                        <Grid item xs={6}>
                        <Typography gutterBottom>
                                Contract End Date
                            </Typography>
                            <TextField
                                fullWidth
                                type="date"
                                name="dob"
                            />
                        </Grid>
                        <Grid item xs={6}>
                        <Typography gutterBottom>
                                Department
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder="Department"
                            />
                        </Grid>
                        <Grid item xs={6}>
                        <Typography gutterBottom>
                                Team
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder="Team"
                            />
                        </Grid>
                        <Grid item xs={6}>
                        <Typography gutterBottom>
                                Age
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder="Age"
                                type="age"
                            />
                        </Grid>
                        <Grid item xs={6}>
                        <Typography gutterBottom>
                                Position
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder="Position"
                            />
                        </Grid>
                        </Grid>
                    </form>
                </Container>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" type="submit" onClick={handleClose} color="primary">
                        Confirm
                    </Button>
                    <Button variant="contained" type="submit" onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Delete
                    </Button>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
            <TableContainer className="table-container">
                <Table>
                    <TableHead>
                        <TableRow className="table-row">
                            <TableCell>ID</TableCell>
                            <TableCell>NAME</TableCell>
                            <TableCell>AGE</TableCell>
                            <TableCell>DEPARTMENT</TableCell>
                            <TableCell>TEAM</TableCell>
                            <TableCell>POSITION</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>Bum Dan La Aung</TableCell>
                            <TableCell>21</TableCell>
                            <TableCell>RnD-OSS</TableCell>
                            <TableCell>Platform System</TableCell>
                            <TableCell>Software-Engineer</TableCell>
                            <TableCell>
                                <Tooltip title="Details">
                                    <Link to="/details">
                                        <IconButton>
                                            <PriorityHighIcon />
                                        </IconButton>
                                    </Link>
                                </Tooltip>
                                <Tooltip title="Edit">
                                    <IconButton onClick={handleEdit}><EditIcon /></IconButton>
                                </Tooltip>
                                <Tooltip title="Delete">
                                    <IconButton onClick={handleDelete}><DeleteIcon /></IconButton>
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Footer/>
        </>
    );
};

export default Employee;