var result=`/* 面试官你好
接下来由我来为您介绍一下我的简历
在这之前呢
白色背景色太单调了
我们来换一个深蓝色背景色吧 */
*{
    transition:all 1s;
}
body{
    background:#0D497A;
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
    border:#2185D4 2px solid;
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
    width: 80em;
    height:70vh;
    margin: 8em 4em; 
}
#codePaper{
  transform: rotateY(40deg);
}
/* 好了，接下来正式书写我的简历
我们先在旁边新建一个简历的纸张吧 */
`

let n=0
let id=setInterval(()=>{
    n++
    let domCode=document.querySelector('#code')
    domCode.innerHTML = Prism.highlight(result.substring(0,n), Prism.languages.css, 'css');
    styleCode.innerHTML=result.substring(0,n)
    domCode.scrollTop=domCode.scrollHeight
    if (n>=result.length) {
        window.clearInterval(id)
    }
},80)