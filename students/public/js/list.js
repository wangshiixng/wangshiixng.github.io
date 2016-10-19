var content=$('#listBody')
$.ajax({
  url:"/api/get_list",
  dataType:"json",
  success:function(res){
    content.html(template('tbody',{list:res.data}));
  },
  error:function(err){
    console.log(err);
  }
})
