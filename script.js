// JavaScript

const loading = document.getElementById('loading');

function animation(){
  loading.classList.add('loaded');
}
// window.addEventListener('load', animation);

// 指定秒後に動作させる
window.setTimeout( animation, 2000 );