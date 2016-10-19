


function doSbmit(event) {
    // 通过jQuery获取表单中的值
    var name = $('input[name="name"]').val();
    var age = $('input[name="age"]').val();
    var gender = $('input[name="gender"]').val();
    var hobby = $('textarea[name="hobby"]').val();

    $.ajax({
        url: "/sub",
        method: "post",
        dataType: "json",
        data: {
            name: name,
            age: age,
            gender: gender,
            hobby: hobby,
        },
        success: function(res) {
            console.dir(res);
        },
        error: function(err) {
            console.dir(err);
        }
    });
}


//通过ajax方法提交一个post请求到服务器端
