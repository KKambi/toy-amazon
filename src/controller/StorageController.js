//import library
const AWS = require('aws-sdk')
const fs = require('fs')

//AWS S3 setting
const endpoint = new AWS.Endpoint('https://kr.object.ncloudstorage.com')
const region = 'kr-standard';
const access_key = 'vlZ7Ayefuoki9QCa1xb2';
const secret_key = 'dx9to7moOlUyLBqxjSZAn5LZgdyZ1Irtpa80Fv1d';
const bucket_name = 'boostcamp-amazon-s3';
AWS.config.update({
    accessKeyId: access_key,
    secretAccessKey: secret_key
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

    async deleteBucket(){
        await S3.deleteBucket({
            Bucket: bucket_name
        }).promise();
    },

    async getBuckets(){
        let { Buckets } = await S3.listBuckets().promise();
        return Buckets;
    },

    async uploadObject(object_name, local_file_name){
        // Multipart Upload file
        let options = {
            partSize: 5 * 1024 * 1024
        };

        await S3.putObject({
            Bucket: bucket_name,
            Key: object_name,
            Body: fs.createReadStream(local_file_name)  //스트림 형식으로 업로드할 파일을 전송
        }, options).promise();
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