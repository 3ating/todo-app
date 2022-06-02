import React, { useMemo, useEffect } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './demo';

function Theme({ dark, setDark }){

    const themeStyle = useMemo(() => {
      return {
        backgroundColor: dark ? '#2c3e50': '#ADD8E6',
        color: dark ? '#ecf0f1' : '#234363'
      }
    }, [dark])
  
    useEffect(() => {
      bodytheme();
    }, [themeStyle])
  
    const changeTheme = () => {
      setDark(prevDark => !prevDark)
    }
  
    const bodytheme = (() => {
      document.body.style.backgroundColor = themeStyle.backgroundColor;
      document.body.style.color = themeStyle.color;
    })

    return(
        <div id='button' onClick={changeTheme}>
        <StyledEngineProvider injectFirst class="center start">
          <Demo/>
        </StyledEngineProvider>
      </div>
    )
}

export default Theme;
