/* =========================================================
   BREAK YA · Cafetería virtual SENATI
   Demo 100% frontend (sin servidor). Datos en localStorage.
   ========================================================= */

/* ---------- DATOS DEL MENÚ ---------- */
const CATS = [
  { id: 'todo',    name: '✨ Todo' },
  { id: 'cafe',    name: '☕ Café' },
  { id: 'comida',  name: '🥪 Comida' },
  { id: 'piqueos', name: '🍟 Piqueos' },
  { id: 'bebidas', name: '🥤 Bebidas' }
];

const SIZES = [
  { id: 'S', label: 'Pequeño', add: 0 },
  { id: 'M', label: 'Mediano', add: 1.5 },
  { id: 'L', label: 'Grande',  add: 3 }
];

const EXTRAS_CAFE = [
  { id: 'shot',  label: 'Shot extra',      price: 2 },
  { id: 'vainilla', label: 'Jarabe vainilla', price: 1.5 },
  { id: 'crema', label: 'Crema batida',    price: 1.5 },
  { id: 'avena', label: 'Leche de avena',  price: 2 }
];
const EXTRAS_COMIDA = [
  { id: 'queso', label: 'Queso extra', price: 2 },
  { id: 'huevo', label: 'Huevo frito', price: 2 },
  { id: 'palta', label: 'Palta',       price: 3 }
];
const EXTRAS_PIQUEO = [
  { id: 'salsa', label: 'Salsa extra', price: 1 },
  { id: 'queso', label: 'Cheddar',     price: 2 },
  { id: 'picante', label: 'Ají picante', price: 0.5 }
];

const G = {
  brown:  'linear-gradient(135deg,#d9b48a,#a8744b)',
  orange: 'linear-gradient(135deg,#ffc58a,#ff8a3d)',
  gold:   'linear-gradient(135deg,#ffe29a,#f5b33d)',
  green:  'linear-gradient(135deg,#bfe8b0,#6dbb6a)',
  blue:   'linear-gradient(135deg,#bfdcf5,#6aa7de)',
  pink:   'linear-gradient(135deg,#ffd0d6,#f2859a)',
  red:    'linear-gradient(135deg,#ffb4a2,#e5533d)'
};

