/* A LITTLE JOURNEY — rendering + interactions */
{
  const J = window.JOURNEY;
  const $ = (id) => document.getElementById(id);
  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };
  const svgUse = (id, cls, viewBox) => {
    const NS = "http://www.w3.org/2000/svg";
    const s = document.createElementNS(NS, "svg");
    if (cls) s.setAttribute("class", cls);
    if (viewBox) s.setAttribute("viewBox", viewBox);
    s.setAttribute("aria-hidden", "true");
    const u = document.createElementNS(NS, "use");
    u.setAttribute("href", "#" + id);
    s.appendChild(u);
    return s;
  };
  const pad = (n) => String(n).padStart(2, "0");

  /* ---------- cover ---------- */
  $("coverImg").src = J.cover.src;
  $("coverImg").alt = J.cover.alt || "";
  const photos = J.photos.filter((p) => p.src);
  $("coverMeta").textContent =
    `${J.postcards.length} POSTCARDS · ${photos.length} MOMENTS · COUNTLESS MILES`;

  /* ---------- photo diary ---------- */
  const tilts = [-1.2, 0.9, -0.5, 1.1, -0.8, 0.6];
  const grid = $("diaryGrid");
  let pi = 0;
  J.photos.forEach((item, i) => {
    if (item.note) {
      const n = el("div", "note reveal");
      n.appendChild(el("span", "note__line"));
      n.appendChild(el("p", null, item.note));
      if (item.pets) {
        const pets = el("div", "note__pets");
        pets.appendChild(svgUse("i-cat", null, "0 0 60 72"));
        pets.appendChild(svgUse("i-dog", null, "0 0 64 72"));
        n.appendChild(pets);
      } else {
        const cam = svgUse("i-camera", null, "0 0 24 24");
        cam.style.cssText = "width:26px;height:26px;margin-top:12px;color:var(--brown)";
        n.appendChild(cam);
      }
      grid.appendChild(n);
      return;
    }
    const idx = pi++;
    const f = el("figure", "print reveal");
    f.style.setProperty("--r", tilts[idx % tilts.length] + "deg");
    if (idx % 2 === 0) f.appendChild(el("span", "tape"));
    const b = el("button", "print__img");
    b.type = "button";
    b.setAttribute("aria-label", "放大照片：" + (item.alt || "MOMENT " + pad(idx + 1)));
    const img = el("img");
    img.src = item.src;
    img.alt = item.alt || "";
    img.loading = "lazy";
    img.decoding = "async";
    b.appendChild(img);
    b.addEventListener("click", () => openLb(idx));
    f.appendChild(b);
    const cap = el("figcaption");
    cap.appendChild(el("span", "num", "MOMENT " + pad(idx + 1)));
    if (item.caption) cap.appendChild(el("span", "hand", item.caption));
    f.appendChild(cap);
    grid.appendChild(f);
  });

  /* ---------- postcards ---------- */
  const variants = ["postcard", "letter", "postcard", "tag"];
  const stamps = [
    ["i-mountain", "#6F806A"], ["i-camera", "#B99D7D"], ["i-wave", "#8FA9B5"],
    ["i-paw", "#A5AD96"], ["i-sun", "#B99D7D"], ["i-camera", "#6F806A"]
  ];
  const tiltsPc = [-0.6, 0.5, -0.3, 0.7, -0.5, 0.3];
  // weight: CJK characters count fully, Latin about half
  const weight = (t) => [...t].reduce((s, c) => s + (/[　-鿿＀-￯]/.test(c) ? 1 : 0.42), 0);

  const pcGrid = $("pcGrid");
  J.postcards.forEach((p, i) => {
    const v = variants[i % variants.length];
    const card = el("article", `pc pc--${v}`);
    if (weight(p.message) > 165) card.classList.add("pc--wide");
    card.style.setProperty("--tilt", tiltsPc[i % tiltsPc.length] + "deg");

    if (v !== "letter") {
      const [icon, color] = stamps[i % stamps.length];
      const st = el("div", "stamp");
      const inner = el("div", "stamp__in");
      inner.style.setProperty("--stamp", color);
      inner.appendChild(svgUse(icon, null, "0 0 24 24"));
      inner.appendChild(el("span", null, "PID"));
      st.appendChild(inner);
      const mark = el("div", "pc__mark");
      mark.appendChild(svgUse("postmark", "postmark", "0 0 150 90"));
      mark.appendChild(st);
      card.appendChild(mark);
    }
    const label = v === "letter" ? "LETTER" : v === "tag" ? "NOTE" : "POSTCARD";
    card.appendChild(el("p", "pc__no", `${label} Nº ${pad(i + 1)}`));
    card.appendChild(el("p", "pc__msg", p.message));
    const from = el("p", "pc__from");
    from.appendChild(el("span", "kicker", "FROM"));
    from.appendChild(el("span", "hand", p.from));
    card.appendChild(from);
    pcGrid.appendChild(card);
  });

  /* ---------- ending ---------- */
  $("endingImg").src = J.ending.src;
  $("endingImg").alt = J.ending.alt || "";

  /* ---------- reveal on scroll ---------- */
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = document.querySelectorAll(".reveal, .pc");
  if (reduce || !("IntersectionObserver" in window)) {
    targets.forEach((t) => t.classList.add("in"));
  } else {
    let batch = 0, batchTimer;
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const t = e.target;
        if (t.classList.contains("pc")) {
          t.style.setProperty("--d", (batch++ * 0.12).toFixed(2) + "s");
          clearTimeout(batchTimer);
          batchTimer = setTimeout(() => (batch = 0), 200);
        }
        t.classList.add("in");
        revealObs.unobserve(t);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    targets.forEach((t) => revealObs.observe(t));
  }

  /* ---------- smooth scroll for in-page links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    });
  });

  /* ---------- lightbox ---------- */
  const lb = $("lb"), lbImg = $("lbImg");
  let cur = 0, lastFocus = null;
  function show(i) {
    cur = (i + photos.length) % photos.length;
    const p = photos[cur];
    lbImg.src = p.src;
    lbImg.alt = p.alt || "";
    $("lbCount").textContent = `${pad(cur + 1)} / ${pad(photos.length)}`;
    $("lbCap").textContent = p.caption || "";
    const multi = photos.length > 1;
    $("lbPrev").hidden = !multi;
    $("lbNext").hidden = !multi;
  }
  function openLb(i) {
    lastFocus = document.activeElement;
    show(i);
    lb.hidden = false;
    requestAnimationFrame(() => lb.classList.add("open"));
    document.body.style.overflow = "hidden";
    $("lbClose").focus();
  }
  function closeLb() {
    lb.classList.remove("open");
    document.body.style.overflow = "";
    setTimeout(() => (lb.hidden = true), 300);
    if (lastFocus) lastFocus.focus();
  }
  $("lbClose").addEventListener("click", closeLb);
  $("lbPrev").addEventListener("click", () => show(cur - 1));
  $("lbNext").addEventListener("click", () => show(cur + 1));
  lb.addEventListener("click", (e) => { if (e.target === lb) closeLb(); });
  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLb();
    if (e.key === "ArrowLeft") show(cur - 1);
    if (e.key === "ArrowRight") show(cur + 1);
  });
  let sx = null;
  lb.addEventListener("touchstart", (e) => (sx = e.touches[0].clientX), { passive: true });
  lb.addEventListener("touchend", (e) => {
    if (sx == null) return;
    const dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 50) show(cur + (dx < 0 ? 1 : -1));
    sx = null;
  });
}
