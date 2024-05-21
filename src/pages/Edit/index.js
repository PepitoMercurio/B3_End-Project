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

  const [selectedPage, setSelectedPage] = useState(0);
  const [selectedElement, setSelectedElement] = useState(0);

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

  const handleSelectElement = (index) => {
    setSelectedElement(index);
  }

  const handleSelectPage = (index) => {
    setSelectedElement(0);
    setSelectedPage(index);
  };

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

  const handleCreateElement = (page, toAdd) => {
    const updatedData = { ...data };
    if (updatedData.pages && updatedData.pages[page] && updatedData.pages[page].elements && updatedData.pages[page].elements.length < 4) {
      updatedData.pages[page].elements.push(toAdd);
      setData(updatedData);
    } else {
      console.error('Error: Cannot create element. Data structure is not as expected.');
    }
  };

  const handleDeleteElement = (page, index) => {
    const updatedData = { ...data };
    if (updatedData.pages && updatedData.pages[page] && updatedData.pages[page].elements && index >= 0 && index < updatedData.pages[page].elements.length) {
      updatedData.pages[page].elements.splice(index, 1);
      setData(updatedData);
    } else {
      console.error('Error: Cannot delete element. Data structure is not as expected.');
    }
  };

  const handleCreatePage = () => {
    const updatedData = { ...data };
    if (updatedData.pages) {
      updatedData.pages.push({
        title: 'New Page',
        display_title: false,
        elements: [] 
      });
      setData(updatedData);
    } else {
      console.error('Error: Cannot create page. Data structure is not as expected.');
    }
  }

  const handleDeletePage = (index) => {
    handleSelectPage(0);
    const updatedData = { ...data };
    if (updatedData.pages && index >= 0 && index < updatedData.pages.length) {
      updatedData.pages.splice(index, 1);
      setData(updatedData);
    } else {
      console.error('Error: Cannot delete page. Data structure is not as expected.');
    }
  }

  const updateParams = (params) => {
    const updatedData = { ...data };
    if (updatedData.pages && updatedData.pages[selectedPage] && updatedData.pages[selectedPage].elements && selectedElement >= 0 && selectedElement < updatedData.pages[selectedPage].elements.length) {
      updatedData.pages[selectedPage].elements[selectedElement] = params;
      setData(updatedData);
    } else {
      console.error('Error: Cannot update element. Data structure is not as expected.');
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
        <ElementOrder data={data} handleSelectPage={handleSelectPage} handleSelectElement={handleSelectElement} handleCreatePage={handleCreatePage} handleDeletePage={handleDeletePage} handleCreateElement={handleCreateElement} handleDeleteElement={handleDeleteElement} />
        {data.pages && data.pages.length > 0 ? (
          <Editer data={data.pages[selectedPage].elements} />
        ) : (
          <div>No page data available</div>
        )}
        <Parameters element={data.pages[selectedPage].elements[selectedElement]} updateParams={updateParams} />
      </EditPageContainer>
    </EditPageStyle>
  );
}

export default EditPage;
