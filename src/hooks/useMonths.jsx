import { useState, useEffect } from "react";
import { csv } from "d3-fetch";
import MonthTable from '../assets/tabels/months.csv'

const useMonths = () => {
    const [months, setMonths] = useState([]);

    useEffect(()=> {
        csv(MonthTable).then((monthData => {
            setMonths(monthData);
        }))
    }, []);
    
    return months;
};

export default useMonths;