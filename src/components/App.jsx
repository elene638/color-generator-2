import React from 'react'
import Values from 'values.js'
import SingleColor from './singleColor'

function App() {

    const [color, setColor] = React.useState('')
    const [list, setList] = React.useState(new Values('#f15025').all(10))
    const [error, setError] = React.useState(false)

    function handleSubmit(event) {
        event.preventDefault()
        try {
            let colors = new Values(color).all(10)
            setList(colors)
        } catch (error) {
            setError(true)
        }
    }

    function handleChange(event) {
        setColor(event.target.value)
    }

  return (
    <div className='main'>
        <div className='header'>
            <h1>Color Generator</h1>
            <form onSubmit={handleSubmit}>
                <input 
                value={color} 
                onChange={handleChange} 
                type="text" 
                placeholder='#f15025'
                className={`${error ? 'error' : null}`}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
        <div className='colors'>
            {list.map((item, index) => {
                return <SingleColor 
                    key={index}
                    index={index}
                    weight={item.weight}
                    rgb={item.rgb}
                />
            })}
        </div>
    </div>
  )
}

export default App