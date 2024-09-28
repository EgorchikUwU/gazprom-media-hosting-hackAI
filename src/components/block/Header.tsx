import React, { ChangeEvent, FC, useState } from "react";

import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { useDispatch } from 'react-redux';

export const Header:FC = () => {
    const [inputText, setInputText] = useState<string>();
    const dispatch = useDispatch();

    return (
        <div>
            <header>
                <img src="./img/logo.png" alt="" className="logo" />
                <div className="header-handle-menu">
                    <label>
                        <Input
                            placeholder="Введите слово"
                            className="input"
                            onChange={(e:ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)}
                        />
                    </label>
                    <Button
                        onClick={() => dispatch({ type: 'SET_FILE_NAME_DISPLAY', payload: 'flex' })}
                        className="button"
                    >
                        + Видео
                    </Button>
                </div>
            </header>
        </div>
    );
}