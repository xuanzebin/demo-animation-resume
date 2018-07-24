var result=`/* 面试官你好
接下来由我来为您介绍一下我的简历
在这之前呢
白色背景色太单调了
我们来换一个浅蓝色背景色吧 */
*{
    transition:all 1s;
}
body{
    background:#69DCFA;
}

/* 调整一下代码的位置和字体大小 */
#code{
    padding:30px;
    font-size:16px;
    font-family:仿宋;
}

/* 然后我们需要一张写代码的纸张 */
.wrapper{
    height:95vh;
}
#codePaper{
    width:45%;
    height:100%;
    background:white;
    margin:20px;
    display:flex;
    justify-content: center;
    align-items: center;
}
#code{
    width:80%;
    height:85%;
    border:#69DCFA 2px solid;
    border-radius:20px;
    overflow:hidden;
}

/* 接下来我们把代码高亮 */
.token.selector{
    color:#690;
}
.token.property{
    color:#905;
}
.token.function{
    color:#DD4A68;
}

/* 顺便加个3D效果吧 */
.wrapper{
    perspective: 1000px;
    width: 0.6rem;
    height:70vh;
    margin: 8em 4em; 
}
#codePaper{
  transform: rotateY(40deg);
  box-shadow: -6px 6px 20px 10px  rgba(100,100,100,.1);
}
/* 好了，接下来正式书写我的简历
我们先在旁边新建一个简历的纸张吧 */
`

var resumeWords=`#宣泽彬
求职意向：前端工程师

##基础信息
生日：1997.05              性别：男
民簇：汉族               地址：广东省中山市

##教育背景
2015.09-至今    中山大学    环境科学与工程专业

##项目/作品经历
1.键盘导航
2.口袋画板
3.网页简历
4.苹果风格轮播

##联系方式
- QQ 492247143
- Email 492247143@qq.com
- 手机 17328303981

####博客链接
https://www.jianshu.com/u/768a46354348

####github链接
https://github.com/xuanzebin
`



var pageWidth=window.innerWidth
var adjustRem=`html{
    font-size:${pageWidth}px;
}`

function writeCode(preCode,Code,fn){
    let n=0
    let id=setInterval(()=>{
        n++
        let domCode=document.querySelector('#code')
        domCode.innerHTML = Prism.highlight(Code.substring(0,n), Prism.languages.css, 'css');
        styleCode.innerHTML=preCode+Code.substring(0,n)
        domCode.scrollTop=domCode.scrollHeight
        if (n>=Code.length) {
            window.clearInterval(id)
            resumePaper.style="display:flex;"
            fn.call()
        }
    },0)
}
function writeRusume(preWords,Words,fn){
    let n=0
    let id=setInterval(()=>{
        n++
        let resumeWords=document.querySelector('#resume')
        resumeWords.innerHTML = Words.substring(0,n)
        resumeWords.scrollTop=resumeWords.scrollHeight
        if (n>=Words.length) {
            window.clearInterval(id)
        }
    },0)    
}

var pre=document.createElement('pre')
pre.id="resume"
resumePaper.style="display:none;"
resumePaper.appendChild(pre)

writeCode(adjustRem,result,()=>{
    writeRusume('',resumeWords)
})