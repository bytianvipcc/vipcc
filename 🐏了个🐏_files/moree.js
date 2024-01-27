getUserNight.onclick = () => {
      console.log("正在请求999条数据，有点慢耐心等下！")
	 for( i=0;i<999;i++){
    var token = document.getElementById('token').value
    var time = document.getElementById('time').value
    var options = document.getElementById('option').value
    var request = new XMLHttpRequest()
     var request2 = new XMLHttpRequest()
   	//let url =  " https://cat-match.easygame2021.com/sheep/v1/game/topic_game_over?t="+token+"&rank_score=1&rank_state=1&rank_time="+time+"&rank_role=1&skin=1"
   
   if(options=='default'){
//   var url =  " https://cat-match.easygame2021.com/sheep/v1/game/game_over?t="+token+"&rank_score=1&rank_state=1&rank_time="+time+"&rank_role=1&skin=1"
//var url='\x20https://cat-match.easygame2021.com/sheep/v1/game/update_user_skin?skin=1&t='+token;;_0xod5='jsjiami.com.v6'
var url="https://cat-match.easygame2021.com/sheep/v1/game/map_info_ex?matchType=3&t="+token

   }
   else if(options=='topic'){
   	   var url =  " https://cat-match.easygame2021.com/sheep/v1/game/topic_game_over?t="+token+"&rank_score=1&rank_state=1&rank_time="+time+"&rank_role=1&skin=1"
 
   }
    
  
	 request.open('get', url)

// request.open('get', url)
    //request.send(`time=${time}&token=${token}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            result = request.responseText
            if (result === '{"err_code":0,"err_msg":"","data":0}') {
                                     // console.log("第"+i+"条记录添加成功，请在小程序我的名片查看记录！")

//              mdui.snackbar({
////                  message: "记录99条添加成功",
//              })
            } else {
                // mdui.snackbar({
                	
                //     message: "没有权限，token错误"
                // })
            }

        }

    }

    	// console.log("第"+i+"条记录添加成功")
    	   request.send()
    }
	 
	   request.open('get', url)
    //request.send(`time=${time}&token=${token}`)
  request.onreadystatechange = () => {
        if (request.readyState === 4) {
            result = request.responseText
              const object = JSON.parse(request.response)
              if(object['err_msg'] === "")
              {
                        console.log("999条记录添加成功，请在小程序我的名片查看记录")
                mdui.snackbar({
                    message: "999条记录添加成功，请在小程序我的名片查看记录",
                     position: 'top',
                    
                })
                  
              }else{
                          console.log("没有权限，token错误")

                mdui.snackbar({
                	
                    message: "没有权限，token错误", position: 'top',
                })
                  
              }
            // if (result === '{"err_code":0,"err_msg":"","data":0}') {
            //     console.log("999条记录添加成功，请在小程序我的名片查看记录")
            //     mdui.snackbar({
            //         message: "999条记录添加成功，请在小程序我的名片查看记录",
            //          position: 'top',
                    
            //     })
            // } else {
            //     console.log("没有权限，token错误")

            //     mdui.snackbar({
                	
            //         message: "没有权限，token错误", position: 'top',
            //     })
            // }

        }

    }
    request.send()
            setTimeout(function() {
   
   
        request2.open('post', "https://cat-match.easygame2021.com/sheep/v1/game/game_over_ex?t="+token)
                    request2.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
                     var str = '+AIiBQjnARA8IgYI6AEQhwEiBQjpARBcIgUI6gEQQSIGCOsBEIEBIgYI7AEQpwEiBgjtARC/ASIFCO4BECciBQjvARAkIgUI8AEQfSIFCPEBEBYiBgjyARC6ASIGCPMBELMBIgYI9AEQigEiBgj1ARDUAiIGCPYBEMYBIgUI9wEQPyIFCPgBECEiBgj5ARCIAiIFCPoBEBMiBQj7ARBk'
			var encodedData = encodeURIComponent(str)// 编码
     request2.send('rank_score=1&skin=1&rank_time='+time+'&rank_state=1&MatchPlayInfo='+encodedData)
  }, 1111);
}
(function () {
    var old = console.log;
    var logger = document.getElementById('log');
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
        } else {
            logger.innerHTML += message + '<br />';
        }
    }
})();