const PRODUCTS = [
  // CAFÉ
  { id: 1,  cat: 'cafe', name: 'Espresso',        desc: 'Intenso y corto, grano peruano.', price: 4.5,  emoji: '☕', bg: G.brown,  sizes: false, extras: EXTRAS_CAFE, tag: 'Clásico' },
  { id: 2,  cat: 'cafe', name: 'Americano',       desc: 'Espresso alargado, suave y limpio.', price: 5.0,  emoji: '☕', bg: G.brown,  sizes: true,  extras: EXTRAS_CAFE },
  { id: 3,  cat: 'cafe', name: 'Capuccino',       desc: 'Espresso, leche vaporizada y espuma.', price: 7.5,  emoji: '🥛', bg: G.orange, sizes: true,  extras: EXTRAS_CAFE, tag: '⭐ Top', top: true },
  { id: 4,  cat: 'cafe', name: 'Latte',           desc: 'Cremoso y suave, con mucha leche.', price: 8.0,  emoji: '🥛', bg: G.gold,   sizes: true,  extras: EXTRAS_CAFE },
  { id: 5,  cat: 'cafe', name: 'Moka',            desc: 'Café con chocolate y crema.', price: 9.0,  emoji: '🍫', bg: G.brown,  sizes: true,  extras: EXTRAS_CAFE },
  { id: 6,  cat: 'cafe', name: 'Café frío (Cold Brew)', desc: 'Infusión en frío 12 h, con hielo.', price: 9.5,  emoji: '🧊', bg: G.blue,   sizes: true,  extras: EXTRAS_CAFE, tag: 'Nuevo' },
  // COMIDA
  { id: 10, cat: 'comida', name: 'Sándwich de pollo', desc: 'Pollo deshilachado, lechuga y mayonesa.', price: 8.5, emoji: '🥪', bg: G.gold,  sizes: false, extras: EXTRAS_COMIDA, top: true, tag: '⭐ Top' },
  { id: 11, cat: 'comida', name: 'Triple clásico',    desc: 'Palta, tomate, huevo y mayonesa.', price: 7.0, emoji: '🥪', bg: G.green, sizes: false, extras: EXTRAS_COMIDA },
  { id: 12, cat: 'comida', name: 'Desayuno BREAK',    desc: 'Pan con tortilla + café + jugo.', price: 12.0, emoji: '🍳', bg: G.orange, sizes: false, extras: [] },
  { id: 13, cat: 'comida', name: 'Menú del día',      desc: 'Entrada, segundo y refresco.', price: 11.0, emoji: '🍛', bg: G.red,   sizes: false, extras: [], tag: 'Almuerzo' },
  { id: 14, cat: 'comida', name: 'Lomo saltado ligero', desc: 'Porción pequeña con arroz.', price: 13.5, emoji: '🥘', bg: G.red,  sizes: false, extras: EXTRAS_COMIDA },
  // PIQUEOS
  { id: 20, cat: 'piqueos', name: 'Salchipapa',     desc: 'Papas fritas, salchicha y cremas.', price: 8.0, emoji: '🍟', bg: G.gold,  sizes: false, extras: EXTRAS_PIQUEO, top: true, tag: '⭐ Top' },
  { id: 21, cat: 'piqueos', name: 'Empanada de carne', desc: 'Horneada, jugosa y crocante.', price: 4.5, emoji: '🥟', bg: G.orange, sizes: false, extras: EXTRAS_PIQUEO },
  { id: 22, cat: 'piqueos', name: 'Papa rellena',   desc: 'Rellena de carne, huevo y aceituna.', price: 6.5, emoji: '🥔', bg: G.brown, sizes: false, extras: EXTRAS_PIQUEO },
  { id: 23, cat: 'piqueos', name: 'Nuggets x6',     desc: 'Pollo crocante con salsa.', price: 7.5, emoji: '🍗', bg: G.orange, sizes: false, extras: EXTRAS_PIQUEO },
  { id: 24, cat: 'piqueos', name: 'Brownie',         desc: 'Chocolate intenso con nueces.', price: 5.5, emoji: '🍫', bg: G.pink,  sizes: false, extras: [], tag: 'Postre' },
  { id: 25, cat: 'piqueos', name: 'Alfajor',         desc: 'Con manjar blanco casero.', price: 3.0, emoji: '🍪', bg: G.gold,  sizes: false, extras: [], top: true },
  // BEBIDAS
  { id: 30, cat: 'bebidas', name: 'Jugo de naranja', desc: 'Recién exprimido.', price: 6.0, emoji: '🍊', bg: G.orange, sizes: true, extras: [] },
  { id: 31, cat: 'bebidas', name: 'Chicha morada',   desc: 'Casera, bien fría.', price: 4.5, emoji: '🍇', bg: G.pink, sizes: true, extras: [] },
  { id: 32, cat: 'bebidas', name: 'Gaseosa personal', desc: 'Inca Kola, Coca-Cola o Sprite.', price: 3.5, emoji: '🥤', bg: G.red, sizes: false, extras: [] },
  { id: 33, cat: 'bebidas', name: 'Agua mineral',    desc: 'Botella 500 ml.', price: 2.5, emoji: '💧', bg: G.blue, sizes: false, extras: [] },
  { id: 34, cat: 'bebidas', name: 'Infusión',        desc: 'Manzanilla, anís o té verde.', price: 3.0, emoji: '🍵', bg: G.green, sizes: false, extras: [] }
];

const PROMOS = [
  { title: 'Combo Break', text: 'Capuccino + Empanada de carne', price: 10.5, ids: [3, 21], bg: 'linear-gradient(135deg,#ff6a13,#e0560a)', emoji: '☕🥟' },
  { title: 'Combo Antojo', text: 'Salchipapa + Chicha morada', price: 11.5, ids: [20, 31], bg: 'linear-gradient(135deg,#4a2c1d,#2b1810)', emoji: '🍟' },
  { title: 'Dulce pausa', text: 'Latte + Brownie', price: 12.5, ids: [4, 24], bg: 'linear-gradient(135deg,#c2557a,#8e2f55)', emoji: '🍫' }
];

const SLOTS = ['09:30', '10:00', '12:30', '13:00', '13:30', '16:00', '16:30', '19:30', '20:00'];
const STATUS = ['Recibido', 'Preparando', 'Listo para recoger', 'Entregado'];
const STAFF_PIN = '1234';

/* ---------- ESTADO ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const money = n => 'S/ ' + Number(n).toFixed(2);
const load = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } };
const save = (k, v) => localStorage.setItem(k, JSON.stringify(v));

let cart = load('by_cart', []);
let orders = load('by_orders', []);
let user = load('by_user', null);
let soldOut = load('by_soldout', []);
let activeCat = 'todo';
let query = '';
let staffOK = false;
let staffTab = 'incoming';
let openSheet = null;

/* ---------- UTILIDADES UI ---------- */
function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove('show'), 2400);
}

