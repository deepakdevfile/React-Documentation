const poem = {
    lines: [
        'I write, erase, rewrite',
        'Erase again, and then',
        'A poppy blooms.'
    ]
};

function Poem() {
    let output = [];

    poem.lines.map((line, index) => {
        output.push(<hr />)
        output.push(<p>{line}</p>)
    })

    output.shift();

    return (
        <article>
            {output}
        </article>
    );
}

export default function App(){
    return (
        <Poem />
    )
}