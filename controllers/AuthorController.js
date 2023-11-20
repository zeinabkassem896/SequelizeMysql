import AuthorModel from '../models/index.js';
import AuthorBookModel from '../models/AuthorBook.js';
import BookModel from '../models/BookModel.js';



export async function getAll(req, res) {
    try{
    let getdata = await AuthorModel.AuthorModel.findAll();
    if(getdata){
            res.json({
                success: true,
                message:"Data Fetch Successfully",
                data:getdata
            });
        }
    }catch(err){
        console.log(err);
        res.status(500).json({
            success: false,
            message:`Something went wrong, ${err.message}`,
            data: null
        })
    }
}

export async function getById(req, res) {
    try{
        let {id} = req.params;

        let getdata = await AuthorModel.findByPk(id);
        if(getdata){
                res.json({
                    success: true,
                    message:"Data Fetch Successfully",
                    data:getdata
                });
            }
    }catch(err){
        console.log(err);
        res.status(500).json({
            success: false,
            message:`Something went wrong, ${err.message}`,
            data: null
        })
    }
}

export async function create(req, res) {
    try{
        let getdata = await AuthorModel.AuthorModel.create(req.body);
        if(getdata){
                res.json({
                    success: true,
                    message:"Data Fetch Successfully",
                    data:getdata
                });
            }
    }catch(err){
        res.status(500).json({
            success: false,
            message:`Something went wrong, ${err.message}`,
            data: null
        })
    }
}