
// Fetching data
function SearchResults({query}){
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // 🔴 Avoid: Fetching without cleanup logic
    fetchResults(query, page).then(json => {
      setResults(json);
    });
  }, [query, page]);

  function hadnleNextPageClick(){
    setPage(page + 1);
  }
  // ...
}

function SearchResults({query}){
  const [results, setResults] = useState([]);
  const [page,setPage] = useState(1);
  useEffect(() => {
    let ignore = false;
    fetchResults(query, page).then(json => {
      if(!ignore){
        setResults(json);
      }
    });
    return () => {
      ignore = true;
    };
  }, [query, page]);

  function handleNextPageClick(){
    setPage(page + 1);
  }
  // ...
}

function SearchResults({query}){
  const [page, setPage] = useState(1);
  const params = new URLSearchParams({ query, page });
  const results = useData('/api/search?${params}');

  function handleNextPageClick(){
    setPage(page + 1);
  }
  // ...
}

function useData(url){
  const [data, setData] = useState(null);
  useEffect(() => {
    let ignore = false;
    fetch(url)
      .then(response => response.json())
      .then(json => {
        if(!ignore){
          setData(json);
        }
      });
    return () => {
      ignore = true;
    };
  }, [url]);
  return data;
}








// Subscribing to an external store
function useOnlineStatus(){
  // Not ideal: Manual store subscription in an Effect
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function updateState(){
      setIsOnline(navigator.onLine)
    }

    updateState();

    window.addEventListener('online', updateState);
    window.addEventListener('offline', updateState);
    return () => {
      window.removeEventListener('online', updateState);
      window.removeEventListener('offline', updateState);
    };
  }, []);
  return isOnline;
}

function ChatIndicator(){
  const isOnline = useOnlineStatus();
  // ...
}

function subscribe(callback){
  window.addEventListener('online', callback);
  window.addEventListener('offline', vallback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}
function useOnlineStatus(){
  // ✅ Good: Subscribing to an external store with a built-in Hook
  return useSuncExternalStore(
    subscribe,
    () => navigator.onLine,
    () => true
  );
}
function ChatIndicator()[
  const isOnline = useOnlineStatus();
]






// Passing data to the parent 
function Child({onFetched}){
  const data = useSomeAPI();
  // 🔴 Avoid: Passing data to the parent in an Effect
  useEffect(() => {
    if(data){
      onFetched(data);
    }
  }, [onFetched, data]);
  // ...
}
function Parent(){
  const [data, setData] = useState(null);
  // ...
  return <Child onFetched={setData} />
}


function Child({data}){
  // ...
}
function Parent(){
  const data = useSomeAPI();
  // ...
  // ✅ Good: Passing data down to the child
  return <Child data = {data} />;
  // ...
}







// Notifying parent components about state changes 
function Toggle({onChange}){
  const [isOn, setIsOn] = useState(false);

  // 🔴 Avoid: The onChange handler runs too late
  useEffect(() => {
    onChange(isOn);
  }, [isOn, onChange]);

  function handleClick(){
    setIsOn(!isOn);
  }

  function handleDragEnd(e){
    if(isCloserToRightEdge(e)){
      setIsOn(true);
    } else {
      setIsOn(false);
    }
  }

  // ...
}

function Toggle({onChange}){
  const [isOn, setIsOn] = useState(false);

  function updateToggle(nextIsOn){
    // ✅ Good: Perform all updates during the event that caused them
    setIsOn(nextIsOn);
    onChange(nextIsOn);
  }

  function handleClick(){
    updateToggle(!isOn);
  }

  function handleDragEnd(e){
    if(isCloserToRightEdge(e)){
      updateToggle(true);
    } else{
      updateToggle(false);
    }
  }

  // ...
}

// ✅ Also good: the component is fully controlled by its parent
function Toggle({ isOn, onChange}){
  function handleClick(){
    onChange(!isOn);
  }

  function handleDragEnd(e){
    if(isCloserToRightEdge(e)){
      onChange(true);
    } else {
      onChange(false);
    }
  }

  // ...
}






// Initializing the application
function App(){
  // 🔴 Avoid: Effects with logic that should only ever run once
  useEffect(() => {
    loadDataFromLocalStorage();
    checkAuthToken();
  }, []);
}

let didInit = false;
function App(){
  useEffect(() => {
    if(!didInit){
      didInit = true;
      // ✅ Only runs once per app load
      loadDataFromLocalStorage();
      checkAuthToken();
    }
  }, []);
  // ...
}

if(typeof window !== 'undefined'){
  // ✅ Only runs once per app load
  checkAuthToken();
  loadDataFromLocalStorage();
}

function App(){
  // ...
}



// chains of computations 
function Game(){
  const [card, setCard] = useState(null);
  const [goldeCardCount, setGoldCardCount] = useState(0);
  const [round, setRound] = useState(1);
  const [isGameOver, setIsGameOver] = useState(false);

  // 🔴 Avoid: Chains of Effects that adjust the state solely to trigger each other
  useEffect(() => {
    if(card !== null && card.gold){
      setGoldCardCount(c => c + 1);
    }
  }, [card]);

  useEffect(() => {
    if(goldCardCount > 3){
      setRound(r => r + 1);
      setGoldCardCount(0);
    }
  }, [goldCardCount]);

  useEffect(() => {
    if(round > 5){
      setIsGameOver(true);
    }
  }, [round]);

  useEffect(() => {
    alert('Good game!');
  }, [isGameOver]);

  function handlePlaceCard(nextCard){
    if(isGameOver){
      throw Error('Game already ended.');
    } else{
      setCard(nextCard);
    }
  }
}

function Game(){
  const [card, setCard] = useState(null);
  const [goldCardCount, setGoldCardCount] = useState(0);
  const [round, setRound] = useState(1);

  // ✅ Calculate what you can during rendering
  const isGameOver = round > 5;

  function handlePlaceCard(nextCard){
    if(isGameOver){
      throw Error('Game already ended.');
    }
  }

  // ✅ Calculate all the next state in the event handler
  setCard(nextCard);
  if(nextCard.gold){
    if(goldCardCount < 3){
      setGoldCardCount(goldCardCount + 1);
    } else{
      setGoldCardCount(0);
      setRound(round + 1);
      if(round === 5){
        alert('Good game!');
      }
    }
  }
}





// Sending a POST Request
function Form(){
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    post('/analytics/event', {eventName: 'visit_form'});
  }, []);

  const [jsonToSubmit, setJsonToSubmit] = useState(null);
  useEffect(() => {
    if(jsonToSubmit !== null){
      post('/api/register', jsonToSubmit);
    }
  }, [jsonToSubmit]);

  function handleSubmit(e){
    e.preventDefault();
    setJsonToSubmit({firstName, lastName});
  }
}

