import { createContext, useContext } from 'react';

const LevelContext = createContext(0);

function Heading({ children }) {
    const level = useContext(LevelContext);
    switch(level){
        case 0:
            throw Error('Heading must be inside a Section!');
        case 1:
            return <h1>{children}</h1>
        case 2: 
            return <h2>{children}</h2>
        case 3:
            return <h3>{children}</h3>
        case 4:
            return <h4>{children}</h4>
        case 5:
            return <h5>{children}</h5>
        case 6:
            return <h6>{children}</h6>
        default:
            throw Error('Unknown level: ' + level);
    }
}

function Section({ children }) {
    const level = useContext(LevelContext);
    return (
        <section>
            <LevelContext value = {level + 1}>
                {children}
            </LevelContext>
        </section>
    )
}

function Post({ title, body }) {
    return (
        <Section>
            <Heading>
                {title}
            </Heading>
            <p><i>{body}</i></p>
        </Section>
    )
}

function RecentPosts(){
    return(
        <Section>
            <Heading>Recent Posts</Heading>
            <Post
                title='Flavors of Lisbon'
                body='...those pasteis de nata!'
            />
            <Post 
                title='Buenos Aires in the rhythm of tango'
                body='I loved it!'
            />
        </Section>
    )
}

function AllPosts(){
    return(
        <Section>
            <Heading>Posts</Heading>
            <RecentPosts />
        </Section>
    )
}

function ProfilePage(){
    return(
        <Section>
            <Heading>My Profile</Heading>
            <Post
                title="Hello traveller!"
                body="Read about my adventures."
            />
            <AllPosts/>
        </Section>
    )
}

export default function App(){
    return(
        <ProfilePage />
    )
}