import express from "express";
import db from './config/config.js';
import student from './models/student.js';

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/search', (req, res) => {
    res.render('search', { error: null, student: null });
});

app.post('/search', async (req, res) => {
    const searchnum = req.body.number; 


    try {
        const find = await student.findOne({ Num_Bac: searchnum });
        if (find) {
            console.log('Student found in database');
            res.render('search', { student: find, error: null });  
        } else {
            console.log('Student not found');
            res.render('search', { error: 'Student not found', student: null }); 
        }
    } catch (err) {
        console.log(err);
        res.render('search', { error: 'An error occurred', student: null }); 
    }
});

app.get('/',async (req,res)=>{
    
    const sortmajor1 = await student.find({Serie_FR :'Sciences Naturelles'}).sort({Moy_Bac:-1}).limit(3);
    const sortmajor2 = await student.find({Serie_FR :'Mathematiques'}).sort({Moy_Bac:-1}).limit(3);
    const sortmajor3 = await student.find({Serie_FR :'Lettres Originelles'}).sort({Moy_Bac:-1}).limit(3);
    const sortmajor4 = await student.find({Serie_FR :'Lettres Modernes'}).sort({Moy_Bac:-1}).limit(3);
    res.render('home', {
        sortmajor1: sortmajor1,
        sortmajor2: sortmajor2,
        sortmajor3: sortmajor3,
        sortmajor4: sortmajor4
    });
})

app.listen(3000, (req, res) => {
    console.log('Server is listening at port 3000');
});
