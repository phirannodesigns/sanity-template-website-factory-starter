import * as React from 'react'
import styled, { css } from 'styled-components'

const Logo = ({ projectName }) => {
  return (
    <Icon isLogin={projectName}>
      <svg
        fillRule="evenodd"
        fill="currentColor"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        clipRule="evenodd"
        viewBox="0 0 277 131"
      >
        <path
          fillRule="nonzero"
          d="M0 127.63V0h50.34c14.37 0 26.84 4.56 36.4 13.48a44.02 44.02 0 0114 32.65 43.217 43.217 0 01-14.02 32.51c-9.75 8.9-22.51 13.45-37.11 13.45H31.19v35.54H0zM50.34 31h-18v30.15l18 .06c9.17 0 18.08-6.31 18.08-15.08S59.46 31 50.34 31zM154.85.1V0h2.77c22.54 0 41.37 7.63 54.12 18.75 12 11.54 17.92 26.74 17.92 45.17 0 18.43-5.94 33.59-17.92 45-15.79 12.43-36 18.68-59.66 18.68h-36.74V.1h39.51zm2.69 30.9h-8.21l.29 65.55h3.46c25.3 0 41.22-11.2 44.11-32.77C197.17 42.5 179.86 31 157.54 31zm77.12 78.19v-.08c0-11.564 9.516-21.08 21.08-21.08 11.564 0 21.08 9.516 21.08 21.08 0 11.564-9.516 21.08-21.08 21.08h-.01c-11.493-.102-20.93-9.507-21.07-21z"
        />
      </svg>
    </Icon>
  )
}

const Icon = styled.div`
  display: block;
  width: auto;
  height: 2em;
  max-width: 100%;
  margin: -1em auto;
  color: white;

  ${(props) =>
    props.isLogin &&
    css`
      display: block;
      margin: 0 auto;
      height: 4em;
      color: black;
    `}

  svg {
    display: block;
    margin: 0 auto;
    height: 100%;
    width: auto;
    fill: currentColor;
  }
`

export default Logo
