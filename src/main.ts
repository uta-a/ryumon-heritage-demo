import '@fontsource/noto-serif-jp/400.css';
import '@fontsource/noto-serif-jp/500.css';
import '@fontsource/noto-sans-jp/400.css';
import './style.css';

const arrow = '<span aria-hidden="true">→</span>';
const tag = (n: string, text: string) => `<div class="section-tag"><span>${n}</span><span>${text}</span><i></i></div>`;
const detail = (id: string, text = '詳しく見る') => `<button class="text-link" data-detail="${id}">${text} ${arrow}</button>`;
const reserve = (className = '') => `<button class="button primary ${className}" data-detail="contact">ご相談・ご予約 ${arrow}</button>`;
const imageAssets = {
  hero: { alt: '朱赤の布と灯火を描いた継承のイメージ画', width: 1536, height: 1024 },
  temple: { alt: '韓国・慶州の仏国寺・極楽殿を参考にした建築イラスト。龍門精舎の実店舗ではありません', width: 1536, height: 1024 },
  candle: { alt: 'ろうそくと無地の器を描いた灯火のイメージ画', width: 1600, height: 728 },
  saju: { alt: '未記入の紙と閉じた本を描いた読み解きのイメージ画', width: 1600, height: 728 },
  prayer: { alt: '朱赤の布と木の器を描いた静けさのイメージ画。儀式の記録ではありません', width: 1536, height: 1024 },
  talisman: { alt: '文字のない黄土色の紙と無地の布袋のイメージ画。実際の商品ではありません', width: 1600, height: 728 },
  craft: { alt: '筆と未記入の紙を描いた手仕事のイメージ画', width: 1600, height: 582 },
  robes: { alt: '朱赤と青の織物を描いた素材のイメージ画', width: 1536, height: 1024 },
  incense: { alt: '無地の器と一筋の煙を描いた静けさのイメージ画', width: 1200, height: 1200 },
  teacher: { alt: '朱赤の布と筆を描いた先生紹介用の仮イメージ画。人物写真ではありません', width: 1600, height: 640 },
  shop: { alt: '無地の布袋と未記入の紙を描いたショップ案内のイメージ画。実際の商品ではありません', width: 1536, height: 1024 },
  access: { alt: '木片と道を思わせる線のイメージ画。実際の地図や店舗ではありません', width: 1536, height: 1024 },
};
const image = (name: keyof typeof imageAssets, className = '') => {
  const asset = imageAssets[name];
  return `<img class="asset ${className}" src="/images/${name}.webp" alt="${asset.alt}。AI生成" width="${asset.width}" height="${asset.height}" ${name === 'hero' ? 'fetchpriority="high"' : 'loading="lazy"'} />`;
};
const nav = `<a href="#about">龍門精舎について</a><a href="#services">占い・祈祷</a><a href="#teacher">先生紹介</a><a href="#flow">初めての方へ</a><button data-detail="news">お知らせ</button>`;
const logo = `<span class="logo-jp">龍門精舎<small>KOREAN SPIRITUAL HERITAGE</small></span><span class="logo-kr" lang="ko">용문정사</span>`;
const services = [
  { id: 'reading', title: '霊感占い', image: 'candle', text: '豊かな霊性をもとに、現在の状況や未来の可能性を読み解きます。' },
  { id: 'saju', title: '四柱推命', image: 'saju', text: '生年月日から運命の流れを読み、人生の転機や適性を導き出します。' },
  { id: 'prayer', title: '祈祷', image: 'prayer', text: '願いの成就や厄除け、家内安全など、さまざまな祈願を行っています。' },
  { id: 'amulet', title: '霊符・お守り', image: 'talisman', text: '手書きの霊符やお守りを通じて、日々の生活を支えます。' },
] as const;
const icons = {
  calendar: '<rect x="6" y="8" width="24" height="23" rx="1"/><path d="M6 15h24M12 4v8M24 4v8M12 20h2m6 0h2m-10 6h2m6 0h2"/>',
  chat: '<path d="M30 17c0 7-6 12-14 12l-7 4 1-7C1 17 7 6 18 6c8 0 12 5 12 11Z"/><path d="M12 17h1m5 0h1m5 0h1"/>',
  lotus: '<path d="M18 30C7 25 10 12 18 4c8 8 11 21 0 26ZM18 30C5 30 3 20 3 13c8 0 13 5 15 17Zm0 0c13 0 15-10 15-17-8 0-13 5-15 17ZM5 32h26"/>',
  document: '<path d="M10 4h15l5 5v23H10ZM25 4v6h5M15 15h10M15 20h10M15 25h7M6 9v25h18"/>',
};
const icon = (name: keyof typeof icons) => `<svg viewBox="0 0 36 36" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true">${icons[name]}</svg>`;

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <a class="skip-link" href="#main">本文へ移動</a>
  <header class="header">
    <a href="#" class="brand" aria-label="龍門精舎 トップ">${logo}</a>
    <nav class="desktop-nav" aria-label="メインナビゲーション">${nav}</nav>
    <span class="language" aria-label="日本語サイト">JP <i>|</i> KR</span>
    ${reserve('header-reserve')}
    <button class="menu-toggle" aria-expanded="false" aria-controls="mobile-nav" aria-label="メニューを開く"><span></span><span></span></button>
  </header>
  <nav id="mobile-nav" class="mobile-nav" aria-label="モバイルナビゲーション" hidden>${nav}${reserve()}</nav>
  <main id="main">
    <section class="hero" aria-labelledby="hero-heading">
      <div class="hero-visual">
        ${image('hero', 'hero-image')}
        <p class="hero-vertical">伝統が照らす、<br />あなたのこれから。</p>
      </div>
      <aside class="hero-rail" aria-label="ページ内ナビゲーション"><a href="#main" class="current">01</a><a href="#about">02</a><a href="#services">03</a><a href="#craft">04</a><a href="#teacher">05</a><a href="#flow">06</a><span>SCROLL ${arrow}</span></aside>
      <div class="hero-copy"><p class="eyebrow">KOREAN SPIRITUAL HERITAGE</p><h1 id="hero-heading">受け継がれる祈りと、<br />人生に寄り添う導き。</h1><p class="intro">龍門精舎は、韓国の伝統的な占い・祈祷の文化を継承し。<br />一人ひとりの悩みや願いに寄り添いながら、<br />よりよい未来への導きをお手伝いします。</p><div class="hero-actions">${reserve()}<a class="button outline" href="#services">サービスを見る ${arrow}</a></div></div>
      <span class="hero-page">01 <i>―</i> 祈りの文化 ${arrow}</span>
      <a class="hero-scroll" href="#about">SCROLL <span aria-hidden="true">↓</span></a>
    </section>
    <section id="about" class="about paper-section">
      <div class="about-copy">${tag('02', 'ABOUT')}<h2>龍門精舎について</h2><p>龍門精舎は、韓国に伝わる伝統的な占い・祈祷の文化を<br class="desktop-break" />受け継ぎ、多くの方の人生の悩みや願いに寄り添ってきました。<br />長年の経験と深い洞察をもとに、<br />一人ひとりに合わせた丁寧な鑑定と祈祷を行っています。</p>${detail('about')}</div>
      <figure class="temple-reference">
        ${image('temple', 'about-image')}
        <figcaption>仏国寺・極楽殿を参考にしたAIイラスト。<br />龍門精舎の実店舗ではありません。<br /><a href="https://commons.wikimedia.org/wiki/File:Geungnakjeon,_Bulguksa_01.jpg" target="_blank" rel="noopener noreferrer">参照写真：Bernard Gagnon / CC0</a></figcaption>
      </figure>
      <div class="about-message"><h3>時を超えて<br />受け継がれる、<br />祈りの文化。</h3><p>伝統と精神を大切にしながら、<br />現代を生きる人々の悩みと向き合い、<br />未来への道を照らしています。</p>${detail('about')}</div>
    </section>
    <section id="services" class="services">
      <div class="services-intro">${tag('03', 'SERVICES')}<h2>占い・祈祷サービス</h2><p>人生のさまざまな悩みに応じて、<br />伝統的な占術と祈祷を通じた<br />サービスを提供しています。</p></div>
      <div class="service-grid">${services.map((s, index) => `<button class="service-card" data-detail="${s.id}">${image(s.image)}<span class="service-content"><span class="service-title">${s.title}</span><span class="service-description">${s.text}</span><span class="card-bottom">${arrow}<span>0${index + 1}</span></span></span></button>`).join('')}</div>
      <button class="text-link services-all-link" data-detail="services">すべてのサービスを見る ${arrow}</button>
    </section>
    <section id="craft" class="craft">
      ${image('craft', 'craft-image')}
      <div class="craft-copy">${tag('04', 'RITUAL & CRAFT')}<h2>祈りと手仕事</h2><p>一枚一枚に心を込めて書かれる霊符。<br />伝統的な儀式と手仕事には、<br />長い歴史の中で受け継がれてきた<br />深い意味と願いが込められています。</p>${detail('craft')}</div>
      <div class="craft-details">${image('robes')}${image('incense')}</div>
      <div class="craft-message"><h3>伝統が息づく、<br />祈りの手仕事。</h3><span class="short-rule"></span></div>
    </section>
    <section id="teacher" class="teacher">
      ${image('teacher', 'teacher-image')}
      <div class="teacher-copy">${tag('05', 'TEACHER')}<h2>先生紹介</h2><p>龍門精舎の鑑定・祈祷を担う先生をご紹介します。<br />長年の経験と深い洞察に基づき、<br />一人ひとりに真摯に向き合い、導きを伝えます。</p>${detail('teacher')}</div>
      <div class="teacher-message"><h3>人の心に寄り添い、<br />未来への道を照らす。</h3><p>これまで多くの方の人生の転機に寄り添い、<br />悩みや願いに向き合ってきました。<br />伝統の教えをもとに、皆さまの幸せな未来のために<br />真心を込めてお手伝いします。</p>${detail('teacher', '先生について')}</div>
    </section>
    <section id="flow" class="flow paper-section">
      <div class="flow-copy">${tag('06', 'FLOW')}<h2>初めての方へ</h2><p>ご相談の流れや料金、よくあるご質問を<br />分かりやすくご案内しています。</p></div>
      <ol class="flow-steps">${(['calendar', 'chat', 'lotus', 'document'] as const).map((name, i) => `<li><button data-detail="flow"><span class="step-number">0${i + 1}</span>${icon(name)}<span>${['ご予約', 'ご相談', '鑑定・祈祷', 'アフターフォロー'][i]}</span></button>${i < 3 ? arrow : ''}</li>`).join('')}</ol>
      <button class="flow-message" data-detail="flow">あなたの悩みに<br />寄り添い、<br />ともに考えます。<span>${arrow}</span></button>
    </section>
    <div class="bottom-grid">
      <section id="shop" class="bottom-panel shop">${image('shop')}<div>${tag('07', 'SHOP')}<h2><button data-detail="shop">霊符・お守り</button></h2><p>手書きの霊符やお守りは、<br />オンラインショップでもお求めいただけます。</p>${detail('shop', 'ショップを見る')}</div></section>
      <section id="access" class="bottom-panel access">${image('access')}<div>${tag('08', 'ACCESS')}<h2><button data-detail="access">店舗情報・アクセス</button></h2><p>新大久保駅から徒歩圏内。<br />ご来店での鑑定・ご相談も可能です。</p>${detail('access')}</div></section>
      <section id="contact" class="bottom-panel contact"><div>${tag('09', 'CONTACT')}<h2>ご相談・ご予約</h2><p>あなたの悩みや願いを、ぜひお聞かせください。<br />ご相談・ご予約は、こちらから受け付けております。</p>${reserve()}</div></section>
    </div>
    <p class="image-disclosure">掲載イメージはAI生成のイラストです。実際の先生・施設・儀式・商品を写したものではありません。</p>
  </main>
  <footer class="footer">
    <a href="#" class="brand">${logo}</a>
    <nav aria-label="フッターナビゲーション">${nav}<a href="#shop">霊符・お守り</a></nav>
    <div class="mobile-footer-only footer-socials">
      <a href="https://www.instagram.com/dongsoochong/" target="_blank" rel="noopener noreferrer" aria-label="公式Instagramを開く">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
      </a>
      <a href="https://www.youtube.com/channel/UC4bRyI5HC5Wgghv79n5zaAQ/videos" target="_blank" rel="noopener noreferrer" aria-label="公式YouTubeを開く">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21 7.2c-.2-1.2-1-2-2.2-2.2A47 47 0 0 0 12 4.5a47 47 0 0 0-6.8.5C4 5.2 3.2 6 3 7.2a28 28 0 0 0 0 9.6C3.2 18 4 18.8 5.2 19a47 47 0 0 0 6.8.5 47 47 0 0 0 6.8-.5c1.2-.2 2-1 2.2-2.2a28 28 0 0 0 0-9.6ZM10 15.5v-7l6 3.5-6 3.5Z"/></svg>
      </a>
    </div>
    <div class="mobile-footer-only footer-meta">
      <div><button data-detail="privacy">プライバシーポリシー</button><span aria-hidden="true">|</span><button data-detail="sitemap">サイトマップ</button></div>
      <p>龍門精舎 · 制作プレビュー</p>
    </div>
    <a class="back-top" href="#" aria-label="ページの先頭へ">↑</a>
  </footer>
  <dialog class="detail-dialog" aria-labelledby="dialog-title"><button class="dialog-close" aria-label="閉じる">×</button><p class="dialog-label">龍門精舎 · ご案内</p><h2 id="dialog-title"></h2><div id="dialog-content"></div><button class="button outline dialog-dismiss">閉じる ${arrow}</button></dialog>
