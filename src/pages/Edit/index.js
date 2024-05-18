import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import ElementOrder from '../../components/ElementOrder';
import Editer from '../../components/Editer';
import Parameters from '../../components/Parameters';
import { EditPageStyle, EditPageContainer } from './style';

const EditPage = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/projects/66475685b59227a78bdf4e23')
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError('Error fetching page data: ' + error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <EditPageStyle>
      <Header />
      <EditPageContainer>
        <ElementOrder />
        {data.pages && data.pages.length > 0 ? (
          <Editer data={data.pages[0]} />
        ) : (
          <div>No page data available</div>
        )}
        <Parameters />
      </EditPageContainer>
    </EditPageStyle>
  );
}

export default EditPage;
