import React, {useState} from 'react';
import {Toolbar, AppBar, IconButton, Typography, Drawer,Popover,MenuItem} from "@material-ui/core";
import {Menu, AccountCircle} from "@material-ui/icons";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {NavLink, Route, Switch, useRouteMatch} from "react-router-dom";
import AdminHome from "./AdminHome";
import AdminVanity from "./AdminVanity";
import AdminMosaic from "./AdminMosaic";
import AdminStarp from "./AdminStarp";
import Messages from "./Messages";
import Balusters from "./Balusters";
import KitchenTop from "./Kitchen-Top";
import MarbleGranite from "./Marble-Granite";
import MarbleSlab from "./Marble-Slab";
import MarbleTiles from "./Marble-Tiles";
import Metallic from "./Metallic";
import Sisal from "./Sisal";
import Wall from "./Wall";
import WashBasin from "./Wash-Basin";
import './AdminPanel.css'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
    iconStyle:{
        width:'40px',
        height:'20px',
    }

}));
function AdminPanel() {
    const classes = useStyles();

    let {path, url} = useRouteMatch();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const [open, setOpen] = useState(false)
    const handleDrawer = () => {
        setOpen(true)
    }

    let LinkStyle= {height: '100%', padding: "0 20px", color: 'black', textDecoration: 'none',listStyleType:'none'}

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const logOut = () => {
        setAnchorEl(null);
        localStorage.removeItem('userId')
        window.location.reload()
    };
    const open2 = Boolean(anchorEl);
    const id = open2 ? 'simple-popover' : undefined;

    return (
        <div>
            <AppBar style={{background: 'red'}}>
                <Toolbar>
                    <IconButton onClick={handleDrawer} color="inherit" edge="start" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6" style={{flexGrow: 1, textAlign: 'center'}}>
                        Ali Marble Admin Panel
                    </Typography>
                        <ExitToAppIcon className={classes.iconStyle} aria-describedby={id} variant="contained" color="dark" onClick={handleClick}/>

                        <Popover
                            id={id}
                            open={open2}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                        >
                            <MenuItem  onClick={logOut}>Log Out</MenuItem>

                        </Popover>


                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={open}
                onClose={() => {
                    setOpen(false)
                }}
            >

                <ul>
                    <li><NavLink activeClassName="activeLink" className="link"
                              to={`${url}/admin-home`}>Home</NavLink></li>
                    <li><NavLink activeClassName="activeLink" className="link"
                              to={`${url}/admin-vanity`}>Vanity</NavLink></li>

                    <li><NavLink activeClassName="activeLink" className="link"
                              to={`${url}/admin-mosaic`}>Mosaic</NavLink></li>
                    <li><NavLink activeClassName="activeLink" className="link"
                              to={`${url}/admin-balusters`}>Balusters</NavLink></li>
                    <li><NavLink activeClassName="activeLink" className="link"
                                 to={`${url}/admin-stairs`}>Stairs</NavLink></li>
                    <li><NavLink activeClassName="activeLink" className="link"
                                 to={`${url}/admin-kitchenTop`}>Kitchen Top</NavLink></li>
                    <li><NavLink activeClassName="activeLink" className="link"
                                 to={`${url}/admin-marbleGranite`}>Marble Granite</NavLink></li>
                    <li><NavLink activeClassName="activeLink" className="link"
                                 to={`${url}/admin-marbleSlab`}>Marble Slab</NavLink></li>
                    <li><NavLink activeClassName="activeLink" className="link"
                                 to={`${url}/admin-marbleTiles`}>Marble Tiles</NavLink></li>
                    <li><NavLink activeClassName="activeLink" className="link"
                                 to={`${url}/admin-metallic`}>Metallic</NavLink></li>
                    <li><NavLink activeClassName="activeLink" className="link"
                                 to={`${url}/admin-metallic`}>Metallic</NavLink></li>
                    <li><NavLink activeClassName="activeLink" className="link"
                                 to={`${url}/admin-sisal`}>Sisal</NavLink></li>
                    <li><NavLink activeClassName="activeLink" className="link"
                                 to={`${url}/admin-wall`}>Wall</NavLink></li>
                    <li><NavLink activeClassName="activeLink" className="link"
                                 to={`${url}/admin-washBasin`}>Wash Basin</NavLink></li>
                    <li><NavLink activeClassName="activeLink" className="link"
                                 to={`${url}/admin-floaring`}>Floaring</NavLink></li>



                    <hr/>
                    <li><NavLink activeClassName="activeLink" className="link"
                              to={`${url}/messages`}>Messages</NavLink>
                    </li>
                </ul>





            </Drawer>

            <Switch>
                {console.log(path)}
                <Route exact path={`${path}/admin-home`}>
                    <AdminHome/>
                </Route>
                <Route path={`${path}/admin-vanity`}>
                    <AdminVanity/>
                </Route>
                <Route path={`${path}/admin-floaring`}>
                    <AdminVanity/>
                </Route>
                <Route path={`${path}/admin-mosaic`}>
                    <AdminMosaic/>
                </Route>
                <Route path={`${path}/admin-stairs`}>
                    <AdminStarp/>
                </Route>
                <Route path={`${path}/admin-balusters`}>
                    <Balusters/>
                </Route>
                <Route path={`${path}/admin-kitchenTop`}>
                    <KitchenTop/>
                </Route>
                <Route path={`${path}/admin-marbleGranite`}>
                    <MarbleGranite/>
                </Route>
                <Route path={`${path}/admin-marbleSlab`}>
                    <MarbleSlab/>
                </Route>
                <Route path={`${path}/admin-marbleTiles`}>
                    <MarbleTiles/>
                </Route>
                <Route path={`${path}/admin-kitchenTop`}>
                    <KitchenTop/>
                </Route>
                <Route path={`${path}/admin-metallic`}>
                    <Metallic/>
                </Route>
                <Route path={`${path}/admin-sisal`}>
                    <Sisal/>
                </Route>
                <Route path={`${path}/admin-wall`}>
                    <Wall/>
                </Route>
                <Route path={`${path}/admin-washBasin`}>
                    <WashBasin/>
                </Route>
                <Route path={`${path}/messages`}>
                    <Messages/>
                </Route>
            </Switch>
        </div>
    )
}

export default AdminPanel


