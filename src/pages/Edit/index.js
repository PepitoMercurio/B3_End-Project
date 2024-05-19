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

  const path = window.location.pathname;
  const parts = path.split('/');
  const id = parts[1];

  useEffect(() => {
    axios.get(`http://localhost:3001/projects/${id}`)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError('Error fetching page data: ' + error.message);
        setIsLoading(false);
      });
  }, []);


  const handleSendData = () => {
    axios({
      method: 'PUT',
      url: `http://localhost:3001/projects/${id}`,
      data: data
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }

  const handleCreateElement = () => {
    const updatedData = { ...data };
    if (updatedData.pages && updatedData.pages[0] && updatedData.pages[0].elements && updatedData.pages[0].elements.length < 4) {
      updatedData.pages[0].elements.push('New Element');
      setData(updatedData);
    } else {
      console.error('Error: Cannot create element. Data structure is not as expected.');
    }
  };

  const handleDeleteElement = (index) => {
    const updatedData = { ...data };
    if (updatedData.pages && updatedData.pages[0] && updatedData.pages[0].elements && index >= 0 && index < updatedData.pages[0].elements.length) {
      updatedData.pages[0].elements.splice(index, 1);
      setData(updatedData);
    } else {
      console.error('Error: Cannot delete element. Data structure is not as expected.');
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <EditPageStyle>
      <Header handleSendData={handleSendData} />
      <EditPageContainer>
        <ElementOrder elements={data.pages} handleCreateElement={handleCreateElement} handleDeleteElement={handleDeleteElement} />
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