function showSheet(id) {
  closeSheets(true);
  $('#overlay').classList.add('show');
  $('#' + id).classList.add('show');
  openSheet = id;
}
function closeSheets(keepOverlay) {
  $$('.sheet').forEach(s => s.classList.remove('show'));
  if (!keepOverlay) $('#overlay').classList.remove('show');
  openSheet = null;
}
$('#overlay').addEventListener('click', () => closeSheets());

function go(view) {
  $$('.view').forEach(v => v.classList.remove('active'));
  $('#view-' + view).classList.add('active');
  $$('.bottom-nav button').forEach(b => b.classList.toggle('active', b.dataset.go === view));
  closeSheets();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (view === 'orders') { renderOrders(); $('#ordersDot').hidden = true; }
  if (view === 'staff') renderStaff();
}
document.addEventListener('click', e => {
  const g = e.target.closest('[data-go]');
  if (g) { e.preventDefault(); go(g.dataset.go); }
});

const prod = id => PRODUCTS.find(p => p.id === id);
const isSold = id => soldOut.includes(id);

/* ---------- TARJETA DE PRODUCTO ---------- */
function productCard(p) {
  const sold = isSold(p.id);
  return `
    <article class="product" data-pid="${p.id}">
      ${sold ? '<div class="sold">Agotado</div>' : ''}
      <div class="p-img" style="background:${p.bg}">
        ${p.tag ? `<span class="p-tag">${p.tag}</span>` : ''}${p.emoji}
      </div>
      <div class="p-body">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="p-foot">
          <span class="price">${money(p.price)}</span>
          <button class="add" aria-label="Agregar ${p.name}">+</button>
        </div>
      </div>
    </article>`;
}

function renderHome() {
  $('#promoRow').innerHTML = PROMOS.map((p, i) => `
    <div class="promo" data-promo="${i}" style="background:${p.bg}">
      <h3>${p.title}</h3><p>${p.text}</p><b>${money(p.price)}</b><em>${p.emoji}</em>
    </div>`).join('');
  $('#featuredGrid').innerHTML = PRODUCTS.filter(p => p.top).map(productCard).join('');
}

function renderMenu() {
  $('#tabs').innerHTML = CATS.map(c =>
    `<button class="chip ${c.id === activeCat ? 'active' : ''}" data-cat="${c.id}">${c.name}</button>`).join('');
  const q = query.trim().toLowerCase();
  const list = PRODUCTS.filter(p =>
    (activeCat === 'todo' || p.cat === activeCat) &&
    (!q || (p.name + ' ' + p.desc).toLowerCase().includes(q)));
  $('#menuGrid').innerHTML = list.length
    ? list.map(productCard).join('')
    : '<div class="empty">😕 No encontramos productos con esa búsqueda.</div>';
}

$('#searchInput').addEventListener('input', e => { query = e.target.value; renderMenu(); });
document.addEventListener('click', e => {
  const c = e.target.closest('[data-cat]');
  if (c) { activeCat = c.dataset.cat; renderMenu(); return; }

  const card = e.target.closest('.product');
  if (card && !e.target.closest('.sold')) openProduct(+card.dataset.pid);

  const pr = e.target.closest('[data-promo]');
  if (pr) {
    const promo = PROMOS[+pr.dataset.promo];
    promo.ids.forEach(id => { if (!isSold(id)) addToCart({ id, size: null, extras: [], note: '', qty: 1 }, true); });
    toast('🎉 ' + promo.title + ' agregado al carrito');
  }
});

