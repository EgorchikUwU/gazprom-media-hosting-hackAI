import React, { ChangeEvent, ChangeEventHandler, FC } from 'react';

interface IInput {
    type?: string;
    placeholder: string;
    className: string;
    onChange: ChangeEventHandler<HTMLInputElement>
}

export const Input = ({ type, placeholder, className, onChange }:IInput) => {
    return (
        <input 
            type={type ? type : ''}
            placeholder={placeholder}
            className={className}
            onChange={(e:ChangeEvent<HTMLInputElement>) => onChange(e)}
            id={type ? 'file' : ''}
        />
    );
}