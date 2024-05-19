import axios from "axios";
import { IoMdAddCircleOutline } from "react-icons/io";
import styled from "styled-components";

const AddButton = styled(IoMdAddCircleOutline)`
    color: white;
    font-size: 25px;
    cursor: pointer;
`;

const CreateData = ({ id_user, title }) => {

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

    const handleCreateData = () => {
        axios({
            method: 'POST',
            url: 'http://localhost:3001/projects',
            data: data
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <AddButton onClick={handleCreateData}>Send Data</AddButton>
    );
};

export default CreateData;