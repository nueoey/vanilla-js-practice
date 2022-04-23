const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    //padStart()는 string에 적용하며, 해당 string이 주어진 최대 글자수보다 짧으면 앞부분을 주어진 임의의 문자로 채워줌
    //date.getHours()는 string이 아니라 integer이므로, String()을 이용하여 string으로 바꿔줘야 함
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
//따옴표가 아니라 ``(backtick)을 사용해야 함

getClock(); //먼저 getClock을 호출해주지 않으면 맨 처음에는 00:00:00가 보이다가 1초 후부터 시계 작동
setInterval(getClock, 1000); //매 1000ms(1초)마다 getClock 호출. setInterval 실행해주지 않으면 최초 한번만 시각이 나옴