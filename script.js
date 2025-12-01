/// checking 1....2....3.......
const data = {
  about: {
    title: "About Me",
    html: `<p>I’m a Computer Engineering student who loves creating clean interfaces and building smart systems, all while acting calm when the tech clearly isn’t. I’m exploring AI/ML, cloud concepts, and mobile app development, learning things piece by piece and turning curiosity into real projects.</p>`
  },
  skills: {
    title: "Skills",
    html: `<div class="list">
      <span class="chip">Python</span><span class="chip">JavaScript</span><span class="chip">C</span><span class="chip">C++</span>
      <span class="chip">Java</span><span class="chip">HTML/CSS</span><span class="chip">Git</span><span class="chip">APIs</span>
      <span class="chip">Problem Solving</span><span class="chip">AI/ML (learning)</span><span class="chip">Cloud (learning)</span>
    </div>`
  },
  projects: {
    title: "Projects",
    html: `<div class="project-list">
      <div class="project-item"><div><strong>Sarthi</strong></div><div style="margin-top:6px"><a href="https://github.com/NehaSama4833/Sarthi" target="_blank" rel="noopener">github.com/NehaSama4833/Sarthi</a></div></div>
      <div class="project-item"><div><strong>Green Path (Lovable)</strong></div><div style="margin-top:6px"><a href="https://github.com/NehaSama4833/green-path-community" target="_blank" rel="noopener">github.com/NehaSama4833/green-path-community</a></div></div>
      <div style="margin-top:10px;color:#555;font-size:13px">More projects link: <a class="link-btn" href="https://github.com/NehaSama4833" target="_blank" rel="noopener">My GitHub</a></div>
    </div>`
  },
  contact: {
    title: "Contact",
    html: `<p style="color:#555">Email: <a href="mailto:neha48330707@gmail.com">neha48330707@gmail.com</a></p>
           <div class="links-row">
             <a class="link-btn" href="https://github.com/NehaSama4833" target="_blank" rel="noopener">GitHub</a>
             <a class="link-btn" href="https://www.linkedin.com/in/neha-sharma-b08737316/" target="_blank" rel="noopener">LinkedIn</a>
           </div>`
  }
};

const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');

function openModal(key){
  const entry = data[key];
  if(!entry) return;
  modalContent.innerHTML = `<h2>${entry.title}</h2>${entry.html}`;
  modal.classList.add('show');
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}

function close(){
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}

document.querySelectorAll('.btn').forEach(b=>{
  b.addEventListener('click', ()=> openModal(b.dataset.target));
});

closeModal.addEventListener('click', close);
document.getElementById('overlay').addEventListener('click', close);
document.addEventListener('keydown', e=> { if(e.key==='Escape') close(); });

document.addEventListener('focusin', e=>{
  if(e.target.classList.contains('btn')) e.target.style.outline = '3px solid rgba(0,0,0,0.06)';
});
