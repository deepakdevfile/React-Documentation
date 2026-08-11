function getFinalState(baseState, queue){
    let finalState = baseState;
    for(let update of queue){
        if(typeof update === 'function'){
            finalState = finalState + 1;
        } else {
            finalState = update;
        }
    }
    return finalState;
}

function increment(n){
    return n + 1;
}

increment.toString = () => 'n => n+1';

function TestCase({ baseState, queue, expected }){
    const actual = getFinalState(baseState, queue);
    return(
        <>
            <p>
                Base state: <b>{baseState}</b>
            </p>
            <p>
                Queue: <b>[{queue.join(', ')}]</b>
            </p>
            <p>
                Expected result: <b>{expected}</b>
            </p>
            <p style={{color: actual === expected ? 'green': 'red'}}>
                Your result: <b>{actual}</b> {' '} ({actual === expected ? 'correct' : 'wrong'})
            </p>
        </>
    )
}

export default function App(){
    return(
        <>
            <TestCase baseState={0} queue={[1, 1, 1]} expected={1} />
            <hr />
            <TestCase baseState={0} queue={[increment, increment, increment]} expected={3} />
            <hr />
            <TestCase baseState={0} queue={[5, increment, ]} expected={6} />
            <hr />
            <TestCase baseState={0} queue={[5, increment, 42, ]} expected={42}
            />
        </>
    )
}