import { useState } from "react";

let images = [{
  place: 'Penang, Malaysia',
  src: 'https://react.dev/images/docs/scientists/FJeJR8M.jpg'
}, {
  place: 'Lisbon, Portugal',
  src: 'https://react.dev/images/docs/scientists/dB2LRbj.jpg'
}, {
  place: 'Bilbao, Spain',
  src: 'https://react.dev/images/docs/scientists/z08o2TS.jpg'
}, {
  place: 'Valparaíso, Chile',
  src: 'https://react.dev/images/docs/scientists/Y3utgTi.jpg'
}, {
  place: 'Schwyz, Switzerland',
  src: 'https://react.dev/images/docs/scientists/JBbMpWY.jpg'
}, {
  place: 'Prague, Czechia',
  src: 'https://react.dev/images/docs/scientists/QwUKKmF.jpg'
}, {
  place: 'Ljubljana, Slovenia',
  src: 'https://react.dev/images/docs/scientists/3aIiwfm.jpg'
}];


function Gallery(){
    const [image, setImage] = useState(images[0]);
    const [index, setIndex] = useState(0);

    const hasNext = (index !== images.length - 1);

    function handleClick(){
        if(hasNext){
            setIndex(index + 1);
            setImage(images[index + 1]);
        } else{
            setIndex(0);
            setImage(images[0]);
        }
        
    }

    return(
        <>
            <button onClick={handleClick}>Next</button>
            <h3>Image {index + 1} of {images.length} </h3>
            <img 
                src={image.src} 
                alt={`Image of ${image.place}`} 
                style={{width:"200px", height:"200px"}}
                key={index}
            />
            <p>{image.place}</p>
        </>
    )
}

export default function App(){
    return (
        <Gallery />
    )
}