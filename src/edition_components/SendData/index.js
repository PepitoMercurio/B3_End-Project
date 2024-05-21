import axios from "axios";
import { IoMdAddCircleOutline } from "react-icons/io";
import styled from "styled-components";

const AddButton = styled(IoMdAddCircleOutline)`
    color: white;
    font-size: 25px;
    cursor: pointer;
`;

const CreateData = ({ id_user }) => {
    const handleCreateData = () => {
        const title = prompt("Please enter a title:");
        if (!title) {
            alert("Title is required to create data.");
            return;
        }

        const data = {
            id_user: id_user,
            title: title,
            pages: [
                {
                    title: 'Sans Titre',
                    display_title: false,
                    elements: []
                }
            ]
        };

        axios({
            method: 'POST',
            url: 'http://localhost:3001/projects',
            data: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <AddButton onClick={handleCreateData} />
    );
};

export default CreateData;
