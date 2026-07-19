// IOTécnica — interações da página

// FAQ: mantém apenas um item aberto por vez
document.querySelectorAll('.faq-item').forEach(function (item) {
  item.addEventListener('toggle', function () {
    if (!item.open) return;
    document.querySelectorAll('.faq-item[open]').forEach(function (other) {
      if (other !== item) other.open = false;
    });
  });
});

// Chips de setor do formulário
var setorAtual = 'Indústria';
document.querySelectorAll('.setor-chips button').forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.setor-chips button').forEach(function (b) {
      b.setAttribute('aria-pressed', 'false');
    });
    btn.setAttribute('aria-pressed', 'true');
    setorAtual = btn.textContent.trim();
  });
});

// Formulário de briefing → mensagem no WhatsApp
document.getElementById('form-briefing').addEventListener('submit', function (e) {
  e.preventDefault();
  var f = e.target;
  var linhas = [
    'Olá, sou *' + f.nome.value.trim() + '*',
    f.empresa.value.trim() ? 'Empresa: ' + f.empresa.value.trim() : null,
    'Setor: ' + setorAtual,
    f.email.value.trim() ? 'E-mail: ' + f.email.value.trim() : null,
    f.tel.value.trim() ? 'Telefone: ' + f.tel.value.trim() : null,
    f.msg.value.trim()
      ? '\n' + f.msg.value.trim()
      : '\nGostaria de saber mais sobre as soluções da IOTécnica.'
  ].filter(Boolean).join('\n');
  window.open('https://wa.me/5519999406500?text=' + encodeURIComponent(linhas), '_blank', 'noopener');
});
