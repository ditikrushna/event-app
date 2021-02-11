import React from 'react'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './Header.css'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { shadows } from '@material-ui/system';
export default function Header(props) {
    
  

    return (
        <div>
        <Container className="header"  >
        <Typography className="header-title "variant="h5" component="h2" > Upcoming Events</Typography>
        </Container>
   

        </div>
      
    )
}
