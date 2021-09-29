const secToTimestamp = (sec) => {
    let hFloat = sec/60/60;
    let h = Math.floor(hFloat);
    let minFloat = (hFloat-h)*60;
    let min = Math.floor(minFloat);
    let sFloat = (minFloat-min)*60
    let s = sFloat.toFixed(2);
    return `${h.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
}

export default secToTimestamp;