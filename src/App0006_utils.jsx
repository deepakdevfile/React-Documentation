export default function getImageUrl(person, size = 'b'){
    return (
        './src/assets/' + person.imageId + size + ".jpg"
    );
}