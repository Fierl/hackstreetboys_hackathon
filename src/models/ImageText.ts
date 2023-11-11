import axios from 'axios';
import {sleep} from "openai/core";

export default class ImageText {
    sendText(inputText) {
        const regex = /```([\s\S]+?)```/; // The `([\s\S]+?)` part captures any character (including newlines) between ``` and ```

        const match = inputText.match(regex);
        if (match) {
            const text = match[1];
            const lines = text.split('\n');
            for (const line of lines) {
                if (line === '') {
                    continue;
                }
                setTimeout(() => {
                    try {
                        axios.post('http://192.168.88.40:8000/send_text', {
                            text: line,
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
                }, 2000);
            }
        }
    }

}