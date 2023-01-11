import React, { FC } from "react";
import './Content.css'

export interface ContentProps{
    children: JSX.Element | JSX.Element[];
};

export const Content: FC<ContentProps> = (props:ContentProps) => {

    const {children} = props; 

    return (
        <main>
            
            {children}
        </main>
    )
}