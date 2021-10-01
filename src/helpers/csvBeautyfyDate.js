const csvBeautyfyDate = (date, lang, months) => {
    const defaultLang = 'en'
    const dateData = date.split('/');
    let month, day, year;
    year = Number(dateData[2]) < 93 ? '20' + dateData[2] : '19' + dateData[2];
    day = Number(dateData[1])
    month = months.filter(month => month.id === dateData[0])[0][lang ? lang : defaultLang];
    return lang === 'en' || 'en_short' ? 
    `${month} ${day}, ${year}` :
    `${day} ${month}, ${year}`;
   
}


export default csvBeautyfyDate;