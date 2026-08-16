import { createContext, useContext } from "react";

// level passing using props 
function Heading({children, level}){
    switch(level){
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

function Section({children}){
    return(
        <section>
            {children}
        </section>
    )
}

function Page(){
    return (
        <Section>
            <Heading level={1}>Title</Heading>
            <Heading level={2}>Heading</Heading>
            <Heading level={3}>Sub-heading</Heading>
            <Heading level={4}>Sub-sub-heading</Heading>
            <Heading level={5}>Sub-sub-sub-heading</Heading>
            <Heading level={6}>Sub-sub-sub-sub-heading</Heading>
        </Section>
    )
}

function Page2(){
    return(
        <Section>
            <Heading level={1}>Title</Heading>
            <Section>
                <Heading level={2}>Heading</Heading>
                <Heading level={2}>Heading</Heading>
                <Heading level={2}>Heading</Heading>
                <Section>
                    <Heading level={3}>Sub-heading</Heading>
                    <Heading level={3}>Sub-heading</Heading>
                    <Heading level={3}>Sub-heading</Heading>
                    <Section>
                        <Heading level={4}>Sub-sub-heading</Heading>
                        <Heading level={4}>Sub-sub-heading</Heading>
                        <Heading level={4}>Sub-sub-heading</Heading>
                    </Section>
                </Section>
            </Section>
        </Section>
    )
}

// level passing using context 

const LevelContext = createContext(1);

function Heading2({children}){
    const level = useContext(LevelContext);
    switch (level) {
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

function Section2({children, level}){
    return(
        <section>
            <LevelContext value={level}>
                {children}
            </LevelContext>
        </section>
    )
}

function Page3(){
    return(
        <Section2 level={1}>
            <Heading2>Title</Heading2>
            <Section2 level={2}>
                <Heading2>Heading</Heading2>
                <Heading2>Heading</Heading2>
                <Heading2>Heading</Heading2>
                <Section2 level={3}>
                    <Heading2>Sub-heading</Heading2>
                    <Heading2>Sub-heading</Heading2>
                    <Heading2>Sub-heading</Heading2>
                    <Section2 level={4}>
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