// only solution to the given question not a complete file

export default function ColorSwitch({onChangeColor}) {
    return (
        <button onClick={e => { e.stopPropagation(); onClick(); }}>
            Change color
        </button>
    );
}