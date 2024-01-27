
function trim(str){ //去掉头尾空格
	return str.replace(/(^\s*)|(\s*$)/g, "");
}

function cx(token,num,tgtime){
    $('#submit').hide();
     loading("正在提交...");
 var checkInputs = document.querySelectorAll('input:checked') // 获取选中的input
 
for(var i = 0;i<checkInputs.length;i++){
    var v = checkInputs[i].value;
}
if(v==1){
    var url = "https://cat-match.easygame2021.com/sheep/v1/game/game_over?t="+token+"&rank_score=1&rank_state=1&rank_time="+tgtime+"&rank_role=1&skin=1";
}else if(v==2){
    var url = "https://cat-match.easygame2021.com/sheep/v1/game/topic_game_over?t="+token+"&rank_score=1&rank_state=1&rank_time="+tgtime+"&rank_role=1&skin=1";
}
		$.ajax({
			type: "GET",
			url:  url,
			timeout : 1000*6,
			success: function(data){   
	if(data.data=="0"){
	    layer.alert("已提交,稍后查看小程序");
	    if(num ==1){
	     $('#submit').show();
	    }
var i=0; 
var win = 0;
var count = 0;
	for(i;i<num;i++){

			$.ajax({
			type: "GET",
			url:  url,
			success: function(data){  
			    count++;
				    if(data.data ===0){  
				        win++;
				$('#log').html($('#log').html()+"第"+win+"次成功"  + '\n');
				setTimeout(300);
				
				    }else{
				       	$('#log').html($('#log').html()+"第"+count+"次失败" + '\n' ); 
				    }
		
	if(count == num){
				$('#submit').show();
				$('#load').html('已通关'+win+'次');
               
				}
			},

		   });
		   
}
	    
	}else if(data.err_code=="10003"){
	    layer.alert("Token错误");
	     $('#submit').show();
	    return;
	}else if(data ==""){
	    layer.alert("出现错误,可能小程序崩了或卡了");
	     $('#submit').show();
	    return;
	}
				
			},
			complete:function(XMLHttpRequest,status){ //请求完成后最终执行参数
　　　　if(status=='timeout'){//超时,status还有success,error等值的情况
　　　　　  
　　　　　  layer.alert("小程序过卡请求超时,请重试");
　　　　　  $('#submit').show();
　　　　　  
　　　　}
　　}

		   
		   });
		   

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
		$("#log").html('');
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