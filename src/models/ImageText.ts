import axios from 'axios';

export default class ImageText {
    sendText(text) {
        try {
            axios.post('http://192.168.88.53:8000/test/' + text, {
                firstName: 'Fred',
                lastName: 'Flintstone'
            }, {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
                'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        } catch (error) {
            console.log(error);
        }
    }

}