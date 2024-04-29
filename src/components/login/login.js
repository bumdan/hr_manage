import React from "react";
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from "@mui/material";
import { Link } from 'react-router-dom';

const Login = () => {
    const open = true;
    return (
        <>
        <Dialog open={open}>
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
                <TextField
                    label="username"
                    margin="normal"
                    fullWidth
                />
                <TextField
                    label="password"
                    margin="normal"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button color="primary" component={Link} to="/">Login</Button>
            </DialogActions>
        </Dialog>
        </>
    );
}

export default Login;