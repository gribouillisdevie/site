/* Bulle « énigme offerte + -15 % » : apparaît après quelques secondes, revient à chaque nouvelle visite (fermée = cachée jusqu'à la fin de la visite). */
(function(){
  var KEY='gdv-bulle-fermee', page=location.pathname;
  if(/enigme-offerte|merci-enigme/.test(page)) return;
  try{ if(sessionStorage.getItem(KEY)) return; }catch(e){}
  var css=document.createElement('style');
  css.textContent=
   '.gdv-bulle{position:fixed;right:18px;bottom:18px;z-index:50;max-width:300px;background:#fff;border-radius:18px;box-shadow:0 12px 34px rgba(60,40,30,.18);padding:18px 18px 16px;font-family:Quicksand,system-ui,sans-serif;color:#1c1c1c;opacity:0;transform:translateY(16px);transition:opacity .4s,transform .4s}'+
   '.gdv-bulle.on{opacity:1;transform:none}'+
   '.gdv-bulle:before{content:"";position:absolute;inset:6px;border:1.5px dashed #6e5240;border-radius:13px;pointer-events:none}'+
   '.gdv-bulle b{display:block;font-family:"Playwrite FR Trad",cursive;font-weight:300;font-size:1.02rem;line-height:1.7;margin:0 18px 4px 0}'+
   '.gdv-bulle p{margin:0 0 12px;font-size:.9rem;line-height:1.5;color:#5e5a56}'+
   '.gdv-bulle .pct{color:#c9726a;font-weight:600}'+
   '.gdv-bulle a.go{display:inline-block;background:#6e5240;color:#fff;text-decoration:none;border-radius:999px;padding:9px 18px;font-weight:600;font-size:.88rem;position:relative}'+
   '.gdv-bulle button{position:absolute;top:8px;right:10px;border:0;background:none;font-size:20px;line-height:1;color:#8a857f;cursor:pointer;padding:4px}'+
   '@media(max-width:520px){.gdv-bulle{left:12px;right:12px;bottom:12px;max-width:none}}';
  document.head.appendChild(css);
  var d=document.createElement('div');
  d.className='gdv-bulle'; d.setAttribute('role','dialog'); d.setAttribute('aria-label','Énigme offerte');
  d.innerHTML='<button aria-label="Fermer">×</button><b>Une enquête de Noël offerte</b>'+
    '<p>Une énigme d\'Inspecteur Gribouille à imprimer, et <span class="pct">-15 %</span> sur la boutique.</p>'+
    '<a class="go" href="enigme-offerte.html">Je la reçois →</a>';
  function close(){ d.classList.remove('on'); try{sessionStorage.setItem(KEY,1)}catch(e){} setTimeout(function(){d.remove()},400); }
  d.querySelector('button').onclick=close;
  d.querySelector('a.go').onclick=function(){ try{sessionStorage.setItem(KEY,1)}catch(e){} };
  function show(){ if(document.documentElement.lang==='en') return; document.body.appendChild(d); requestAnimationFrame(function(){d.classList.add('on')}); }
  setTimeout(show,6000);
})();
