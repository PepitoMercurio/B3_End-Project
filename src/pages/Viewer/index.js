import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ViewerStyle, ViewerBox, ViewerNavigation, LeftArrow, RightArrow, ViewerInput } from './style';
import Editer from '../../components/Editer';
import Header from '../../components/Header';

const Viewer = () => {
    const [page, setPage] = useState(1);
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const path = window.location.pathname;
    const parts = path.split('/');
    const id = parts[1];

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            axios(
                {
                    method: 'GET',
                    url: `http://localhost:3001/projects/${id}`,
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    },
                }
            ).then((response) => {
                setData(response.data);
                setIsLoading(false);
            }).catch((error) => {
                setError('Error fetching page data: ' + error.message);
                setIsLoading(false);
            });
        };

        if (id) {
            fetchData();
        }
    }, [id]);

    const handlePageChange = (e) => {
        const newPage = parseInt(e.target.value, 10);
        if (!isNaN(newPage) && newPage >= 1 && newPage <= (data.pages ? data.pages.length : 0)) {
            setPage(newPage);
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data.pages || !data.pages[page - 1]) {
        return <div>No data available for page {page}</div>;
    }

    return (
        <ViewerStyle>
            <Header />
            <ViewerBox>
                <ViewerNavigation>
                    {page > 1 ? (
                        <LeftArrow onClick={() => setPage(page - 1)} />
                    ) : (
                        <LeftArrow isFake={true} />
                    )}
                    <ViewerInput
                        type="number"
                        value={page}
                        onChange={handlePageChange}
                        min="1"
                        max={data.pages.length}
                    />
                    {page < data.pages.length ? (
                        <RightArrow onClick={() => setPage(page + 1)} />
                    ) : (
                        <RightArrow isFake={true} />
                    )}
                </ViewerNavigation>
                <Editer data={data.pages[page - 1].elements} width="80vw" />
            </ViewerBox>
        </ViewerStyle>
    );
}

export default Viewer;
