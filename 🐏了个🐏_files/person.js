user.onclick = () => {
	 console.log("资料获取中，请勿泄露你的token")
    const token = document.getElementById('token').value
    //const uid = document.getElementById('uidu').value
    const request1 = new XMLHttpRequest()
     // const request2 = new XMLHttpRequest()
    const tokenUrl = "https://cat-match.easygame2021.com/sheep/v1/game/personal_info?t=" + token
     // const rankUrl = "https://cat-match.easygame2021.com/sheep/v1/game/user_rank_info?t=" + token+"&uid="+uid
    request1.open('get', tokenUrl)
    request1.onreadystatechange = () => {
        if (request1.readyState === 4) {
            if (request1.status >= 200 && request1.status < 300) {
                const object = JSON.parse(request1.response)
                // document.getElementById('avatar').src = object['data']['avatar']
                // document.getElementById('nick_name').innerText = object['data']['nick_name']
                document.getElementById('uid').innerText = object['data']['uid']
                 document.getElementById('daily_count').innerText = object['data']['daily_count']
                  document.getElementById('topic_count').innerText = object['data']['topic_count']
                  if(object['data']['today_state']===1){
                      document.getElementById('today_state').innerText ="您今天已入羊群"
                  }else{
                       document.getElementById('today_state').innerText ="您今天还没有入羊群"
                  }
                     
                mdui.snackbar({
                    message: "资料获取成功",
                    position: 'top',
                })
            } else {
                mdui.snackbar({
                    message: "源服务器响应超时,请重试！",
                    position: 'top',
                })
            }
        }

    }
     request1.send()
    //   request2.open('get', rankUrl)
    // request2.onreadystatechange = () => {
    //     if (request2.readyState === 4) {
    //         if (request2.status >= 200 && request2.status < 300) {
    //             const object = JSON.parse(request2.response)
    //             // document.getElementById('avatar').src = object['data']['avatar']
    //             // document.getElementById('nick_name').innerText = object['data']['nick_name']
               
    //               document.getElementById('region').innerText = object['data']['region']
    //               document.getElementById('city').innerText = object['data']['user']['city']
               
    //         } else {
               
    //         }
    //     }

    // }
   
     //request2.send()
}