`;

const details: Record<string, { title: string; content: string }> = {
  about: { title: '龍門精舎について', content: '<p>韓国に伝わる占いと祈りの文化を大切に、一人ひとりの悩みや願いに寄り添う場所です。長年の経験と深い洞察をもとに、丁寧な鑑定と祈祷を行います。</p><p>伝統の教えを現代の暮らしにつなぎ、よりよい未来への一歩をともに考えます。</p>' },
  services: { title: '占い・祈祷サービス', content: services.map(s => `<h3>${s.title}</h3><p>${s.text}</p>`).join('') },
  craft: { title: '祈りと手仕事', content: '<p>霊符は一枚一枚、心を込めて手書きします。伝統の儀式や手仕事に込められた意味を大切にしながら、ご相談内容に合わせた祈りを捧げます。</p>' },
  teacher: { title: '先生紹介', content: '<p>韓国の伝統的な占術と祈祷を受け継ぐ先生が、ご相談を伺います。一人ひとりに真摯に向き合い、人生の転機や日々の悩みに寄り添います。</p><p class="notice">先生の写真・プロフィール詳細は、公開用の情報に差し替えてください。</p>' },
  flow: { title: '初めての方へ', content: '<ol class="dialog-flow"><li><h3>ご予約</h3><p>希望するサービスと相談内容をお伝えください。</p></li><li><h3>ご相談</h3><p>悩みや願いを丁寧に伺います。</p></li><li><h3>鑑定・祈祷</h3><p>ご相談に合わせた鑑定・祈祷をご案内します。</p></li><li><h3>アフターフォロー</h3><p>鑑定後の疑問や日々の過ごし方についてもご相談いただけます。</p></li></ol><p class="notice">料金・所要時間は公開用の情報をご用意ください。</p>' },
  shop: { title: '霊符・お守り', content: '<p>願いに合わせた手書きの霊符や、日々の暮らしを支えるお守りをご案内します。</p><p class="notice">オンラインショップのリンクは未設定です。公開時に実際のショップURLを設定してください。</p>' },
  access: { title: '店舗情報・アクセス', content: '<p>新大久保駅から徒歩圏内。ご来店での鑑定・ご相談も可能です。</p><p class="notice">詳しい住所・営業時間・地図は未設定です。公開時に店舗情報を設定してください。</p>' },
  contact: { title: 'ご相談・ご予約', content: '<p>ご相談の際は、ご希望のサービス・日時・相談内容をお伝えください。</p><p class="notice">こちらはサイトの制作プレビューです。予約受付はまだ開始していません。公開時に電話番号・メールアドレス、または予約サービスのリンクを設定してください。</p>' },
  news: { title: 'お知らせ', content: '<p>現在、掲載されているお知らせはありません。</p>' },
  privacy: { title: 'プライバシーポリシー', content: '<p>現在はサイトの制作プレビューです。このページには個人情報を送信するフォームや決済機能を設置していません。</p><p class="notice">正式なプライバシーポリシーは未設定です。公開前に運営者の情報と実際の個人情報の取扱いを確認して掲載してください。外部サービスへ移動した場合は、移動先の規約とプライバシーポリシーをご確認ください。</p>' },
  sitemap: { title: 'サイトマップ', content: '<nav class="dialog-sitemap" aria-label="サイトマップ"><a href="#main">トップ</a><a href="#about">龍門精舎について</a><a href="#services">占い・祈祷サービス</a><a href="#craft">祈りと手仕事</a><a href="#teacher">先生紹介</a><a href="#flow">初めての方へ</a><a href="#shop">霊符・お守り</a><a href="#access">店舗情報・アクセス</a><a href="#contact">ご相談・ご予約</a></nav>' },
};
for (const service of services) details[service.id] = { title: service.title, content: `<p>${service.text}</p><p>ご希望やご相談内容に合わせて、丁寧にご案内します。</p>` };
const dialog = document.querySelector<HTMLDialogElement>('.detail-dialog')!;
const menu = document.querySelector<HTMLButtonElement>('.menu-toggle')!;
const mobileNav = document.querySelector<HTMLElement>('#mobile-nav')!;
const closeMenu = () => { menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'メニューを開く'); mobileNav.hidden = true; };
menu.addEventListener('click', () => {
  const expanded = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(expanded));
  menu.setAttribute('aria-label', expanded ? 'メニューを閉じる' : 'メニューを開く');
  mobileNav.hidden = !expanded;
});
document.addEventListener('click', (event) => {
  const target = event.target instanceof Element ? event.target : null;
  const trigger = target?.closest<HTMLElement>('[data-detail]');
  if (trigger) {
    const entry = details[trigger.dataset.detail!];
    if (!entry) return;
    closeMenu();
    document.querySelector('#dialog-title')!.textContent = entry.title;
    document.querySelector('#dialog-content')!.innerHTML = entry.content;
    dialog.showModal();
    document.body.classList.add('dialog-open');
  }
  if (target?.closest('#mobile-nav a')) closeMenu();
  if (target?.closest('.detail-dialog a[href^="#"]')) dialog.close();
});
for (const button of dialog.querySelectorAll('button')) button.addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
dialog.addEventListener('click', (event) => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
});
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
