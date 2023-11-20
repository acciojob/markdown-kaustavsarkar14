import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

const App = () => {
    const [text, setText] = useState('')
    return (
        <div className='app' >
            <textarea value={text} onChange={e => setText(e.target.value)} name="text" id='text' rows="10"></textarea>
            <div className="preview">
                <ReactMarkdown>
                    {text}
                </ReactMarkdown>
            </div>
        </div>
    )
}

export default App