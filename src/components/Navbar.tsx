import "./navbar.css";
import logo from "../../public/book.png";
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
      <nav className="nav-container nav1">
        <div className="logo">
          <img src={logo} alt="" />
          <span className="title">Public Library</span>
        </div>
        <div className="links">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Book</a>
          </li>
          <li>
            <a href="">Category</a>
          </li>
        </div>
      </nav>
      <nav className="nav2">
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
      </nav>
    </>
  );
}

export default Navbar;
