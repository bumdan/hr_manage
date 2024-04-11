import React from "react";
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from "@mui/material";

const Login = () => {
    return (
        <>
        <Dialog>
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
                <Button color="primary">Login</Button>
            </DialogActions>
        </Dialog>
        </>
    );
}

export default Login;