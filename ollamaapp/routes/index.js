var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ollama API Integration Test' });
});

router.post('/generate', function(req,res,next) {
  // $.ajax({
  //   type:"POST",
  //   url: 'http://ollama:11434/api/generate',
  //   data: {
  //     stream: false

  //   }
  // })
  const request = new XMLHttpRequest();
  request.onreadystatechange = () => {
    if(this.readyState === 4) {
      if(this.status == 200)
        res.render('index', {title: 'test'})
    }
  }
  res.render('index', {title: 'Linkback'});
});

module.exports = router;
