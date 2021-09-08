import create from 'zustand';

const useZustand = create( (set) => {
    return ({
        // The selected navigation item, reflecting the page of the website
        select: 0,
        setSelect: (select) => set( {select} ),
    })
});

export default useZustand;