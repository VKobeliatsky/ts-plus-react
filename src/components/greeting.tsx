import * as React from 'react';

export interface Props {
    greeting: string;
}

export default ({greeting}: Props) => <h1>{greeting}</h1>;