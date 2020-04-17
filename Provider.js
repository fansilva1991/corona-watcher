import React, {useState, useEffect} from 'react';
import {context} from './Context';

const CoronaProvider = ({children}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      'https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true',
    )
      .then((res) => {
        return res.json();
      })
      .then((dataInJson) => {
        setData(dataInJson);
      });
  }, []);

  const {Provider} = context;
  return <Provider value={data}>{children}</Provider>;
};

export default CoronaProvider;
