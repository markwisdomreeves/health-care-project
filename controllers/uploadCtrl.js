const cloudinary = require('cloudinary')
const fs = require('fs')


cloudinary.config({
    cloud_name: 'dbg9pzf77',
    api_key: '632423798761637',
    api_secret: 'VH2V7E1WWXu8mZ5dtL9QY4GYB7U'
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