/* ---------- PERSONALIZAR PRODUCTO ---------- */
function openProduct(id) {
  const p = prod(id);
  if (isSold(id)) return toast('Ese producto está agotado por ahora');
  const st = { size: p.sizes ? 'S' : null, extras: [], qty: 1 };

  const sheet = $('#productSheet');
  const draw = () => {
    const sz = p.sizes ? SIZES.find(s => s.id === st.size).add : 0;
    const ex = p.extras.filter(e => st.extras.includes(e.id)).reduce((a, e) => a + e.price, 0);
    const unit = p.price + sz + ex;
    sheet.innerHTML = `
      <button class="close-x" data-close>✕</button>
      <div class="s-hero" style="background:${p.bg}">${p.emoji}</div>
      <h2>${p.name}</h2>
      <p style="color:var(--muted)">${p.desc}</p>
      ${p.sizes ? `<h4>Tamaño</h4><div class="opts">${SIZES.map(s =>
        `<button class="opt ${st.size === s.id ? 'on' : ''}" data-size="${s.id}">${s.label}${s.add ? ' +' + money(s.add) : ''}</button>`).join('')}</div>` : ''}
      ${p.extras.length ? `<h4>Extras</h4><div class="opts">${p.extras.map(e =>
        `<button class="opt ${st.extras.includes(e.id) ? 'on' : ''}" data-extra="${e.id}">${e.label} +${money(e.price)}</button>`).join('')}</div>` : ''}
      <h4>Notas especiales</h4>
      <textarea id="pNote" rows="2" placeholder="Ej: sin azúcar, poco hielo, sin cebolla...">${st.note || ''}</textarea>
      <div class="row between" style="margin-top:18px">
        <div class="qty"><button data-q="-1">−</button><b>${st.qty}</b><button data-q="1">+</button></div>
        <button class="btn btn-primary" data-confirm style="flex:1">Agregar · ${money(unit * st.qty)}</button>
      </div>`;
    sheet.querySelector('[data-close]').onclick = () => closeSheets();
    $$('[data-size]', sheet).forEach(b => b.onclick = () => { st.note = $('#pNote').value; st.size = b.dataset.size; draw(); });
    $$('[data-extra]', sheet).forEach(b => b.onclick = () => {
      st.note = $('#pNote').value;
      const i = st.extras.indexOf(b.dataset.extra);
      i > -1 ? st.extras.splice(i, 1) : st.extras.push(b.dataset.extra);
      draw();
    });
    $$('[data-q]', sheet).forEach(b => b.onclick = () => { st.note = $('#pNote').value; st.qty = Math.max(1, st.qty + +b.dataset.q); draw(); });
    $('[data-confirm]', sheet).onclick = () => {
      addToCart({ id, size: st.size, extras: [...st.extras], note: $('#pNote').value.trim(), qty: st.qty });
      closeSheets();
    };
  };
  draw();
  showSheet('productSheet');
}

/* ---------- CARRITO ---------- */
function unitPrice(it) {
  const p = prod(it.id);
  const sz = it.size ? SIZES.find(s => s.id === it.size).add : 0;
  const ex = p.extras.filter(e => it.extras.includes(e.id)).reduce((a, e) => a + e.price, 0);
  return p.price + sz + ex;
}
const cartTotal = () => cart.reduce((a, it) => a + unitPrice(it) * it.qty, 0);
const cartCount = () => cart.reduce((a, it) => a + it.qty, 0);
const itemKey = it => [it.id, it.size, [...it.extras].sort().join('+'), it.note].join('|');

function addToCart(it, silent) {
  const key = itemKey(it);
  const found = cart.find(c => itemKey(c) === key);
  if (found) found.qty += it.qty; else cart.push(it);
  persistCart();
  if (!silent) toast('✅ ' + prod(it.id).name + ' agregado');
  const b = $('#cartCount'); b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump');
}
function persistCart() {
  save('by_cart', cart);
  $('#cartCount').textContent = cartCount();
  const fc = $('#floatCart');
  fc.hidden = cartCount() === 0;
  $('#floatCount').textContent = cartCount();
  $('#floatTotal').textContent = money(cartTotal());
}
function itemDesc(it) {
  const p = prod(it.id);
  const bits = [];
  if (it.size) bits.push(SIZES.find(s => s.id === it.size).label);
  p.extras.filter(e => it.extras.includes(e.id)).forEach(e => bits.push(e.label));
  if (it.note) bits.push('“' + it.note + '”');
  return bits.join(' · ');
}

function openCart() {
  const s = $('#cartSheet');
  if (!cart.length) {
    s.innerHTML = `<button class="close-x" data-close>✕</button>
      <h2>Tu carrito</h2>
      <div class="empty" style="padding:30px 0">🛒<br>Aún no agregaste nada.<br><br>
      <button class="btn btn-primary" data-go="menu">Ver menú</button></div>`;
  } else {
    s.innerHTML = `<button class="close-x" data-close>✕</button>
      <h2>Tu carrito</h2>
      ${cart.map((it, i) => { const p = prod(it.id); return `
        <div class="cart-item">
          <div class="ci-ico" style="background:${p.bg}">${p.emoji}</div>
          <div class="ci-info"><b>${p.name}</b><small>${itemDesc(it) || 'Sin personalizar'}</small><b style="color:var(--accent-dark)">${money(unitPrice(it) * it.qty)}</b></div>
          <div class="qty"><button data-dec="${i}">−</button><b>${it.qty}</b><button data-inc="${i}">+</button></div>
        </div>`; }).join('')}
      <div class="totals">
        <div class="row between"><span>Subtotal</span><span>${money(cartTotal())}</span></div>
        <div class="row between"><span>Comisión de servicio</span><span>S/ 0.00</span></div>
        <div class="row between grand"><span>Total</span><span>${money(cartTotal())}</span></div>
      </div>
      <button class="btn btn-primary btn-block btn-lg" data-checkout>Continuar al pago →</button>
      <button class="btn btn-ghost btn-block" style="margin-top:10px" data-clear>Vaciar carrito</button>`;
  }
  s.querySelector('[data-close]').onclick = () => closeSheets();
  $$('[data-dec]', s).forEach(b => b.onclick = () => { const i = +b.dataset.dec; cart[i].qty--; if (cart[i].qty <= 0) cart.splice(i, 1); persistCart(); openCart(); });
  $$('[data-inc]', s).forEach(b => b.onclick = () => { cart[+b.dataset.inc].qty++; persistCart(); openCart(); });
  const clr = $('[data-clear]', s); if (clr) clr.onclick = () => { cart = []; persistCart(); closeSheets(); };
  const co = $('[data-checkout]', s); if (co) co.onclick = () => { if (!user) { openUser(true); } else openCheckout(); };
  showSheet('cartSheet');
}
$('#btnCart').onclick = openCart;
$('#floatCart').onclick = openCart;

