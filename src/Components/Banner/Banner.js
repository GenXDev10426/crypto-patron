import { Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import Carousel from './Carousel';

const useStyles = makeStyles( () =>( {
    banner:{
     backgroundImage: "url(./1267622.png)",
    // textAlign: 'center', 
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    // backgroundAttachment: "fixed",
    },
    bannerContent :{
        height:380,
        display: "flex",
        flexDirection:"column",
        paddingTop: 25,
        justifyContent: "space-around",
 
    },
    tagline: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      },
      carousel: {
        height: "50%",
        display: "flex",
        alignItems: "center",
      },
   }));

const Banner = () => {

    const classes = useStyles();
  

  return (
    <div className={classes.banner}>
        <Container  className={classes.bannerContent }> 
        <div className={classes.tagline}>
        <Typography
              variant="h3"
             style = {
                {
                    color: "White",
                    fontWeight: "bolder",
                    fontSize: 48,
                    marginBottom: 15,
                    fontFamily: "Ubuntu"
                }
             }
            >
                    Crypto Patron  </Typography>
                    <Typography
            variant="subtitle2"
            style={{
              color: "white",
               fontSize: 14,
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
           Hola Amigo ! Get your Crypto Stats Right here .... 
          </Typography>
             </div>
          <Carousel/>
        </Container>
    </div>
  )
}

export default Banner