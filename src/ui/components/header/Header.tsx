import MenuIcon from "@mui/icons-material/Menu"
import PublicIcon from "@mui/icons-material/Public"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Toolbar from "@mui/material/Toolbar"
import Tooltip from "@mui/material/Tooltip"
import Typography from "@mui/material/Typography"
import React, { useState } from "react"
import { getDataPages } from "../../../bll/reducers/pagesReducer"
import { textDataEN, textDataPL, textDataRU } from "../../../bll/state-app/textData"
import Logo from "../../../common/assets/LOGO.jpg"
import { useAppDispatch, useAppSelector } from "../../../common/utils/hooks/appHooks"
import style from "./Header.module.scss"
export const Header = () => {
  const headerPages = useAppSelector((state) => state.dataPages.headerPages)
  const dispatch = useAppDispatch()

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenLanguageMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseLanguageMenu = () => {
    setAnchorElUser(null)
  }
  const englishLnHandler = () => {
    const data = textDataEN.EN()
    dispatch(getDataPages({ data: data }))
    setAnchorElUser(null)
  }
  const russianLnHandler = () => {
    const data = textDataRU.RU()
    dispatch(getDataPages({ data: data }))
    setAnchorElUser(null)
  }
  const polishLnHandler = () => {
    const data = textDataPL.PL()
    dispatch(getDataPages({ data: data }))
    setAnchorElUser(null)
  }

  return (
    <AppBar position="static" sx={{ bgcolor: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div style={{ width: "200px", height: "100px" }}>
            <img alt="RIDER" src={Logo} style={{ objectFit: "fill", width: "100%", height: "100%" }}></img>
          </div>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
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
              {headerPages.map((page) => (
                <MenuItem key={page}>
                  <Typography
                    className={style.navLink}
                    textAlign="center"
                    onMouseDown={() => {
                      handleCloseNavMenu()
                    }}
                    onClick={() => {
                      const element = document.getElementById(page)
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                  >
                    {page.toUpperCase()}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {headerPages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
                className={`${style.navLink} ${style.btnLink}`}
                onClick={() => {
                  const element = document.getElementById(page)
                  if (element) {
                    setAnchorElNav(null)
                    return element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                {page.toUpperCase()}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Languages">
              <IconButton onClick={handleOpenLanguageMenu} sx={{ p: 0 }}>
                <PublicIcon fontSize="large" sx={{ color: "white", ":hover": { color: "rgb(255, 184, 60)" } }} />
              </IconButton>
            </Tooltip>
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
              onClose={handleCloseLanguageMenu}
            >
              <MenuItem onClick={handleCloseLanguageMenu}>
                <div className={style.container}>
                  <div className={style.en} onClick={englishLnHandler}>
                    {"EN"}
                  </div>
                  <div className={style.pl} onClick={polishLnHandler}>
                    {"PL"}
                  </div>
                  <div className={style.ru} onClick={russianLnHandler}>
                    {"RU"}
                  </div>
                </div>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
