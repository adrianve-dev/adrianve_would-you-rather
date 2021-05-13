import React from 'react'

export default function CardQuestionPreview (props){
    const {optionOne} = props.question
    const {name, avatarURL} = props.user

    return (
        <div>
            <div>
                <img src={avatarURL} alt={name} style={{width: 50}} />
                {name} asks:
            </div>
            <div>
                <span>Would You Rather</span>
                <div>
                    <p>
                        {optionOne.text.slice(0, 25).trim()}...
                    </p>
                    <button>View Poll</button>
                </div>
            </div>
        </div>
    )
}