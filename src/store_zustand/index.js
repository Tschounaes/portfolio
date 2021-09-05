import create from 'zustand';

const useZustand = create( (set) => {
    return ({
        select: 0,
        setSelect: (select) => set( {select} ),
    })
});

export default useZustand;