/* ---------- CUENTA ---------- */
function openUser(thenCheckout) {
  const s = $('#userSheet');
  if (user) {
    s.innerHTML = `<button class="close-x" data-close>✕</button>
      <h2>Mi cuenta</h2>
      <div class="card"><b>${user.name}</b><br><span style="color:var(--muted)">${user.contact}</span></div>
      <p style="color:var(--muted);margin-bottom:12px">Pedidos realizados: <b>${orders.filter(o => o.user === user.contact).length}</b></p>
      <button class="btn btn-ghost btn-block" data-logout>Cerrar sesión</button>`;
    $('[data-logout]', s).onclick = () => { user = null; save('by_user', null); closeSheets(); toast('Sesión cerrada'); };
  } else {
    s.innerHTML = `<button class="close-x" data-close>✕</button>
      <h2>Ingresa a BREAK YA</h2>
      <p style="color:var(--muted);margin-bottom:12px">Usa tu correo institucional o tu celular para guardar tu historial.</p>
      <div style="display:grid;gap:10px">
        <input class="field" id="uName" placeholder="Tu nombre" autocomplete="name">
        <input class="field" id="uContact" placeholder="Correo SENATI o celular (9 dígitos)" autocomplete="email">
        <button class="btn btn-primary btn-block" id="uGo">Ingresar</button>
      </div>`;
    $('#uGo', s).onclick = () => {
      const name = $('#uName').value.trim();
      const contact = $('#uContact').value.trim();
      const okMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
      const okTel = /^9\d{8}$/.test(contact);
      if (name.length < 2) return toast('Escribe tu nombre');
      if (!okMail && !okTel) return toast('Correo o celular no válido');
      user = { name, contact }; save('by_user', user);
      toast('👋 ¡Hola, ' + name.split(' ')[0] + '!');
      thenCheckout === true ? openCheckout() : closeSheets();
    };
  }
  s.querySelector('[data-close]').onclick = () => closeSheets();
  showSheet('userSheet');
}
$('#btnUser').onclick = () => openUser();

/* ---------- CHECKOUT ---------- */
function openCheckout() {
  const st = { when: 'asap', slot: SLOTS[0], pay: 'yape' };
  const s = $('#checkoutSheet');
  const draw = () => {
    s.innerHTML = `<button class="close-x" data-close>✕</button>
      <h2>Pagar y recoger</h2>

      <h4>⏰ ¿Cuándo recoges?</h4>
      <div class="opts">
        <button class="opt ${st.when === 'asap' ? 'on' : ''}" data-when="asap">⚡ Lo antes posible</button>
        <button class="opt ${st.when === 'slot' ? 'on' : ''}" data-when="slot">🕒 Programar hora</button>
      </div>
      ${st.when === 'slot' ? `<div class="slots" style="margin-top:10px">${SLOTS.map(h =>
        `<button class="opt ${st.slot === h ? 'on' : ''}" data-slot="${h}">${h}</button>`).join('')}</div>` : ''}

      <h4>💳 Método de pago</h4>
      <div class="pay-methods">
        <button class="pay ${st.pay === 'yape' ? 'on' : ''}" data-pay="yape"><span>💜</span>Yape</button>
        <button class="pay ${st.pay === 'plin' ? 'on' : ''}" data-pay="plin"><span>💙</span>Plin</button>
        <button class="pay ${st.pay === 'card' ? 'on' : ''}" data-pay="card"><span>💳</span>Tarjeta</button>
      </div>
      <div class="pay-box">
        ${st.pay === 'card' ? `
          <input class="field" id="cNum" inputmode="numeric" maxlength="19" placeholder="Número de tarjeta">
          <div class="two">
            <input class="field" id="cExp" inputmode="numeric" maxlength="5" placeholder="MM/AA">
            <input class="field" id="cCvv" inputmode="numeric" maxlength="4" placeholder="CVV">
          </div>
          <input class="field" id="cName" placeholder="Nombre en la tarjeta">`
        : `
          <span>Envía ${money(cartTotal())} al número de BREAK YA:</span>
          <div class="big">999 888 777</div>
          <input class="field" id="opCode" inputmode="numeric" maxlength="6" placeholder="Código de aprobación (6 dígitos)">
          <small style="color:var(--muted)">Demo: ingresa cualquier código de 6 dígitos.</small>`}
      </div>

      <div class="totals">
        <div class="row between grand"><span>Total a pagar</span><span>${money(cartTotal())}</span></div>
      </div>
      <button class="btn btn-primary btn-block btn-lg" id="payNow">🔒 Pagar ${money(cartTotal())}</button>`;

    s.querySelector('[data-close]').onclick = () => closeSheets();
    $$('[data-when]', s).forEach(b => b.onclick = () => { st.when = b.dataset.when; draw(); });
    $$('[data-slot]', s).forEach(b => b.onclick = () => { st.slot = b.dataset.slot; draw(); });
    $$('[data-pay]', s).forEach(b => b.onclick = () => { st.pay = b.dataset.pay; draw(); });
    const num = $('#cNum', s);
    if (num) num.oninput = () => num.value = num.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
    const exp = $('#cExp', s);
    if (exp) exp.oninput = () => { let v = exp.value.replace(/\D/g, ''); if (v.length > 2) v = v.slice(0, 2) + '/' + v.slice(2); exp.value = v; };
    $('#payNow', s).onclick = () => pay(st);
  };
  draw();
  showSheet('checkoutSheet');
}

