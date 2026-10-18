const menuButton=document.querySelector('.menu-toggle');const navElement=document.querySelector('.nav');if(menuButton&&navElement){menuButton.addEventListener('click',()=>{const open=navElement.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close navigation':'Open navigation');});navElement.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navElement.classList.remove('open');menuButton.setAttribute('aria-expanded','false');}));}
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
const params=new URLSearchParams(window.location.search);const serviceParam=params.get('service');const serviceSelect=document.getElementById('service');if(serviceParam&&serviceSelect){const options=[...serviceSelect.options];const normalized=serviceParam.toLowerCase();let found=options.find(o=>o.text.toLowerCase()===normalized)||options.find(o=>normalized.includes(o.text.toLowerCase())||o.text.toLowerCase().includes(normalized));if(found)serviceSelect.value=found.value||found.text;}
const dateInput=document.getElementById('preferredDate');if(dateInput){const today=new Date();const localDate=new Date(today.getTime()-today.getTimezoneOffset()*60000).toISOString().slice(0,10);dateInput.min=localDate;}
const form=document.getElementById('appointmentForm');
if(form){
  // Portfolio demo behaviour: always show the success modal on submit, without validation or network requests.
  form.noValidate=true;
  const submit=form.querySelector('button[type="submit"]');
  const modal=document.getElementById('successModal');
  const close=document.getElementById('closeSuccess');
  const showModal=()=>{if(modal){modal.classList.add('open');if(close)close.focus();}};
  const hideModal=()=>{if(modal)modal.classList.remove('open');};
  form.addEventListener('submit',event=>{event.preventDefault();showModal();});
  // Defensive fallback for unusual preview environments: button clicks still show success.
  if(submit)submit.addEventListener('click',event=>{event.preventDefault();showModal();});
  if(close)close.addEventListener('click',hideModal);
  if(modal)modal.addEventListener('click',event=>{if(event.target===modal)hideModal();});
  document.addEventListener('keydown',event=>{if(event.key==='Escape')hideModal();});
}
