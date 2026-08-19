
// Not an Effect: Buying a product
// avoid this
useEffect(() => {
    fetch('/api/buy', {method: 'POST'});
}, []);
// instead do this
function handleClick(){
    fetch('/api/buy', {method: 'POST'});
}


// Not an Effect: Initializing the application 
if(typeof window !== 'undefined'){
    checlAuthToken();
    loadDataFromLocalStorage();
}

function App(){}


// Sending analytics 
useEffect(() => {
    logVisit(url);
}, [url]);

// Fetching data
useEffect(() => {
    let ignore = false;

    async function startFetching(){
        const json = await fetchTodos(userId);
        if(!ignore){
            setTodos(json);
        }
    }

    startFetching();

    return () => {
        ignore = true;
    };
}, [userId]);


// Triggering animations 
useEffect(() => {
    const node = ref.current;
    node.style.opacity = 1;
    return () => {
        node.style.opacity = 0;
    }
})


// Subscribing to event
useEffect(() => {
    function handleScroll(e){
        console.log(window.scrollX, window.scrollY);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, []);



// Controlling non-React widgets
// zoom level
// calling the effect twice without closing it
useEffect(() => {
    const map = mapRef.current;
    map.setZoomLevel(zoomLevel);
}, [zoomLevel]);

// calling the effect twice and also closing it
useEffect(() => {
    const dialog = dialogRef.current;
    dialog.showModal();
    return() => dialog.close();
}, []);

export default function App(){
    return(
        <App />
    )
}