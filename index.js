let updateText = document.getElementById("updateText");
let index = 0;
let isTyping = false;
let contentArray = [
    "",
    "Kirito:那个,还挺好吃的",
    "Kirito:我可以坐吗",
    "Kirito轻步上前坐下",
    "Asuna像受惊的兔子一般，连忙挪开了",
    "Asuna:你真的觉得好吃吗",
    "Kirito:那当然",
    "Kirito:来到这个小镇后每天至少吃一次",
    "Kirito:当然了，还需要花些心思",
    "Asuna:心思？",
    "Kirito:你试着用在那个面包上",
    "Asuna:奶油？",
    "Asuna将信将疑地吃下第一口，随后，三两下便解决了抹上了奶油的面包，长吐一口气，像是多日累积的疲惫都在这一刻得到了释放",
    "Kirito:这是在前一个村庄接的任务的报酬",
    "Kirito:任务名是【逆袭的奶牛】",
    "Kirito:你要做的话，我可以告诉你诀窍",
    "Asuna:我来这个城镇不是为了吃美味食物的",
    "Kirito:那是为了什么？",
    "Asuna:为了能继续当我自己",
    "Asuna:与其把自己关在起始城镇的旅馆里逐渐腐败",
    "Asuna:我更希望以自我来迎接最后一刻",
    "Asuna:就算是输给怪物命丧黄泉",
    "Asuna:我也不要输给这场游戏和这个世界",
    "Asuna:...绝对不要",
    "Kirito:我可不想看到队友在我眼前死",
    "Kirito:至少你明天不能死",
    ""
];


document.body.onclick = function () {
    if (index < contentArray.length - 1) {
        index = index + 1;
        document.getElementById("updateText").innerText = contentArray[index];
    }
    
};




document.body.onclick = function () {
    if (isTyping) {
        return; //如果正在打印，则不响应点击事件
    }

    if (index < contentArray.length - 1) {
        let str = contentArray[++index];
        let i = 0;

        // 清空当前内容
        updateText.innerText = "";

        // 开始打印
        isTyping = true;

        // 切换背景
        switchBackground(index); 

        // 设置一个定时器逐字显示内容
        let timer = setInterval(function () {
            updateText.append(str[i]);
            i++;

            // 如果所有的字符都显示了，清除定时器，并且允许再次点击
            if (i === str.length) {
                clearInterval(timer);
                isTyping = false; //打印结束，允许点击
            }
        }, 120); // 每个字符显示的间隔时间，单位是毫秒，可以调整
    }
};





function switchBackground(index) {
    
    switch (index) {
        
        case 2:
            document.body.style.backgroundImage = `url("background/02.png")`;
            break;
        
        case 3:
                document.body.style.backgroundImage = `url("background/03.png")`;    
            break;

        case 4:
            document.body.style.backgroundImage = `url("background/04.png")`;    
            break;
        
        case 5:
            document.body.style.backgroundImage = `url("background/05.png")`;
            break;
        
        case 9:
            document.body.style.backgroundImage = `url("background/06.png")`;
            break;
        
        case 10:
            document.body.style.backgroundImage = `url("background/07.png")`;
            break;
        
        
        case 11:
            document.body.style.backgroundImage = `url("background/08.png")`;
            break;
        
        case 12:
            document.body.style.backgroundImage = `url("background/09.png")`;
            break;
        
        case 13:
            document.body.style.backgroundImage = `url("background/10.png")`;
            break;
    
        case 14:
            document.body.style.backgroundImage = `url("background/11.png")`;
            break;

        case 16:
            document.body.style.backgroundImage = `url("background/10.png")`;
            break;

        case 18:
            document.body.style.backgroundImage = `url("background/12.png")`;
            break;

        case 21:
            document.body.style.backgroundImage = `url("background/13.png")`;
            break;

        case 24:
            document.body.style.backgroundImage = `url("background/14.png")`;
            break;
    }
}