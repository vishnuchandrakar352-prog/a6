(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}
var A=[['Light',35,0],['Light to medium',30,1],['Medium',15,2],['Heavy',-5,3],['Heavy',5,3]],act=2;
function wm(){var t=+$('wm-t').value;$('wm-tv').innerHTML=t+'&deg;F';$('wm-tb').style.left=((t+10)/85*100)+'%';var base=A[act][2];var lvl=base+(t<20?1:0)+(t<0?1:0)-(t>60?1:0)-(t>50&&act<2?1:0);lvl=Math.max(0,Math.min(3,lvl));
 var C=['Light, no cushion','Light cushion','Medium cushion','Heavy cushion'],W=['Fine merino blend','Merino, 60–70%','Merino or wool, 70–80%','Heavy wool, 80%+'];var H=act===0?'Crew or slipper sock':act===1?'Ankle or crew':act===3?'Over the calf':act===4?'Mid-calf boot':'Crew';
 var nm=['Light','Light cushion','Medium cushion','Heavy cushion'][lvl]+' '+(act===3?'ski sock':act===4?'boot sock':act===0?'lounge sock':'crew');$('wm-r').textContent=nm.charAt(0).toUpperCase()+nm.slice(1);$('wm-c').textContent=C[lvl];$('wm-w').textContent=W[lvl];$('wm-h').textContent=H;
 $('wm-n').textContent=t<20?'Very cold: make sure your boots still have room. Tight boots with thick socks squeeze out warm air.':t>60?'Warm weather: thin merino keeps feet dry and comfortable.':'A good all-round choice for this weather.';
 var cf=document.querySelector('.wl-sk-p .cuff');if(cf)cf.setAttribute('height',[14,22,32,46][lvl]+(act===3?20:0));var bd=document.querySelector('.wl-sk-p .b');if(bd)bd.style.fill=['#A7C4D6','#D9A23B','#B3263A','#2F4A3A'][lvl];}
var ab=[].slice.call(document.querySelectorAll('#wm-a button'));if(ab.length){ab.forEach(function(b,k){b.setAttribute('aria-pressed',k===act);b.addEventListener('click',function(){act=k;ab.forEach(function(o){o.classList.toggle('on',o===b);o.setAttribute('aria-pressed',o===b);});wm();});});$('wm-t').addEventListener('input',wm);wm();}
function kn(){var c=+$('kn-c').value,l=+$('kn-l').value,g=+$('kn-g').value;$('kn-cv').textContent=c+' in';$('kn-lv').textContent=l+' in';$('kn-gv').textContent=g;
 var st=Math.round(c*.9*g/4)*4;$('kn-co').textContent=st;$('kn-lg').textContent=(Math.round(l*.75*2)/2);var toe=Math.round(c*.9/4*10)/10*0.6;$('kn-ft').textContent=Math.max(3,Math.round((l-1.5-toe/2)*10)/10);
 var y=Math.round((st*(l*.75+l)*g*0.0072+8)*2/5)*5;$('kn-y').textContent=Math.max(40,y);$('kn-n').textContent='Cast on '+st+' stitches (about 10% smaller than your foot, so the sock hugs). Knit the foot until it reaches the base of your big toe, then start the toe shaping.';
 [].forEach.call(document.querySelectorAll('.wl-kn-r b'),function(b){b.style.transform='scale(1.08)';setTimeout(function(){b.style.transform='';},200);});}
if($('kn-c')){['kn-c','kn-l','kn-g'].forEach(function(i){$(i).addEventListener('input',kn);});kn();}
})();