function pay(st) {
  const s = $('#checkoutSheet');
  if (st.pay === 'card') {
    const n = $('#cNum').value.replace(/\s/g, '');
    if (n.length < 13) return toast('Número de tarjeta incompleto');
    if (!/^\d\d\/\d\d$/.test($('#cExp').value)) return toast('Fecha inválida (MM/AA)');
    if ($('#cCvv').value.length < 3) return toast('CVV inválido');
    if ($('#cName').value.trim().length < 3) return toast('Escribe el nombre de la tarjeta');
  } else if (!/^\d{6}$/.test($('#opCode').value)) {
    return toast('Ingresa el código de 6 dígitos');
  }
  const btn = $('#payNow', s);
  btn.disabled = true; btn.textContent = 'Procesando pago…';

  setTimeout(() => {
    const code = 'BY-' + Math.floor(1000 + Math.random() * 9000);
    const order = {
      id: Date.now(), code, user: user.contact, userName: user.name,
      items: cart.map(it => ({ id: it.id, name: prod(it.id).name, emoji: prod(it.id).emoji, qty: it.qty, desc: itemDesc(it), raw: it })),
      total: cartTotal(), pay: st.pay,
      when: st.when === 'asap' ? 'Lo antes posible' : 'Hoy a las ' + st.slot,
      status: 0, manual: false, created: Date.now()
    };
    orders.unshift(order); save('by_orders', orders);
    cart = []; persistCart();
    showSuccess(order);
  }, 1500);
}

function showSuccess(o) {
  const s = $('#checkoutSheet');
  s.innerHTML = `<div class="success">
      <div class="check">✓</div>
      <h2>¡Pago confirmado!</h2>
      <p style="color:var(--muted)">Muestra este código en el mostrador</p>
      <div class="code">${o.code}</div>
      <div class="qr"><canvas id="qrc" width="170" height="170"></canvas></div>
      <p><b>${o.when}</b> · ${money(o.total)}</p>
      <button class="btn btn-primary btn-block btn-lg" style="margin-top:16px" id="goTrack">Seguir mi pedido</button>
      <button class="btn btn-ghost btn-block" style="margin-top:10px" data-go="menu">Seguir pidiendo</button>
    </div>`;
  drawQR($('#qrc'), o.code);
  $('#goTrack').onclick = () => openTrack(o.id);
}

/* QR visual de demostración (patrón determinístico a partir del código).
   Para un QR real escaneable, usa una librería como qrcode.js. */
function drawQR(canvas, text) {
  const N = 25, px = canvas.width / N, ctx = canvas.getContext('2d');
  ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, canvas.width, canvas.height);
  let h = 2166136261;
  for (const c of text) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); }
  const rnd = () => (h = Math.imul(h ^ (h >>> 15), 2246822507) >>> 0) / 4294967296;
  ctx.fillStyle = '#2b1810';
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    const inFinder = (x < 8 && y < 8) || (x > N - 9 && y < 8) || (x < 8 && y > N - 9);
    if (!inFinder && rnd() > 0.5) ctx.fillRect(x * px, y * px, px, px);
  }
  [[0, 0], [N - 7, 0], [0, N - 7]].forEach(([fx, fy]) => {
    ctx.fillStyle = '#2b1810'; ctx.fillRect(fx * px, fy * px, 7 * px, 7 * px);
    ctx.fillStyle = '#fff'; ctx.fillRect((fx + 1) * px, (fy + 1) * px, 5 * px, 5 * px);
    ctx.fillStyle = '#ff6a13'; ctx.fillRect((fx + 2) * px, (fy + 2) * px, 3 * px, 3 * px);
  });
}

