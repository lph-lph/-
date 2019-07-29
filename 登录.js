$(function(){
    
    $("#login").click(function(){
        $.ajax({
            url:"http://www.wxhwg.com:8080/mock/api/login",
            type:"post",   //请求类型
            async:true,    //是否异步
            dataType:"json",  
            data:{
                username:$("#username").val(),
                password:$("#password").val(),
            },
            success:function(result){
                if(result.status==200){
                    alert("登录成功");
                    window.location.href="商城.html";
                    window.localStorage.setItem("userId",result.data.userId) 

                }else if(result.status==404){
                    alert("用户名或密码错误")
                }else{                
                    alert("登录异常")
                }
                 
            }
        });
    });
    $("#register").click(function(){
        window.location.href="注册.html";        
    });
});
