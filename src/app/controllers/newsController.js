class NewsController {
    //[get] /news
    index(req, res){
        res.render('news');
    }

    show(req, res){
        res.send('this is slug(show function)!!!');
    }
}
module.exports= new NewsController;
