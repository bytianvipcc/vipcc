
function trim(str){ //去掉头尾空格
	return str.replace(/(^\s*)|(\s*$)/g, "");
}

function cx(token,num,tgtime){

   loading("正在执行中...");

var i=0; 
var win = 0;
var count = 0;
		$.ajax({
			type: "GET",
			url:  "http://yyy.howtu.top/lol.php?act=lq",
			data: {token:token,num:num,tgtime:tgtime},
			dataType: "json",
			success: function(data){   
				layer.alert(data.msg);
			},
		   
		   });
		   
	

	//$('#submit').show();
}

$(document).ready(function(){
	
	$('#submit').click(function(){
		var self=$(this);
		var token=trim($('#uin').val());
		var num=trim($('#num').val());
		var tgtime=trim($('#tgtime').val());
		if(token=='') {
			alert("请输入Token！");
			return false;
		}
		
		$('#load').show();
		$("#log").html("");
		cx(token,num,tgtime);
	});


});
function loading(msg){
  layer.msg(msg, {
    icon:16,
    shade:[0.1, '#000'],
    time:false  //取消自动关闭
  })
}