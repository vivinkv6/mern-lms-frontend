import "./navbar.css";
import logo from "/book.png";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import {motion} from 'framer-motion'

const pages: { id: number; name: string; url: string }[] = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "About",
    url: "#about",
  },
  {
    id: 3,
    name: "Book",
    url: "#book",
  },
  {
    id: 4,
    name: "Category",
    url: "#category",
  },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <motion.nav className="nav-container nav1" 
      initial={{
        y:-500
      }}
      animate={{
        y:0
      }}
      transition={{
        type:'tween',
        stiffness:200,
        duration:1

      }}
      >
        <div className="logo">
          <img src={logo} alt="" />
          <span className="title">Public Library</span>
        </div>
        <div className="links"
        >
          <motion.li
           initial={{
            scale:1.5,
             opacity:0
           }}
           animate={{
             scale:1,
             opacity:1
           }}
           transition={{
             type:'spring',
             stiffness:200,
             delay:1
           }}
           whileHover={{
             scale:1.2,
             
           }}
          >
            <a href="#home">Home</a>
          </motion.li>
          <motion.li
           initial={{
            scale:1.5,
             opacity:0
           }}
           animate={{
             scale:1,
             opacity:1,
           }}
           transition={{
             type:'spring',
             stiffness:200,
             delay:1.2
           }}
          >
            <a href="#about">About</a>
          </motion.li>
          <motion.li
           initial={{
            scale:1.5,
             opacity:0
           }}
           animate={{
             scale:1,
             opacity:1
           }}
           transition={{
             type:'spring',
             stiffness:200,
             delay:1.4
           }}
           whileHover={{
             scale:1.2,
             
           }}
          >
            <a href="#book">Book</a>
          </motion.li>
          <motion.li
           initial={{
            scale:1.5,
             opacity:0
           }}
           animate={{
             scale:1,
             opacity:1
           }}
           transition={{
             type:'spring',
             stiffness:200,
             delay:1.6
           }}
           whileHover={{
             scale:1.2,
             
           }}
          >
            <a href="">Category</a>
          </motion.li>
        </div>
      </motion.nav>
      <motion.nav className="nav2"
      initial={{
        y:-500
      }}
      animate={{
        y:0
      }}
      transition={{
        type:'tween',
        stiffness:200,
        duration:1

      }}
      >
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page.name}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <div className="logo">
                <img src={logo} alt="" />
                <span className="title">Public Library</span>
              </div>
            </Toolbar>
          </Container>
        </AppBar>
      </motion.nav>
    </>
  );
}

export default Navbar;
