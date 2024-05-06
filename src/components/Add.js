import React, { useState } from "react";
import NavBar from "./navbar/NavBar";
import Footer from "./navbar/Footer";
import { Avatar, Button, Container, DialogActions, FormControl, Grid, MenuItem, Select, TextField, Typography } from "@mui/material";
import "./component.css";

function Add() {
    const [jobTitle, setJobTitle] = useState("");
    const [profileImage, setProfileImage] = useState(null);

    const handleChange = (event) => {
        setJobTitle(event.target.value);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setProfileImage(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <NavBar/>
            <Container>
                <Typography variant="h4" gutterBottom color="primary">
                    Employee Information Form
                </Typography>
                <div className="space">
                </div>
                <form>
                    <Grid container spacing={2}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} >
                            <Typography gutterBottom>
                                Add Profile
                            </Typography>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                            <></>
                            {profileImage && (
                                <Avatar 
                                    alt="Employee Profile"
                                    src={profileImage}
                                    sx={{
                                        width: 100,
                                        height: 100,
                                        borderRadius: '50%',
                                    }}
                                />
                            )}
                        </Grid>
                        <Grid item xs={6}>
                            <Grid>
                                <Typography gutterBottom>
                                    First Name
                                </Typography>
                                <TextField
                                    fullWidth
                                    placeholder="First Name"
                                />
                            </Grid>
                            <Grid>
                                <Typography gutterBottom>
                                    Last Name
                                </Typography>
                                <TextField
                                    fullWidth
                                    placeholder="Last Name"
                                />
                            </Grid>
                        </Grid>
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
                        <Grid item xs={12}>
                            <Typography gutterBottom>
                                Job Title
                            </Typography>
                            <FormControl fullWidth>
                                <Select
                                    value={jobTitle}
                                    onChange={handleChange}
                                    placeholder="Job Title"
                                >
                                    <MenuItem value="Internship">Internship</MenuItem>
                                    <MenuItem value="Permanent">Permanent</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        {jobTitle === "Permanent" && (
                            <>
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
                            </>
                        )}
                        <Grid item xs={6}>
                            <Typography gutterBottom>
                                Department
                            </Typography>
                            <FormControl fullWidth>
                                <Select
                                    fullWidth
                                    placeholder="Department"
                                    value=""
                                >
                                    <MenuItem value="RnD">RnD</MenuItem>
                                    <MenuItem value="Admin">Admin</MenuItem>
                                    <MenuItem value="HR">HR</MenuItem>
                                    <MenuItem value="IT">IT</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>
                                Team
                            </Typography>
                            <FormControl fullWidth>
                                <Select
                                    fullWidth
                                    placeholder="Team"
                                    value=""
                                >
                                    <MenuItem value="PlatForm Systme">PlatForm System</MenuItem>
                                    <MenuItem value="Reception">Reception</MenuItem>
                                    <MenuItem value="Admin">Admin</MenuItem>
                                    <MenuItem value="Facility">Facility</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>
                                Age
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder="Age"
                                type="number"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>
                                Position
                            </Typography>
                            <FormControl fullWidth>
                                <Select
                                    fullWidth
                                    placeholder="Position"
                                    value=""
                                >
                                    <MenuItem value="Software Engineer">Software Engineer</MenuItem>
                                    <MenuItem value="UI/UX Designer">UI/UX Designer</MenuItem>
                                    <MenuItem value="Project Manager">Project Manager</MenuItem>
                                    <MenuItem value="Supervisor">Supervisor</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </form>
            <DialogActions>
            <Button variant="contained" type="submit" color="primary">
                Submit
            </Button>
            <Button variant="contained" type="submit" color="secondary">
                Cancel
            </Button>        
            </DialogActions>
            </Container>
            <Footer/>
        </>
    );
};

export default Add;