import React, { useState } from "react";
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from "@mui/material";
import { Link } from 'react-router-dom';

const Login = () => {
    const [open, setOpen] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const [error, setError] = useState("");

    const handleShowPassword = () => {
        setShow(true);
    };

    const handleLogin = () => {

        if (username === "bumdan.l.aung" && password === "spider-man") {
            <Link to="/"></Link>
        } else {
            setError("Invalid username or password");
        }
    };

    const handleClose = () => {
        setOpen(false);
        setUsername("");
        setPassword("");
        setShow(false);
        setError("");
        setTimeout(() => setOpen(true), 10);
    };


    return (
        <>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
                <TextField
                    label="username"
                    margin="normal"
                    fullWidth
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    error={error !== ""}
                    helperText={error ? "Invalid username or password" : ""}
                />
                <TextField
                    label="password"
                    margin="normal"
                    fullWidth
                    type={show ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={error !== ""}
                    helperText={error ? "Invalid username or password" : ""}
                />
                <Button onClick={handleShowPassword}>
                    {show ? "Hide" : "Show"}
                </Button>
            </DialogContent>
            <DialogActions>
                <Button color="primary" component={Link} to="/">Login</Button>
            </DialogActions>
        </Dialog>
        </>
    );
}

export default Login;