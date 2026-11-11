// Menu responsivo
const btn = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');
btn.addEventListener('click', () => {
  const aberto = menu.classList.toggle('aberto');
  btn.setAttribute('aria-expanded', aberto);
});

// Filtro de pontos turísticos
document.querySelectorAll('.filtros button').forEach(b => {
  b.addEventListener('click', () => {
    document.querySelectorAll('.filtros button').forEach(x => x.classList.remove('ativo'));
    b.classList.add('ativo');
    document.querySelectorAll('#lista > div').forEach(item => {
      item.hidden = b.dataset.f !== 'todos' && item.dataset.t !== b.dataset.f;
    });
  });
});

// Validação do formulário de contato
const form = document.getElementById('form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const status = document.getElementById('status');
    let ok = true;
    form.querySelectorAll('input,textarea').forEach(c => {
      const valido = c.value.trim() !== '' && c.checkValidity();
      c.classList.toggle('erro', !valido);
      if (!valido) ok = false;
    });
    status.textContent = ok ? 'Sugestão enviada. Obrigado!' : 'Preencha todos os campos corretamente.';
    if (ok) form.reset();
  });
}
