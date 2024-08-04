import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

export default function Error() {

    const Error = useRouteError()

    return (
        <div className="error">
            <p>Something went wrong!</p>
            <p>{error.status}</p>
            <p>{error.statusText}</p>
            <Link top="/tasks">Tasks</Link>
        </div>
    )
}