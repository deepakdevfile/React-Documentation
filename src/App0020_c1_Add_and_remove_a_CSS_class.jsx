import { useState } from 'react';

function Picture() {
  const [active, setActive] = useState(false);
  function handleClick(){
    setActive(!active);
  }
  return (
    <div onClick={handleClick} className={active ? "background background--active" : "background"}>
      <img
        onClick={handleClick}
        className={active ? "picture" : "picture picture--active"}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://react.dev/images/docs/scientists/5qwVYb1.jpeg"
      />
    </div>
  );
}

export default function App(){
    return(
        <Picture />
    )
}