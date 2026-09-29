/* Parimal Mishra playlist */
const SPOTIFY_PLAYLIST_URL = "https://open.spotify.com/playlist/7Cczi2JJJ3EBJ0PZQ7rSbk";
const SPOTIFY_PLAYLIST_TITLE = "Parimal's playlist";

// Keep the page usable even if a third-party resource (fonts, GitHub chart, etc.)
// fails while opening the local HTML file.
function hideLoader() {
  const loader = document.getElementById('loader');
  if (loader) loader.classList.add('hide');
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Reveal after a short intro, with a hard fallback so the loader can never trap the page.
window.addEventListener('DOMContentLoaded', () => setTimeout(hideLoader, 700));
window.addEventListener('load', () => setTimeout(hideLoader, 900));
setTimeout(hideLoader, 2500);

const photoEls = [...document.querySelectorAll('.photo-slide')];
const dots = [...document.querySelectorAll('#photoDots i')];
let photoIndex = 0;
function showPhoto(i){
  photoIndex=(i+photoEls.length)%photoEls.length;
  photoEls.forEach((el,n)=>el.classList.toggle('active',n===photoIndex));
  dots.forEach((el,n)=>el.classList.toggle('active',n===photoIndex));
}
document.getElementById('prevPhoto').onclick=()=>showPhoto(photoIndex-1);
document.getElementById('nextPhoto').onclick=()=>showPhoto(photoIndex+1);
setInterval(()=>showPhoto(photoIndex+1),6500);

const spotify=document.getElementById('spotifyCard');
// The playlist is played through Spotify's official Embed, so no API key or
// exposed credentials are required. The iframe itself owns playback controls.
if (spotify) spotify.dataset.playlist=SPOTIFY_PLAYLIST_URL;

const openModal=id=>document.getElementById(id).classList.add('open');
const closeModal=id=>document.getElementById(id).classList.remove('open');
document.getElementById('aboutOpen').onclick=()=>openModal('aboutModal');
document.getElementById('resumeOpen').onclick=()=>openModal('resumeModal');
document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>closeModal(b.dataset.close));
document.querySelectorAll('.modal-backdrop').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)m.classList.remove('open')}));
document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('.modal-backdrop.open').forEach(m=>m.classList.remove('open'))});


// Scroll reveal — deliberately subtle to match the reference's calm motion.
const revealTargets=document.querySelectorAll('.section-block,.mini-grid,.top-grid');
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('revealed');observer.unobserve(entry.target)}}),{threshold:.08});
revealTargets.forEach(el=>{el.classList.add('reveal');observer.observe(el)});


// Functional experience accordions. Trishul starts open; GENERO'26 starts closed.
const experienceCards=document.querySelectorAll('.experience');
experienceCards.forEach(card=>{
  const btn=card.querySelector('.exp-head button');
  if(!btn) return;
  const sync=()=>{
    const open=card.classList.contains('expanded');
    btn.textContent=open?'−':'+';
    btn.setAttribute('aria-expanded',String(open));
    const body=card.querySelector('.experience-body');
    if(body) body.hidden=!open;
    const legacyList=card.querySelector(':scope > ul');
    const legacyChips=card.querySelector(':scope > .chips');
    if(legacyList) legacyList.style.display=open?'block':'none';
    if(legacyChips) legacyChips.style.display=open?'flex':'none';
  };
  sync();
  btn.addEventListener('click',()=>{
    card.classList.toggle('expanded');
    sync();
  });
});

// Image tiles jump directly to the matching hero slide.
document.querySelectorAll('.image-tile').forEach(tile=>tile.addEventListener('click',()=>showPhoto(Number(tile.dataset.photo))));

// Prevent the browser from jumping to a stale hash when the brand is clicked.
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{
  const target=document.querySelector(a.getAttribute('href'));
  if(target) setTimeout(()=>target.scrollIntoView({behavior:'smooth',block:'start'}),0);
}));
