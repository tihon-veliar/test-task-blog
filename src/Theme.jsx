import React from "react"
import { ThemeProvider, GlobalStyle } from "styled-components"
import PropTypes from "prop-types"

export const size = {
  mobile: 500,
  tablet: 769,
  laptop: 1024,
  desktop: 1500,
}

export const theme = {
  colors: {
    middleGrey: "#d3d4d6",
    darkGrey: "#2c3632",
    lightGrey: "#f0f1f4",
  },
  text: {
    fontFamily: `'Roboto', sans-serif`,
  },
  device: {
    mobile: `(max-width: ${size.mobile}px)`,
    tablet: `(min-width: ${size.mobile}px) and (max-width: ${
      size.tablet - 1
    }px)`,
    laptop: `(min-width: ${size.tablet}px) and (max-width: ${
      size.laptop - 1
    }px)`,
    desktop: `(min-width: ${size.laptop}px) and (max-width: ${
      size.desktop - 1
    }px)`,
    wideScreen: `(min-width: ${size.desktop}px)`,
  },
}

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    {/* <GlobalStyle /> */}
    {children}
  </ThemeProvider>
)

Theme.propTypes = {
  children: PropTypes.node.isRequired,
}
