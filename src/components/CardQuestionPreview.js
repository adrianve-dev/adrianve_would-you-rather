import React from 'react'
import {Link} from 'react-router-dom'

export default function CardQuestionPreview (props){
    const {id, optionOne} = props.question
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
                    <Link to={`/questions/${id}`}>
                        <button>View Poll</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}