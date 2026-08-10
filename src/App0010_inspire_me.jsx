import React from 'react';

let quotes = [
    "Don’t let yesterday take up too much of today.” — Will Rogers",
    "Ambition is putting a ladder against the sky.",
    "A joy that's shared is a joy made double.",
];

function FancyText({ title, text }) {
    return title
        ? <h1 className='fancy title'>{text}</h1>
        : <h3 className='fancy cursive'>{text}</h3>
}

function Copyright({ year }) {
    return <p className='small'>©️ {year}</p>;
}

function InspirationGenerator({ children }) {
    const [index, setIndex] = React.useState(0);
    const quote = quotes[index];
    const next = () => setIndex((index + 1) % quotes.length);

    return (
        <>
            <p>Your inspirational quote is:</p>
            <FancyText text={quote} />
            <button onClick={next}>Inspire me again</button>
            {children}
        </>
    );
}

export default function App() {
    return (
        <>
            <FancyText title text="Get Inspired App" />
            <InspirationGenerator>
                <Copyright year={2004} />
            </InspirationGenerator>
        </>
    );
}

