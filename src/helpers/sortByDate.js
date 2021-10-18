const sortByDate = (a,b,cell) => {
    const yearA = parseInt(a[cell].split('/')[2],10);
    const yearB = parseInt(b[cell].split('/')[2],10);
    if (yearA === yearB) {
        const monthA = parseInt(a[cell].split('/')[0],10);
        const monthB = parseInt(b[cell].split('/')[0],10);
        return monthB - monthA;
    } else {
        return yearB - yearA;
    }
}

export default sortByDate;