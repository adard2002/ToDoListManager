import {useEffect, useState } from 'react';
import { useAuth } from '../contexts/auth';

export default function useFetch(url) {
  const { user } = useAuth();

  useEffect(() => {
    console.log('Run constantly');
    document.title = 'Updated at time: ' + new Date();
  });

  const [shouldFetch, setShouldFetch] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    if(!shouldFetch) return;

    async function doFetch() {
      let headers = {};

      if (user) {
        headers['Authorization'] = `Bearer ${user.token}`;
      }
      let response = await fetch(url, {headers});
    }
    let response = await fetch(url, {headers});
    let body = await response.json();
    setData(body);
    
  })
}