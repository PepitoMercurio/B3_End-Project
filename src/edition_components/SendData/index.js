import axios from "axios";

const SendData = ({ data }) => {

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