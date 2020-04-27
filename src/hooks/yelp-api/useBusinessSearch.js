import { useState, useEffect } from 'react';
import * as api from './api';

export function useBusinessSearch(term, location) {
  // Custom to have name of the hook and its setter as list params
  const [businesses, setBusinesses] = useState([]);
  const [amountResults, setAmountResults] = useState();
  const [searchParams, setSearchParams] = useState({term,location});

  useEffect(() => {
    // Use the setters to clear params when state is changed
    setBusinesses([]);
    const fetchData = async () => {
      try { 
        const rawData = await api.get('/businesses/search', searchParams);
        const resp = await rawData.json();
        setBusinesses(resp.businesses);
        setAmountResults(resp.total);
      } catch(e) {
        console.error(e);
      }
    };
    fetchData();
  }, [searchParams]);

  // Typically return array when using hooks
  return [businesses, amountResults, searchParams, setSearchParams];
}