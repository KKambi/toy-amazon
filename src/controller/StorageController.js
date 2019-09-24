//import library
const AWS = require('aws-sdk')
const fs = require('fs')
const path = require('path')
require('dotenv').config();

//AWS S3 setting
const endpoint = new AWS.Endpoint('https://kr.object.ncloudstorage.com')
const bucket_name = 'boostcamp-amazon-s3';
const region = 'kr-standard';
AWS.config.update({
    accessKeyId: process.env.NCLOUD_ACCESS_KEY,
    secretAccessKey: process.env.NCLOUD_SECRET_KEY
});

//Connect AWS S3 API
const S3 = new AWS.S3({
    endpoint,
    region
});

//S3 Controller
const StorageController = {
    async createBucket(){
        await S3.createBucket({
            Bucket: bucket_name,
            CreateBucketConfiguration: {}
        }).promise()
    },

    async getBucketList(){
        let { Buckets } = await S3.listBuckets().promise();
        return Buckets;
    },

    async deleteBucket(){
        await S3.deleteBucket({
            Bucket: bucket_name
        }).promise();
    },

    async uploadObject(object_name, local_file_path){
        await S3.putObject({
            Bucket: bucket_name,
            Key: object_name,
            ACL: 'public-read',
            Body: fs.createReadStream(local_file_path)  //스트림 형식으로 업로드할 파일을 전송
        }, (err) => {
            if (err) console.log(err, err.stack); 
        });
    },

    async getObject(object_name){
        // Get url of file
        let url = undefined;
        await S3.getSignedUrl('getObject', {
            Bucket: bucket_name,
            Key: object_name
        }, (err, data) => {
            if (err) console.log(err, err.stack); 
            else     url = data;
        });
        return url;
    },

    downloadObject(object_name, local_file_path){
        let outStream = fs.createWriteStream(local_file_path);
        let inStream = S3.getObject({
            Bucket: bucket_name,
            Key: object_name
        }).createReadStream();
    
        inStream.pipe(outStream);
        inStream.on('end', () => {
            console.log("Download Done");
        });
    },

    async deleteObject(object_name){
        // Delete File
        await S3.deleteObject({
            Bucket: bucket_name,
            Key: object_name
        }).promise();
    }
}

module.exports = {
    StorageController
}

// // File Upload Example
// const local_file_path = path.resolve(__dirname, "../../public/images/Main_Card/Main_Card_A01.jpg")
// const local_file_name = path.basename(local_file_path);
// (async () => {
//     await StorageController.uploadObject(local_file_name, local_file_path);
// })();

// // File Retrieve Example
// (async() => {
//     console.log(await StorageController.getObject(local_file_name))
// })();
