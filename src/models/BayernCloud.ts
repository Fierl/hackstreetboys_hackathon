import axios from 'axios';

export default class BayernCloud {

    getListOfDescriptions() {
        const response = axios.get(
            "https://data.bayerncloud.digital/api/v4/endpoints/list_poi?page[number]=2&page[size]=25",
            {headers: {Authorization: 'Bearer ' + import.meta.env.VITE_BAYERN_CLOUD_API_KEY}})
            .then(function (response) {
                console.log(response);
            })
    }

    onChangeFileUpload(event) {
        this.file = event.target.files[0];
    }

}