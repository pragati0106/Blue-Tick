import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "@emotion/styled";
import bluetick from "../../Images/b-logo.svg";
import { Link } from "react-scroll";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
const HeadContainer = styled(AppBar)`
  display: flex;
  color: white;
`;
const HeadTool = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  height: 10vh;
  @media (max-width: 600px) {
    height:6vh;
}
`;
const HeadLogo = styled("img")`
  overflow: hidden;
  height: inherit;
  cover: content-fit;
  @media (max-width: 600px) {
    width: 50%;

  }
`;

const pages = ["Home", "Products", "Blogs", "Contact Us"];
const settings = ["Home", "Products", "Blogs", "Contact Us"];
const Head = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <HeadContainer position="sticky">
        <Container maxWidth="xl">
          <HeadTool disableGutters>
            <HeadLogo src={bluetick} />

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                flexDirection: "row-reverse",
              }}
            >
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
                  <MenuItem key={page}>
                    <Typography textAlign="center">
                      <Link
                        activeClass="active"
                        to={page}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        onClick={handleCloseNavMenu}
                      >
                        {page}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <div>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseUserMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    <Link
                      activeClass="active"
                      to={page}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                    >
                      {page}
                    </Link>
                  </Button>
                ))}
              </Box>
            </div>
            <Box sx={{ display: "none" }}>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">  
                    <Link
                      activeClass="active"
                      to={setting}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                    >
                      {setting}
                    </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </HeadTool>
        </Container>
      </HeadContainer>
    </>
  );
};
export default Head;
