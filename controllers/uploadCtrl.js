const cloudinary = require('cloudinary')
const fs = require('fs')


cloudinary.config({
    cloud_name: "ADD YOUR CLOUD NAME",
    api_key: "ADD YOUR API KEY",
    api_secret: "ADD YOUR API SECRET KEY"
})


const uploadCtrl = {
    uploadAvatar: (req, res) => {
        try {
            const file = req.files.file;

            cloudinary.v2.uploader.upload(file.tempFilePath, {
                folder: 'testone', width: 150, height: 150, crop: "fill"
            }, async(err, result) => {
                if(err) throw err;

                removeTmp(file.tempFilePath)

                res.json({url: result.secure_url})
            })

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }

}


const removeTmp = (path) => {
    fs.unlink(path, err => {
        if(err) throw err
    })
}

module.exports = uploadCtrl
