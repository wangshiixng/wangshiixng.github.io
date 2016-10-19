var express = require('express');
var app = express();
var fs=require('fs');

var bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(express.static('./public'));

app.get('/', function(req, res) {

    //输出一个字符串
    res.send('服务器运行正常，你访问了根目录');

});
app.get('/api/get_list', function(req, res) {
fs.readFile('./data/data.json', function(err, data) {
  if(err){
console.log(err);

      res.json({
                status: "n",
                msg: "获取数据失败",
                data: ""
    });

  }else{

    res.json({
          status: "y",
          msg: "获取数据成功",
          data: JSON.parse(data)
      });
  }
  });
});

//接收一个post提交请求
app.post('/sub',function(req,res){
 var arr=[];
 var strData=fs.readFileSync('./data/data.json');
 if(strData !=""){

     arr=JSON.parse(strData);
 }
 arr.push(req.body);
 fs.writeFileSync('./data/data.json',JSON.stringify(arr));
console.log(req.body);
 res.json({
   status:"y",
   msg:"保存数据成功"
});

});

app.listen(2000,function(){

  console.log('服务器运行于2000端口');

});
