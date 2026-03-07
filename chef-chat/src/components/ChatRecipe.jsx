import React from 'react'
import ReactMarkdown from "react-markdown"

const ChatRecipe = ({ recipe }) => {
  return (
    <section className='suggested-recipe-container' aria-live="polite">
      <h2>Chef Chat Recommends:</h2>
      <ReactMarkdown>
        {recipe}
      </ReactMarkdown>
    </section>
  )
}

export default ChatRecipe
