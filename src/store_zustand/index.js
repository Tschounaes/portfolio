import create from 'zustand';

const useZustand = create( (set) => {
    return ({
        // SELECT IMAGE IN GALLERY
        hello: 'world',
        setHello: (hello) => set( {hello} ),
    })
});

export default useZustand;