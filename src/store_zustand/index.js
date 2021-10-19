import create from 'zustand';

const loremText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis lacus nec dui molestie, ut molestie turpis dignissim. In arcu lectus, posuere dapibus nibh et, commodo aliquam ex. Nam volutpat urna quis mauris maximus vulputate. Maecenas hendrerit mattis est, in semper purus consectetur in. Ut euismod vestibulum diam, ac bibendum lorem. Integer maximus eros vitae dolor consectetur tempus. Sed in faucibus est. Proin dapibus eu massa sit amet suscipit. Etiam mi elit, rutrum blandit nisl aliquet, maximus convallis magna. Nullam sed sem quis libero consequat venenatis in sed eros. Integer ac libero sed diam pellentesque posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus.'

const useZustand = create( (set) => {
    return ({
        // The selected navigation item, reflecting the page of the website
        select: 0,
        setSelect: (select) => set( {select} ),

        // Is the navigation open?
        navOpen: false,
        setNavOpen: (navOpen) => set({navOpen}),

        // Is the 'About Me' / CV -section open?
        aboutOpen: window.location.hash === '#/' && window.innerWidth > 1024,
        setAboutOpen: (aboutOpen) => set({aboutOpen}),

        //Is the 'footer' open?
        footerOpen: false,
        setFooterOpen: (footerOpen) => set({footerOpen}),


        // Close About Me highlighting
        closeAboutMe: false,
        setCloseAboutMe: (closeAboutMe) => set({closeAboutMe}),

        // Lorem ipsum text
        lorem: loremText,

        // All the search inputs as object
        searchInputs: {},
        setSearchInputs: (searchInputs) => set(state => ({searchInputs: {...state.searchInputs, ...searchInputs}})),
    })
});


export default useZustand;