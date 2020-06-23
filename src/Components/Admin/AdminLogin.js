import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AdminPanel from "./AdminPannal";
import '.././Config'
import firebase from "firebase";
import {
    Link
} from "react-router-dom";
import { useHistory } from "react-router-dom";


let db = firebase.firestore();


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}

            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignIn() {
    const classes = useStyles();
    let history = useHistory();

    function handleClick() {
        window.location.reload()
        history.push('/admin')
    }

    function dologIn() {
        firebase.auth().signInWithEmailAndPassword(email,password).then(function (userData) {
            localStorage.setItem("userId",userData.user.uid);
            handleClick()
        }).catch(function(error) {
            console.log(error);
            alert(error.message);
        });


    }




    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');




    function onValueEmail(e) {
        setEmail(e.target.value);
    }

    function onValuePassword(e) {
        setPassword(e.target.value);
    }

    return (
        <Container component="main" maxWidth="xs">
            <br/>
            <br/>
            <br/>

            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                {/*<form className={classes.form} noValidate>*/}
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={onValueEmail}
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    onChange={onValuePassword}

                    autoComplete="current-password"
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={dologIn}
                >
                    Sign In
                </Button>

                {/*</form>*/}
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}