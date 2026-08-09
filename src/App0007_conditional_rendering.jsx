function Item({isPacked, name}){
    // if(isPacked){
    //     return <li className="item">✅ {name}</li>
    // } else{
    //     return <li className="item">{name}</li>
    // }

    // return(
    //     <li className="item">
    //         {isPacked ? ( 
    //             <del>
    //                 {"✅ "+ name}
    //             </del> 
    //         ) : (
    //             name
    //         )}
    //     </li>
    // )

    // return(
    //     <li className="item">
    //         {name} {isPacked && '✅'}
    //     </li>
    // )
    
    let itemContent = name;
    if(isPacked){
        itemContent = "✅ " + name;
    }
    return (
        <li className="item">{itemContent}</li>
    )
}

function PackingList(){
    return (
        <section>
            <h1>Sally's Packing List</h1>
            <ul>
                <Item
                    isPacked={true}
                    name="Space suit"
                />
                <Item 
                    isPacked={true}
                    name="Helmet with a golden leaf"
                />
                <Item 
                    isPacked={false}
                    name="Photo of Tam"
                />
            </ul>
        </section>
    )
}

export default function App(){
    return(
        <PackingList />
    )
}