/* ---------- SEGUIMIENTO ---------- */
let trackingId = null;
function openTrack(id) {
  trackingId = id;
  renderTrack();
  showSheet('trackSheet');
}
function renderTrack() {
  const o = orders.find(x => x.id === trackingId);
  if (!o) return;
  const steps = [
    ['📥', 'Pedido recibido', 'Ya llegó a la cocina'],
    ['👨‍🍳', 'Preparando', 'Estamos armando tu pedido'],
    ['🔔', 'Listo para recoger', 'Pasa por el mostrador con tu código']
  ];
  $('#trackSheet').innerHTML = `<button class="close-x" data-close>✕</button>
    <h2>Pedido ${o.code}</h2>
    <p style="color:var(--muted)">${o.when} · ${money(o.total)}</p>
    <div class="timeline">${steps.map((t, i) => {
      const cls = o.status > i || o.status === 3 ? 'done' : o.status === i ? 'now' : 'wait';
      return `<div class="tl ${cls}"><div class="tl-dot">${cls === 'done' ? '✓' : t[0]}</div><div><p>${t[1]}</p><small>${t[2]}</small></div></div>`;
    }).join('')}</div>
    ${o.status === 2 ? '<div class="card" style="text-align:center;background:#dcf6e6"><b>🎉 ¡Tu pedido está listo!</b><br>Muestra el código <b>' + o.code + '</b></div>' : ''}
    <div class="qr" style="display:block;text-align:center"><canvas id="qrt" width="170" height="170" style="margin:auto"></canvas></div>
    <div class="order-items">${o.items.map(i => i.qty + '× ' + i.name).join(' · ')}</div>`;
  $('#trackSheet [data-close]').onclick = () => closeSheets();
  drawQR($('#qrt'), o.code);
}

/* ---------- MIS PEDIDOS ---------- */
function renderOrders() {
  const mine = user ? orders.filter(o => o.user === user.contact) : [];
  const box = $('#ordersList');
  if (!user) {
    box.innerHTML = `<div class="card lock"><p>Inicia sesión para ver tu historial.</p><button class="btn btn-primary" id="loginHere">Ingresar</button></div>`;
    $('#loginHere').onclick = () => openUser();
    return;
  }
  if (!mine.length) {
    box.innerHTML = `<div class="empty" style="padding:40px 0">🧾<br>Aún no tienes pedidos.<br><br><button class="btn btn-primary" data-go="menu">Pedir ahora</button></div>`;
    return;
  }
  box.innerHTML = mine.map(o => `
    <div class="card">
      <div class="order-top"><b>${o.code}</b><span class="status st-${o.status}">${STATUS[o.status]}</span></div>
      <small style="color:var(--muted)">${new Date(o.created).toLocaleString('es-PE', { dateStyle: 'medium', timeStyle: 'short' })} · ${o.when}</small>
      <div class="order-items">${o.items.map(i => `${i.emoji} ${i.qty}× ${i.name}`).join('<br>')}</div>
      <div class="row between"><b>${money(o.total)}</b>
        <div class="order-actions">
          ${o.status < 3 ? `<button class="btn btn-primary" data-track="${o.id}">Seguir</button>` : ''}
          <button class="btn btn-ghost" data-repeat="${o.id}">🔁 Repetir</button>
        </div>
      </div>
    </div>`).join('');
  $$('[data-track]', box).forEach(b => b.onclick = () => openTrack(+b.dataset.track));
  $$('[data-repeat]', box).forEach(b => b.onclick = () => {
    const o = orders.find(x => x.id === +b.dataset.repeat);
    o.items.forEach(i => { if (!isSold(i.raw.id)) addToCart({ ...i.raw, extras: [...i.raw.extras] }, true); });
    toast('🔁 Pedido agregado al carrito');
    openCart();
  });
}

