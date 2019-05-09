//let stb=[0,0,0,0];
let zj=0;
let li3=footer.querySelector('.list .li3');
let lis = document.querySelectorAll('#main li');
function shopout(n){
let li = lis[n];
let bg = li.querySelector('.bg');
let settime = li.querySelector('.inputdate');//设置时间
let btn = li.getElementsByTagName('input')[1];
let spans = li.querySelectorAll('.times span');
let big = li.querySelector('.big-c');//获取抖动元素
let h5 = li.querySelector('h5')
let price = li.querySelector('.price');
let footer = document.querySelector('#footer')
let timer = null;
// let index=n



btn.onclick = function(){
    let d1 = new Date(settime.value)//设置时间一拿到
    clearInterval(timer);
    timer = setInterval(() => {
        let d2 = new Date();
        let t = Math.floor((d1 - d2) / 1000);
        if (t < 0) {
            clearInterval(timer);
            t = 0;
        }
        let h = Math.floor(t / 3600);
        t %= 3600;
        let m = Math.floor(t / 60);
        let s = Math.floor(t % 60);
        let str = toDou(h) + toDou(m) + toDou(s)
        for (let i = 0; i < spans.length; i++) {
            spans[i].innerHTML = str[i]
        }
        // console.log(spans.innerHTML)
        if (t === 0) {
            let timer2 = null;
            let num = 0;
            let arr = [10, -10, 8, -8, 6, -6, 4, -4, 2, -2, 0]
            clearInterval(timer2);
            timer2 = setInterval(() => {
                num++;
                li.style.left = arr[num] + 'px';
                if (num === arr.length) {
                    clearInterval(timer2);
                };
            }, 16.7);

            bg.style.display = 'block';
            big.style.visibility = 'visible';
            big.style.transform = 'scale(1.1)';
            let h5s = h5.innerHTML;
             prices = price.innerHTML;
            let ul = document.createElement('ul');
            ul.className = 'style2';
            ul.innerHTML = ` <li class="li1">${h5s}</li>
                <li class="li2">${prices}</li>
            <li class="li3"><img src="./img/${n + 1}.jpg"></li>`
            footer.appendChild(ul);                  
             //stb[index] = prices.substr(1)*1;
               zj+=parseFloat(prices.substring(1));
               li3.innerHTML='￥'+zj;                
        }
    }, 1000)

}

}
  


function toDou(n) {
    return n < 10 ? '0' + n : '' + n;
}
for(let i=0;i<lis.length;i++){
    shopout(i);
    };
