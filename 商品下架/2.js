let lj = 0;
let lis = document.querySelectorAll('#main li');
let li3 = document.querySelector('.list .li3')
function shopout(n) {
    let li = lis[n];
    let bg = li.querySelector('.bg');
    let settime = li.querySelector('.inputdate');
    let btn = li.querySelectorAll('input')[1];
    let spans = li.querySelectorAll('.times span');
    let h5 = li.querySelector('h5')
    let price = li.querySelector('.price');
    let big = li.querySelector('.big-c')
    let footer = document.querySelector('#footer')
    btn.onclick = function () {
        let d1 = new Date(settime.value)
        let timer = null;
        clearInterval(timer)
        timer = setInterval(() => {
            let d2 = new Date();
            let t = Math.floor((d1 - d2) / 1000);
            if (t < 0) {
                clearInterval(timer)
                t = 0;
            };
            let h = Math.floor(t / 3600);
            t % 3600;
            let m = Math.floor(t / 60);
            let s = Math.floor(t % 60);
            let str = toDou(h) + toDou(m) + toDou(s)
            for (let i = 0; i < spans.length; i++) {
                spans[i].innerHTML = str[i];
            }

            if (t === 0) {
                let num = 0;
                let arr = [10, -10, 8, -8, 6, -6, 4, -4, 2, -2, 0]
                let timer2 = null;
                clearInterval(timer2)
                timer2 = setInterval(() => {
                    num++;
                    li.style.left = arr[num];
                    if (num = arr.length) clearInterval(timer2);
                }, 16.7)
                bg.style.display = 'block';
                big.style.visibility = 'visible';
                big.style.transform = 'scale(1)'
                let ul = document.createElement('ul')
                ul.className = 'style2';
                let h5s = h5.innerHTML
                let prices = price.innerHTML
                ul.innerHTML = `<li class="li1">${h5s}</li>
                   <li class="li2">${prices}</li>
                   <li class="li3"><img src="./img/${n + 1}.jpg"></li>`
                footer.appendChild(ul)
                lj += prices.substring(1) * 1;
                li3.innerHTML = '￥' + lj;
                console.log(ul)


            }
        }, 1000)

    }
}
for (let i = 0; i < lis.length; i++) {
    shopout(i)
}
function toDou(n) {
    return n < 10 ? '0' + n : '' + n;
}