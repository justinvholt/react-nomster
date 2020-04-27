import React from 'react';
import { NavBar } from '../NavBar/NavBar';
import { SubNav } from '../NavBar/SubNav/SubNav';
import { SearchResultsSummary } from './SearchResultsSummary/SearchResultsSummary';
import { SearchResults } from './SearchResults/SearchResults';
import { useLocation } from 'react-router-dom';
import { useBusinessSearch } from '../hooks/yelp-api/useBusinessSearch';

export function Search() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const term = params.get('find_desc');
  const locationParam = params.get('find_loc');
  const [businesses, amountResults, searchParams, setSearchParams] = useBusinessSearch(term, locationParam);

  return (
    <div>
      <NavBar term={term} location={locationParam}/>
      <SubNav/>
      <SearchResultsSummary term={term} location={locationParam}/>
      <SearchResults businesses={businesses}/>
    </div>
  );
}