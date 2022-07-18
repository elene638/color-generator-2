import React from 'react'
import ConvertRGBtoHex from './rgbToHex'

function SingleColor(props) {
    const [alert, setAlert] = React.useState(false)
    const bcg = props.rgb.join(',')
    const hex = ConvertRGBtoHex(...props.rgb)

    function handleClick() {
        setAlert(true)
        navigator.clipboard.writeText(hex)
        setTimeout (() => {
            setAlert(false)
        }, 3000)
    }

  return (
    <div
        className={`color ${props.index > 10 && 'color-lighter'}`} 
        style={{backgroundColor:`rgb(${bcg})`}}
        onClick={handleClick}
        >
        <p>{props.weight}%</p>
        <p>{hex}</p>
        {alert && <p className='alert'>copied to the clipboard</p>}
    </div>
  )
}

export default SingleColor