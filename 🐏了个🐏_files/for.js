getFor.onclick = () => {
    console.log("你已经进入0.01秒一次提交，不需要请退出")
    var timer=setInterval(function() {
    const token = document.getElementById('token').value
    const time = document.getElementById('time').value
    const options = document.getElementById('option').value
    const request = new XMLHttpRequest()
       const request2 = new XMLHttpRequest()
   	//let url =  " https://cat-match.easygame2021.com/sheep/v1/game/topic_game_over?t="+token+"&rank_score=1&rank_state=1&rank_time="+time+"&rank_role=1&skin=1"
   
   if(options=='default'){
var url='\x20https://cat-match.easygame2021.com/sheep/v1/game/update_user_skin?skin=1&t='+token;;_0xod5='jsjiami.com.v6'
//var url="https://cat-match.easygame2021.com/sheep/v1/game/map_info_ex?matchType=3&t="+token

   }
   else if(options=='topic'){
   	   var url =  " https://cat-match.easygame2021.com/sheep/v1/game/topic_game_over?t="+token+"&rank_score=1&rank_state=1&rank_time="+time+"&rank_role=1&skin=1"

   }

   request.open('get', url)
    //request.send(`time=${time}&token=${token}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            result = request.responseText
               const object = JSON.parse(request.response)
              if(object['err_msg'] === "")
              {
                        mdui.snackbar({
                    message: "记录添加成功，请在小程序我的名片查看记录",
                     position: 'top',
                })
                  
              }else{
                          mdui.snackbar({
                	
                    message: "没有权限，token错误",
                     position: 'top',
                })
                  
              }
            // if (result === '{"err_code":0,"err_msg":"","data":0}') {
            //     // mdui.snackbar({
            //     //   // message: "记录添加成功，请在小程序我的名片查看记录",
            //     //      position: 'top',
            //     // })
            // } else {
            //     mdui.snackbar({
                	
            //         message: "没有权限，token错误",
            //          position: 'top',
            //     })
            // }

        }

    }
                    console.log("1条记录添加成功，请在小程序我的名片查看记录")

    request.send()
    
   
    
        request2.open('post', "https://cat-match.easygame2021.com/sheep/v1/game/game_over_ex?t="+token)
                    request2.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
                     var str = '+AIiBQjnARA8IgYI6AEQhwEiBQjpARBcIgUI6gEQQSIGCOsBEIEBIgYI7AEQpwEiBgjtARC/ASIFCO4BECciBQjvARAkIgUI8AEQfSIFCPEBEBYiBgjyARC6ASIGCPMBELMBIgYI9AEQigEiBgj1ARDUAiIGCPYBEMYBIgUI9wEQPyIFCPgBECEiBgj5ARCIAiIFCPoBEBMiBQj7ARBk'
			var encodedData = encodeURIComponent(str)// 编码
     request2.send('rank_score=1&skin=1&rank_time='+time+'&rank_state=1&MatchPlayInfo='+encodedData)

    },
 100);
}