function Form(){
  const[firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    post('/analytics/event', {eventName: 'visit_form'});
  }, []);

  function handleSubmit(e){
    e.preventDefault();
    post('/api/register', {firstName, lastName});
  }
}




// Sharing logic between event handlers 
function ProductPage({ product, addToCart }){

  useEffect(() => {
    if(product.isInCart){
      showNotification(`Added ${product.name} to the shopping cart!`);
    }
  }, [product]);

  function handleBuyClick(){
    addToCat(product);
  }

  function handleCheckoutClick(){
    addToCart(product);
    navigateTo('/checkout');
  }

  // ...
}

function ProductPage({product, addToCart}){
  function buyProduct(){
    addToCart(product);
    ahowNotification(`Added ${product.name} to the shopping cart!`);
  }

  function handleBuyClick(){
    buyProduct();
  }

  function handleCheckoutClick(){
    butProduct();
    navigateTo('/checkout');
  }
}




// Adjusting some state when a prop changes
function List({ items }){
  const [isReverse, setIsReverse] = useState(false);
  const [selection, setSelection] = useState(null);

  // 🔴 Avoid: Adjusting state on prop change in an Effect
  useEffect(() => {
    setSelection(null);
  }, [items]);
}

function List({ items }){
  const [isReverse, setIsReverse] = useState(false);
  const [selection, setSelection] = useState(null);

  const [prevItems, setPrevItems] = useState(items);
  if(items !== prevItems){
    setPrevItems(items);
    setSelection(null);
  }
}

function Lst({ items }){
  const [isReverse, setIsReverse] = useState(false);
  const [selected, setSelected] = useState(null);

  const selection = items.find(items => item.id === selectionId) ?? null;
}



// Resetting all state when a prop changes
export default function ProfilePage({ userId }) {
  const [comment, setComment] = useState('');
  // 🔴 Avoid: Resetting state on prop change in an Effect
  useEffect(() => {
    setComment('');
  }, [userId]);
  // ...
}
// don't do this, instead do this
export default function ProfilePage({ userId }) {
  return (
    <Profile
      userId={userId}
      key={userId}
    />
  );
}

function Profile({ userId }) {
  // ✅ This and any other state below will reset on key change automatically
  const [comment, setComment] = useState('');
  // ...
}


// Caching expensive calculations 
function TodoList({ todos, filter }) {
  const [newTodo, setNewTodo] = useState('');

  // 🔴 Avoid: redundant state and unnecessary Effect
  const [visibleTodos, setVisibleTodos] = useState([]);
  useEffect(() => {
    setVisibleTodos(getFilteredTodos(todos, filter));
  }, [todos, filter]);

  // ...
}
// do not do this, instead do this 
function TodoList({ todos, filter }) {
  const [newTodo, setNewTodo] = useState('');
  // ✅ This is fine if getFilteredTodos() is not slow.
  const visibleTodos = getFilteredTodos(todos, filter);
  // ...
}
// for expensive calculation we can also use useMemo function 
function TodoList({todos, filter}){
    const [newTodo, setNewTodo] = useState('');
    const visibleTodos = useMemo(() => {
        return getFilteredTodos(todos, filter);
    }, [todos, filter]);
}



// Updating state based on props or state 
function Form() {
  const [firstName, setFirstName] = useState('Taylor');
  const [lastName, setLastName] = useState('Swift');

  // 🔴 Avoid: redundant state and unnecessary Effect
  const [fullName, setFullName] = useState('');
  useEffect(() => {
    setFullName(firstName + ' ' + lastName);
  }, [firstName, lastName]);
  // ...
}
// do not do this
// instead do this 
function Form() {
  const [firstName, setFirstName] = useState('Taylor');
  const [lastName, setLastName] = useState('Swift');
  // ✅ Good: calculated during rendering
  const fullName = firstName + ' ' + lastName;
  // ...
}

export default function App(){
    return(

    )
}