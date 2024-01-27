//mdui.alert('教程及网站都在酷安免费发布,别被圈钱了')
mdui.snackbar({
                    message: "99次、999次请在浏览器打开提交，微信限制了！",
                    position: 'top',
                })
getUser.onclick = () => {
     var token = document.getElementById('token').value
    var time = document.getElementById('time').value
    const options = document.getElementById('option').value
    const request = new XMLHttpRequest()
     const request2 = new XMLHttpRequest()
   	//let url =  " https://cat-match.easygame2021.com/sheep/v1/game/topic_game_over?t="+token+"&rank_score=1&rank_state=1&rank_time="+time+"&rank_role=1&skin=1"
   var info=""
   if(options=='default'){
//var url='\x20https://cat-match.easygame2021.com/sheep/v1/game/update_user_skin?skin=1&t='+token;;_0xod5='jsjiami.com.v6'

var url="https://www.yowal.cn/api/sheep.php?action=getMatchPlayInfo&token="+token
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
               info=object["data"]
             
              if(object['err_msg'] === "" ||object['ret']===0)
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
            //     mdui.snackbar({
            //         message: "记录添加成功，请在小程序我的名片查看记录",
            //          position: 'top',
            //     })
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
setTimeout(function() {
     console.log("Get encryption parameters, can't crack")
 request2.open('post', "https://cat-match.easygame2021.com/sheep/v1/game/game_over_ex?t="+token)
   request2.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
var encodedData = encodeURIComponent(info)// 编码
request2.send('rank_score=1&skin=1&rank_time='+time+'&rank_state=1&MatchPlayInfo='+encodedData)
   
  }, 1111);
    
    
}
