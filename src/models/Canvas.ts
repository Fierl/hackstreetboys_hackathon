import axios from 'axios';

export default class Canvas {

    uploadImage(canvas) {
        let fd= new FormData()

        this.srcToFile(canvas.toDataURL('image/png'), 'canvas.png', 'image/png').then(
            file => {
                fd.append('file', file, file.name)
                axios.post('http://192.168.88.53:8000/send_image/', fd, {
                    'Content-Type': 'multipart/form-data',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
                    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
                }).then(resp => {
                    console.log(resp.data)
                })
            }
        )
    }

    srcToFile(src, fileName, mimeType){
        return (fetch(src)
                .then(function(res){return res.arrayBuffer();})
                .then(function(buf){return new File([buf], fileName, {type:mimeType});})
        );
    }

}