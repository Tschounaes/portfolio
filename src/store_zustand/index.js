import create from 'zustand';

const useZustand = create( (set) => {
    return ({
        // The selected navigation item, reflecting the page of the website
        select: 0,
        setSelect: (select) => set( {select} ),

        //Is the navigation open?
        navOpen: false,
        setNavOpen: (navOpen) => set({navOpen}),


        //Is the 'About Me' / CV -section open?
        aboutOpen: window.innerWidth > 1000,
        setAboutOpen: (aboutOpen) => set({aboutOpen}),

        //Close About Me highlighting
        closeAboutMe: false,
        setCloseAboutMe: (closeAboutMe) => set({closeAboutMe})
    })
});

export default useZustand;