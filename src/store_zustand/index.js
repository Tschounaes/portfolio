import create from 'zustand';

const loremText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis lacus nec dui molestie, ut molestie turpis dignissim. In arcu lectus, posuere dapibus nibh et, commodo aliquam ex. Nam volutpat urna quis mauris maximus vulputate. Maecenas hendrerit mattis est, in semper purus consectetur in. Ut euismod vestibulum diam, ac bibendum lorem. Integer maximus eros vitae dolor consectetur tempus. Sed in faucibus est. Proin dapibus eu massa sit amet suscipit. Etiam mi elit, rutrum blandit nisl aliquet, maximus convallis magna. Nullam sed sem quis libero consequat venenatis in sed eros. Integer ac libero sed diam pellentesque posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus.'

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
        setCloseAboutMe: (closeAboutMe) => set({closeAboutMe}),

        //lorem ipsum text
        lorem: loremText,
    })
});

export default useZustand;