/* ---------- PANEL DEL PERSONAL ---------- */
function renderStaff() {
  $('#staffLock').hidden = staffOK;
  $('#staffPanel').hidden = !staffOK;
  $('#staffLogout').hidden = !staffOK;
  if (!staffOK) return;
  $$('[data-stab]').forEach(b => b.classList.toggle('active', b.dataset.stab === staffTab));
  $('#staffIncoming').hidden = staffTab !== 'incoming';
  $('#staffStock').hidden = staffTab !== 'stock';

  const active = orders.filter(o => o.status < 3);
  $('#staffIncoming').innerHTML = active.length ? active.map(o => `
    <div class="card">
      <div class="order-top"><b>${o.code}</b><span class="status st-${o.status}">${STATUS[o.status]}</span></div>
      <small style="color:var(--muted)">👤 ${o.userName} · ⏰ ${o.when} · ${o.pay.toUpperCase()}</small>
      <div class="order-items">${o.items.map(i => `${i.emoji} <b>${i.qty}×</b> ${i.name}${i.desc ? ' <i>(' + i.desc + ')</i>' : ''}`).join('<br>')}</div>
      <div class="order-actions">
        ${o.status === 0 ? `<button class="btn btn-primary" data-set="${o.id}:1">👨‍🍳 Preparar</button>` : ''}
        ${o.status === 1 ? `<button class="btn btn-primary" data-set="${o.id}:2">🔔 Marcar listo</button>` : ''}
        ${o.status === 2 ? `<button class="btn btn-ok" data-set="${o.id}:3">✅ Entregado</button>` : ''}
      </div>
    </div>`).join('') : '<div class="empty" style="padding:30px 0">☕ No hay pedidos pendientes.</div>';
  $$('[data-set]', $('#staffIncoming')).forEach(b => b.onclick = () => {
    const [id, st] = b.dataset.set.split(':').map(Number);
    setStatus(id, st, true);
  });

  $('#staffStock').innerHTML = PRODUCTS.map(p => `
    <div class="stock-row">
      <span>${p.emoji} <b>${p.name}</b> <small style="color:var(--muted)">${money(p.price)}</small></span>
      <button class="switch ${isSold(p.id) ? 'off' : ''}" data-stock="${p.id}" aria-label="Disponible"></button>
    </div>`).join('');
  $$('[data-stock]', $('#staffStock')).forEach(b => b.onclick = () => {
    const id = +b.dataset.stock;
    soldOut = isSold(id) ? soldOut.filter(x => x !== id) : [...soldOut, id];
    save('by_soldout', soldOut);
    renderStaff(); renderHome(); renderMenu();
  });
}
$$('[data-stab]').forEach(b => b.onclick = () => { staffTab = b.dataset.stab; renderStaff(); });
$('#staffEnter').onclick = () => {
  if ($('#staffPin').value === STAFF_PIN) { staffOK = true; $('#staffPin').value = ''; renderStaff(); }
  else toast('PIN incorrecto');
};
$('#staffLogout').onclick = () => { staffOK = false; renderStaff(); };

/* ---------- ESTADOS (manual del personal o simulación automática) ---------- */
function setStatus(id, st, manual) {
  const o = orders.find(x => x.id === id);
  if (!o || o.status === st) return;
  o.status = st;
  if (manual) o.manual = true;
  save('by_orders', orders);
  if (st === 2) notifyReady(o);
  if (openSheet === 'trackSheet' && trackingId === id) renderTrack();
  if ($('#view-staff').classList.contains('active')) renderStaff();
  if ($('#view-orders').classList.contains('active')) renderOrders();
}
function notifyReady(o) {
  toast('🔔 ¡Pedido ' + o.code + ' listo para recoger!');
  if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
  if (!$('#view-orders').classList.contains('active')) $('#ordersDot').hidden = false;
  try { if ('Notification' in window && Notification.permission === 'granted') new Notification('BREAK YA', { body: 'Tu pedido ' + o.code + ' está listo para recoger ☕' }); } catch (e) {}
}
// Simulación: si el personal no lo cambia, avanza solo (demo)
setInterval(() => {
  orders.forEach(o => {
    if (o.manual || o.status >= 2) return;
    const secs = (Date.now() - o.created) / 1000;
    if (secs > 25) setStatus(o.id, 2, false);
    else if (secs > 8 && o.status === 0) setStatus(o.id, 1, false);
  });
}, 1500);
// Sincroniza entre pestañas (cliente y personal en el mismo navegador)
window.addEventListener('storage', e => {
  if (e.key === 'by_orders') { orders = load('by_orders', []); if (openSheet === 'trackSheet') renderTrack(); renderStaff(); renderOrders(); }
  if (e.key === 'by_soldout') { soldOut = load('by_soldout', []); renderHome(); renderMenu(); renderStaff(); }
});

/* ---------- INICIO ---------- */
renderHome();
renderMenu();
persistCart();
if ('Notification' in window && Notification.permission === 'default') {
  document.addEventListener('click', () => Notification.requestPermission().catch(() => {}), { once: true });
}
