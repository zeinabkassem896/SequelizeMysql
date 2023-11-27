import BookModel from '../models/index.js';


export async function getAll(req, res) {
    try{
    let getdata = await BookModel.BookModel.findAll({ include: ["categories","authors"] });

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

        let getdata = await BookModel.BookModel.findByPk(id,{ include: ["categories","authors"] });
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
        let getdata = await BookModel.BookModel.create(req.body);
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

export async function deleteData(req, res) {
    try{
        let {id} = req.params;
        let getdata = await BookModel.BookModel.destroy({where:{id:id}});
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

export async function fetchLBA(req, res){

    await fetch('https://fibalivestats.dcd.shared.geniussports.com/data/2372395/data.json')
    .then(res => res.json())
    .then(text => console.log("zeinab",text))
    .catch(err => console.error(err))
    .finally(() => res.end());

    res.json({
        success: true,
        message:"Data Fetch Successfully",
        data:null
    });
}