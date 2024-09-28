import React, { MouseEventHandler } from "react";

interface IButton {
    children: React.ReactNode;
    className: string;
    onClick: MouseEventHandler<HTMLButtonElement>
}

export const Button = ({ children, className, onClick }:IButton) => {
    return (
        <button
            className={className}
            onClick={(e:any) => onClick(e)}
        >
            { children }
        </button>
    );
}