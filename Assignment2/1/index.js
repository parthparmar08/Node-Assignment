const express = require('express');
const index = express();
const fileUpload = require('express-fileupload');
//index.use(express.static('public'))
index.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

index.get('/', function (req, res) {
    res.sendFile(__dirname + '/fileUpload.html');
})

index.post('/mfile_upload', function (req, res) {
    req.files.pic.forEach(item => {
        item.mv(__dirname + "/../images/" + item.name, function (error, data) {
            if (error) res.json(error);
        })
    });
    res.json("done")
    // req.files.pic.mv(__dirname + "/../images/" + req.files.pic.name,function(error,data){
    // if(error) res.json(error);
    // else res.json("Successfull");
    // })
});

index.post('/file_upload', function (req, res) {
    req.files.pic.mv(__dirname + "/../images/" + req.files.pic.name,function(error,data){
        if(error) res.json(error);
         else res.json("Successfull");
    })
});

index.listen(5000);