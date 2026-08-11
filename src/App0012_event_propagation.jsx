// Event propagation 
function Toolbar(){
    function handleDivClick(){
        return(
            alert('You clicked on the toolbar!')
        );
    }
    function handlePlay(){
        return(
            alert('Playing!')
        );
    }
    function handleUpload(){
        return(
            alert('Uploading!')
        );
    }

    return(
        <div className="Toolbar" onClick={handleDivClick}>
            <button onClick={handlePlay}>
                Play Movie
            </button>
            <button onClick={handleUpload}>
                Upload image
            </button>
        </div>
    )
}

// Stopping propagation
function Button({onClick, children}){
    return(
        <button onClick={e => {e.stopPropagation(); onClick();}}>
            {children}
        </button>
    )
}

function Toolbar2(){
    function handleDivClick() {
        return (
            alert('You clicked on the toolbar!')
        );
    }
    function handlePlay() {
        return (
            alert('Playing!')
        );
    }
    function handleUpload() {
        return (
            alert('Uploading!')
        );
    }

    return (
        <div className="Toolbar" onClick={handleDivClick}>
            <Button onClick={handlePlay}>
                Play Movie
            </Button>
            <Button onClick={handleUpload}>
                Upload image
            </Button>
        </div>
    )
}

// preventing default behavior 
function Signup(){
    function handleSubmit(e){
        e.preventDefault();
        // it prevent page from reloading. 
        alert('Submitting!');
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text"/>
            <button type="submit">Send</button>
        </form>
    )
}

export default function App(){
    return(
        <>
            <Toolbar />
            <Toolbar2 />
            <Signup />
        </>
    )
}