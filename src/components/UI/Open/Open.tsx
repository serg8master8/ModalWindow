import React, { FC } from "react";
import './style.css'

interface Props {
    onClick: () => void
    text?: string
}

export const Open: FC<Props> = ({onClick, text}) => {
    return (
        <div>
            <button className="Open" onClick={onClick}>{text}</button>
        </div>
    )
}
