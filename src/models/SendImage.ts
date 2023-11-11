import axios from 'axios';

export default class SendImage {

    uploadImage() {
        let fd= new FormData()

        fd.append('file', this.file, this.file.name)
        axios.post('http://192.168.88.53:8000/send_image/', fd, {
            'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
                'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
        }).then(resp => {
                console.log(resp.data)
            })
    }
    onChangeFileUpload(event) {
        this.file = event.target.files[0];
    }

}