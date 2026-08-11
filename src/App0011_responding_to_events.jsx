// adding event handler 
function Button(){
    function handleClick(){
        alert('You molested the button');
    }

    return (
        <button onClick={handleClick}>
            Don't Click Me!
        </button>
    )
}

// reading props in event handlers
function AlertButton({message, children}){
    function handleClick(){
        alert(message);
    }

    return(
        <button onClick={handleClick}>
            {children}
        </button>
    )
}


function Toolbar(){
    return (
        <div>
            <AlertButton message="Playing!">
                Play Movie
            </AlertButton>
            <AlertButton message="Uploading!">
                Upload Image
            </AlertButton>
        </div>
    )
}

// passing event handler as props
function Button2({onClick, children}){
    return(
        <button onClick={onClick}>
            {/* onClick eventhandler is not defined in this component */}
            {/* onClick is passed as prop */}
            {children}
        </button>
    )
}

function PlayButton({movieName}){
    function handlePlayClick(){
        alert(`Playing ${movieName}!`);
    }
    return (
        <Button2 onClick={handlePlayClick}> 
            {/* passing handlePlayClick as prop */}
            Play "{movieName}"
        </Button2>
    )
}

function UploadButton(){
    function handleClick(){
        return(
            alert('Uploading!')
        )
    }
    return(
        <Button2 onClick={handleClick} >
            {/* passing handlePlayClick as prop */}
            Upload Image
        </Button2>
    )
}

function Toolbar2(){
    return(
        <div>
            <PlayButton movieName="Hero's delivery service" />
            <UploadButton />
        </div>
    )
}

// naming event handler props 
function Button3({children, onSmash}){
    return(
        <button onClick={onSmash}>
            {children}
        </button>
    )
}

function Toolbar3(){
    function onPlayMovie(){
        // named the event handler onSmash
        // not onClick, like a custom name
        return(
            alert('Playing!')
        )
    }
    function onUploadImage(){
        return(
            alert('Uploading!')
        )
    }
    return (
        <div>
            <Button3 onSmash={onPlayMovie}>
                Play Movie
            </Button3>
            <Button3 onSmash={onUploadImage}>
                Upload Image
            </Button3>
        </div>
    )
}

export default function App(){
    return (
        <>
            <Button />
            <br />
            <br />
            <Toolbar />
            <br />
            <Toolbar2 />
            <br />
            <Toolbar3 />
        </>
    );
}