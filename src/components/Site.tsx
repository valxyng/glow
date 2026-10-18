"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, CarFront, Coffee, BriefcaseBusiness, LockKeyhole, Menu, Sparkles, Store, UserRound, Video, Wifi, X } from "lucide-react";
import { benefits, company, disciplines, faqs, galleryImages, navItems } from "@/data/glow";

const iconMap = { user: UserRound, hanger: BriefcaseBusiness, coffee: Coffee, sparkles: Sparkles, store: Store, lock: LockKeyhole, wifi: Wifi, car: CarFront, video: Video };

export default function Site() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const closeImage = () => setActiveImage(null);
  const handleGalleryKey = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (activeImage === null) return;
    if (event.key === "Escape") closeImage();
    if (event.key === "ArrowRight") setActiveImage((activeImage + 1) % galleryImages.length);
    if (event.key === "ArrowLeft") setActiveImage((activeImage + galleryImages.length - 1) % galleryImages.length);
  };

  return <>
    <header className="header">
      <a className="brand" href="#top" aria-label="Glow Saratov — на главную"><span>GLOW</span><small>BEAUTY COWORKING</small></a>
      <nav className={`nav ${menuOpen ? "navOpen" : ""}`} aria-label="Основная навигация" onKeyDown={(event) => { if (event.key === "Escape") setMenuOpen(false); }}>
        {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
        <a className="mobileContact" href={company.phoneLink}>Связаться <ArrowUpRight size={15} /></a>
      </nav>
      <a className="headerCta" href="#rental">Условия аренды <ArrowUpRight size={15} /></a>
      <button className="menuButton" type="button" aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    </header>

    <main id="top">
      <section className="hero sectionWrap">
        <div className="heroCopy">
          <p className="eyebrow"><span className="eyebrowLine" /> BEAUTY COWORKING <span>·</span> SARATOV</p>
          <h1>Пространство<br />для <em>твоей</em><br />красоты<span className="period">.</span></h1>
          <p className="heroLead">Рабочие места и отдельные кабинеты для мастеров индустрии красоты — в центре Саратова.</p>
          <div className="heroActions"><a className="button buttonDark" href="#rental">Выбрать рабочее место <ArrowRight size={16} /></a><a className="textLink" href="#space">Исследовать пространство <ArrowDown size={15} /></a></div>
          <div className="heroFoot"><span>01 — 09</span><span>Московская, 49 · Саратов</span></div>
        </div>
        <div className="heroVisual">
          <div className="heroPhoto imagePlaceholder"><Image src="/images/glow/hero.svg" alt="Место для фотографии интерьера Glow Saratov" fill priority sizes="(max-width: 800px) 100vw, 58vw" /></div>
          <div className="heroCaption"><span>Фото будет добавлено</span><span>01 / пространство</span></div>
          <div className="heroStamp" aria-hidden="true"><span>G</span><small>GLOW<br />SARATOV</small></div>
        </div>
      </section>

      <section className="intro sectionWrap" id="space">
        <p className="sectionIndex">01 / ПРОСТРАНСТВО</p>
        <div className="introContent"><h2>Место, где<br />работа <em>ощущается</em><br />по-другому.</h2><div><p>Glow — бьюти-коворкинг, где можно арендовать оборудованное рабочее место или отдельный кабинет. Выбирайте формат под свою практику и встречайтесь с клиентами в профессиональном пространстве.</p><a className="underLink" href={company.officialUrl} target="_blank" rel="noreferrer">Официальная страница Glow <ArrowUpRight size={15} /></a></div></div>
      </section>

      <section className="disciplines sectionWrap" aria-label="Направления работы">
        <div className="sectionHeading"><p className="sectionIndex">02 / ДЛЯ МАСТЕРОВ</p><p className="muted">Направления и варианты формата указаны на официальной странице Glow.</p></div>
        <div className="disciplineGrid">{disciplines.map((item, index) => <a className={`discipline ${item.className}`} href="#rental" key={item.name}><div className="disciplineImage imagePlaceholder"><Image src={`/images/glow/${item.image}`} alt={`Фото будет добавлено: ${item.name}`} fill sizes="(max-width: 700px) 100vw, 45vw" /></div><div className="disciplineMeta"><div><span className="disciplineNo">0{index + 1}</span><h3>{item.name}</h3><p>{item.note}</p></div><span className="roundArrow"><ArrowUpRight size={17} /></span></div></a>)}</div>
      </section>

      <section className="benefits sectionWrap" id="benefits">
        <div className="benefitsIntro"><p className="sectionIndex">03 / ЗАБОТА О ДЕТАЛЯХ</p><h2>Всё нужное<br />уже <em>рядом.</em></h2><p>Сервисы и удобства, перечисленные на странице Glow Saratov.</p></div>
        <div className="benefitGrid">{benefits.map((item) => { const Icon = iconMap[item.icon as keyof typeof iconMap]; return <article className="benefit" key={item.title}><Icon size={19} strokeWidth={1.5} /><h3>{item.title}</h3><p>{item.text}</p></article>; })}</div>
      </section>

      <section className="gallerySection">
        <div className="sectionWrap galleryTop"><p className="sectionIndex">04 / ИНТЕРЬЕР</p><h2>Свет, фактура,<br /><em>рабочая</em> атмосфера.</h2><p>Галерея пространства Glow — фотографии будут добавлены из материалов компании.</p></div>
        <div className="galleryGrid sectionWrap" onKeyDown={handleGalleryKey}>
          {galleryImages.map((item, index) => <button className={`galleryItem galleryItem${index + 1} imagePlaceholder`} type="button" key={item.src} aria-label={`Открыть фото ${index + 1}: ${item.alt}`} onClick={() => setActiveImage(index)}><Image src={`/images/glow/${item.src}`} alt={item.alt} fill sizes="(max-width: 700px) 100vw, 50vw" /><span className="galleryOpen"><ArrowUpRight size={17} /></span></button>)}
        </div>
        <div className="galleryNote sectionWrap"><span>Фотографии интерьера</span><span>Материалы ожидаются от компании</span></div>
      </section>

      <section className="rental sectionWrap" id="rental">
        <div className="rentalVisual imagePlaceholder"><Image src="/images/glow/space-02.svg" alt="Фото будет добавлено: рабочая зона коворкинга" fill sizes="(max-width: 800px) 100vw, 48vw" /><span>Фото будет добавлено</span></div>
        <div className="rentalCopy"><p className="sectionIndex">05 / ФОРМАТ РАБОТЫ</p><h2>Подберём<br />формат <em>работы.</em></h2><p>На официальной странице представлены рабочие места, отдельные кабинеты, почасовая аренда и абонементы. Актуальные условия зависят от направления — уточните их у администратора.</p><div className="rentalTypes"><span>Рабочее место</span><span>Отдельный кабинет</span><span>Почасовая аренда</span><span>Абонементы</span></div><a className="button buttonCoral" href="#contacts">Узнать условия аренды <ArrowRight size={16} /></a><small>Демонстрационная концепция: тарифы и доступность здесь не публикуются.</small></div>
      </section>

      <section className="steps sectionWrap">
        <div className="stepsTitle"><p className="sectionIndex">06 / ПЕРВЫЙ ШАГ</p><h2>Начать <em>просто.</em></h2><p>Четыре шага до знакомства с пространством.</p></div>
        <ol className="stepsList"><li><span>01</span><p>Выбрать подходящий формат рабочего места.</p></li><li><span>02</span><p>Уточнить условия и доступность у администратора.</p></li><li><span>03</span><p>Согласовать аренду и необходимые документы.</p></li><li><span>04</span><p>Прийти в коворкинг в согласованное время.</p></li></ol>
      </section>

      <section className="faq sectionWrap" id="faq"><div className="faqIntro"><p className="sectionIndex">07 / ВОПРОСЫ</p><h2>Коротко<br />и <em>по делу.</em></h2><p>Ответы по информации с официальной страницы Glow Saratov.</p></div><div className="faqList">{faqs.map((faq, index) => <article className={`faqItem ${openFaq === index ? "faqItemOpen" : ""}`} key={faq.question}><h3><button type="button" aria-expanded={openFaq === index} aria-controls={`faq-panel-${index}`} id={`faq-button-${index}`} onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{faq.question}</span><span className="faqPlus" aria-hidden="true">{openFaq === index ? "−" : "+"}</span></button></h3><div id={`faq-panel-${index}`} role="region" aria-labelledby={`faq-button-${index}`} hidden={openFaq !== index}><p>{faq.answer}</p></div></article>)}</div></section>

      <section className="contactSection" id="contacts"><div className="contactInner sectionWrap"><div className="contactIntro"><p className="sectionIndex">08 / ЖДЁМ В ГОСТИ</p><h2>Давайте<br /><em>знакомиться.</em></h2><p>Свяжитесь с администратором, чтобы уточнить актуальные условия аренды.</p><a className="button buttonLight" href={company.phoneLink}>Позвонить в Glow <ArrowUpRight size={16} /></a></div><div className="contactDetails"><div><span>АДРЕС</span><p>{company.address}</p></div><div><span>ГРАФИК</span><p>{company.hours}</p></div><div><span>ТЕЛЕФОН</span><p><a href={company.phoneLink}>{company.phone}</a></p></div><div className="contactLinks"><a href={company.officialUrl} target="_blank" rel="noreferrer">Официальный сайт <ArrowUpRight size={15} /></a><a href={company.threadsUrl} target="_blank" rel="noreferrer">Threads <ArrowUpRight size={15} /></a></div><small>{company.dataNote}</small></div></div></section>
    </main>

    <footer className="footer sectionWrap"><a className="brand footerBrand" href="#top"><span>GLOW</span><small>BEAUTY COWORKING</small></a><p>Саратов · Московская, 49</p><nav aria-label="Навигация в подвале">{navItems.slice(0, 4).map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}</nav><div className="footerBottom"><span>Дизайн-концепция · 2026</span><span>Демонстрационный макет. Не является официальным сайтом Glow.</span></div></footer>

    {activeImage !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Просмотр галереи" tabIndex={-1} onKeyDown={handleGalleryKey} onClick={closeImage}><button autoFocus className="lightboxClose" type="button" aria-label="Закрыть" onClick={closeImage}><X /></button><button className="lightboxNav lightboxPrev" type="button" aria-label="Предыдущее фото" onClick={(event) => { event.stopPropagation(); setActiveImage((activeImage + galleryImages.length - 1) % galleryImages.length); }}>←</button><div className="lightboxImage imagePlaceholder" onClick={(event) => event.stopPropagation()}><Image src={`/images/glow/${galleryImages[activeImage].src}`} alt={galleryImages[activeImage].alt} fill sizes="90vw" /></div><button className="lightboxNav lightboxNext" type="button" aria-label="Следующее фото" onClick={(event) => { event.stopPropagation(); setActiveImage((activeImage + 1) % galleryImages.length); }}>→</button><p>Фото будет добавлено · {activeImage + 1} / {galleryImages.length}</p></div>}
  </>;
}
