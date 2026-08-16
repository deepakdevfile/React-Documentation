import { createContext, useContext } from 'react';

const LevelContext = createContext(0);

function Heading2({children}){
    const level = useContext(LevelContext);
    switch (level) {
        case 0: 
            throw Error('Heading must be inside a Section!');
        case 1:
            return <h1>{children}</h1>;
        case 2:
            return <h2>{children}</h2>;
        case 3:
            return <h3>{children}</h3>;
        case 4:
            return <h4>{children}</h4>;
        case 5:
            return <h5>{children}</h5>;
        case 6:
            return <h6>{children}</h6>;
        default:
            throw Error('Unknown level: ' + level);
    }
}

function Section2({children}){
    const level = useContext(LevelContext);
    return(
        <section>
            <LevelContext value={level + 1}>
                {children}
            </LevelContext>
        </section>
    )
}

function Page3(){
    return(
        <Section2>
            <Heading2>Title</Heading2>
            <Section2>
                <Heading2>Heading</Heading2>
                <Heading2>Heading</Heading2>
                <Heading2>Heading</Heading2>
                <Section2>
                    <Heading2>Sub-heading</Heading2>
                    <Heading2>Sub-heading</Heading2>
                    <Heading2>Sub-heading</Heading2>
                    <Section2>
                        <Heading2>Sub-sub-heading</Heading2>
                        <Heading2>Sub-sub-heading</Heading2>
                        <Heading2>Sub-sub-heading</Heading2>
                    </Section2>
                </Section2>
            </Section2>
        </Section2>
    )
}

export default function App(){
    return (
        <>
            <Page />
            <Page2 />
            <Page3 />
        </>
    )
}