import { TitleComponent } from "../Title";
import axios from "axios";

const SendData = () => {

    const data = {
        id_user : "OKOK",
        title : "OKOK",
        share_link : "OKOK",
        pages : [
            {
                components : "TitleComponent"
            }
        ]
    }


    const handleSendData = () => {
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
        <div>
        <button onClick={handleSendData}>Send Data</button>
        </div>
    );
};

export default SendData;