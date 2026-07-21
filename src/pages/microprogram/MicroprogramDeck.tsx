import { useEffect, useRef, useState } from 'react';
import {
  IconApi,
  IconBolt,
  IconBriefcase2,
  IconBuildingSkyscraper,
  IconCube,
  IconCode,
  IconDeviceDesktop,
  IconGitBranch,
  IconBrandGithub,
  IconLink,
  IconMail,
  IconHeartHandshake,
  IconMapPin,
  IconPalette,
  IconRocket,
  IconShieldCheck,
  IconPuzzle,
  IconBrandVue,
  IconWritingSign,
} from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import Reveal from './components/Reveal';
import ScrollNav from './components/ScrollNav';
import ScrollSection from './components/ScrollSection';
import Tag from './components/Tag';
import { useSectionNavigation } from './hooks/useSectionNavigation';
import {
  aboutCapabilities,
  aboutContent,
  aboutInfoItems,
  careerTimeline,
  coverContent,
  cityProbeOverview,
  careerDirection,
  cityProbeTechnical,
  contactItems,
  fukukuWebsite,
  deckMeta,
  josuiAiWorkflow,
  josuiOverview,
  josuiTechnical,
  skillCategories,
  skillPerspective,
  slideOutline,
} from './data';
import './styles/presentation.css';
import './styles/print.css';

const sectionIds = slideOutline.map((item) => item.id);
const JOSUI_PREVIEW_IMAGE_URL = 'https://assets.josui.space/josui-1.png';
const CITY_PROBE_PREVIEW_IMAGE_URLS = [
  'https://assets.josui.space/city-probe-1.png',
  'https://assets.josui.space/city-probe-2.png',
] as const;
const CITY_PROBE_TECHNICAL_PREVIEWS = [
  {
    id: 'login',
    title: 'Login',
    description: '登入界面',
    src: 'https://assets.josui.space/city-probe-5.png',
  },
  {
    id: 'dashboard',
    title: 'Dashboard',
    description: '資料編輯與管理',
    src: 'https://assets.josui.space/city-probe-2.png',
  },
  {
    id: 'interactive',
    title: 'Interactive Map',
    description: '互動地圖與地理數據',
    src: 'https://assets.josui.space/city-probe-3.png',
  },
  {
    id: 'map',
    title: 'Map View',
    description: '地圖資料呈現',
    src: 'https://assets.josui.space/city-probe-4.png',
  },
] as const;
type CityProbeTechnicalPreviewId = (typeof CITY_PROBE_TECHNICAL_PREVIEWS)[number]['id'];
const FUKUKU_PREVIEW_IMAGE_URL = 'https://assets.josui.space/fukuku-1.png';

const aboutInfoIconMap = {
  briefcase: IconBriefcase2,
  map: IconMapPin,
  code: IconCode,
};

const aboutCapabilityIconMap = {
  vue: IconBrandVue,
  typescript: IconCode,
  building: IconBuildingSkyscraper,
  product: IconWritingSign,
  maintain: IconPuzzle,
  team: IconHeartHandshake,
};

const skillCategoryIconMap = {
  frontend: IconCode,
  framework: IconDeviceDesktop,
  ui: IconPalette,
  api: IconApi,
  tools: IconGitBranch,
  quality: IconRocket,
  motion: IconBolt,
};

const headingStageIconMap = {
  today: IconCube,
  next: IconShieldCheck,
  future: IconPuzzle,
};

export default function MicroprogramDeck() {
  const navigate = useNavigate();
  const rootRef = useRef<HTMLDivElement>(null);
  const { activeId, jumpTo } = useSectionNavigation(sectionIds, rootRef);
  const [josuiPreviewState, setJosuiPreviewState] = useState<'loading' | 'loaded' | 'failed'>('loading');
  const [cityProbeDashboardState, setCityProbeDashboardState] = useState<'loading' | 'loaded' | 'failed'>(
    'loading',
  );
  const [selectedCityProbePreviewId, setSelectedCityProbePreviewId] =
    useState<CityProbeTechnicalPreviewId>('login');
  const [cityProbeTechnicalImageStates, setCityProbeTechnicalImageStates] = useState<
    Record<CityProbeTechnicalPreviewId, 'loading' | 'loaded' | 'failed'>
  >({
    login: 'loading',
    dashboard: 'loading',
    interactive: 'loading',
    map: 'loading',
  });
  const [fukukuPreviewState, setFukukuPreviewState] = useState<'loading' | 'loaded' | 'failed'>(
    'loading',
  );
  const selectedCityProbePreview =
    CITY_PROBE_TECHNICAL_PREVIEWS.find((preview) => preview.id === selectedCityProbePreviewId) ??
    CITY_PROBE_TECHNICAL_PREVIEWS[0];
  const selectedCityProbePreviewState =
    cityProbeTechnicalImageStates[selectedCityProbePreview.id];

  useEffect(() => {
    const previousTitle = document.title;
    document.title = '面試簡報 · 微程式資訊 — 郭珮語';
    return () => {
      document.title = previousTitle;
    };
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let frame = 0;

    const updateTransitionProgress = () => {
      frame = 0;
      const coverSection = document.getElementById('cover');
      const aboutSection = document.getElementById('about');
      const aboutTop = aboutSection?.offsetTop ?? root.clientHeight;
      const coverStart = (coverSection?.offsetHeight ?? root.clientHeight) * 0.45;
      const coverRange = Math.max(aboutTop - coverStart, 1);
      const coverProgress = Math.min(Math.max((root.scrollTop - coverStart) / coverRange, 0), 1);

      const headingSection = document.getElementById('where-im-heading');
      const thanksSection = document.getElementById('thanks');
      const headingTop = headingSection?.offsetTop ?? Number.POSITIVE_INFINITY;
      const headingHeight = headingSection?.offsetHeight ?? root.clientHeight;
      const thanksTop = thanksSection?.offsetTop ?? headingTop + headingHeight;
      const headingStart = headingTop + headingHeight * 0.45;
      const headingRange = Math.max(thanksTop - headingStart, 1);
      const thanksProgress = Math.min(Math.max((root.scrollTop - headingStart) / headingRange, 0), 1);

      root.style.setProperty('--cover-to-about-progress', coverProgress.toFixed(3));
      root.style.setProperty('--heading-to-thanks-progress', thanksProgress.toFixed(3));
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateTransitionProgress);
    };

    updateTransitionProgress();
    root.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      root.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, []);

  const handlePrint = () => window.print();

  return (
    <div className="scroll-root" ref={rootRef}>
      <div className="deck-transition-bg" aria-hidden="true" />
      <ScrollNav
        activeId={activeId}
        rootRef={rootRef}
        onExit={() => navigate('/')}
        onPrint={handlePrint}
        onJump={jumpTo}
      />

      <main className="scroll-main">
        <ScrollSection id="cover" tone="dark" className="scroll-section--hero">
          <div className="cover-art" aria-hidden="true">
            <div className="cover-orb" />
            <div className="cover-grid" />
            <div className="cover-dots" />
            <div className="cover-lines" />
          </div>

          <div className="cover-content">
            <Reveal>
              <p className="hero-eyebrow">
                {deckMeta.company} ・ 前端工程師面試 ・ {deckMeta.interviewDate}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="hero-title hero-title--tagline">
                {coverContent.taglineLine1}
                <br />
                <span>{coverContent.taglineLine2}</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <div className="cover-profile">
                <p className="cover-name">
                  {deckMeta.candidateNameEn}
                  <span aria-hidden="true">|</span>
                  {deckMeta.candidateName}
                </p>
                <p className="cover-role">{deckMeta.role}</p>
                <div className="cover-rule" aria-hidden="true" />
                <p className="cover-stack">{coverContent.stack}</p>
              </div>
            </Reveal>
          </div>
        </ScrollSection>

        <ScrollSection id="about" className="scroll-section--about">
          <div className="about-shell">
            <div className="about-left">
              <Reveal>
                <p className="section-kicker">About Me</p>
                <h2 className="section-title about-title">{aboutContent.title}</h2>
              </Reveal>

              <Reveal delay={70} className="about-photo-wrap">
                <div className="about-photo-frame">
                  {aboutContent.photoUrl ? (
                    <img
                      className="about-photo"
                      src={aboutContent.photoUrl}
                      alt={aboutContent.photoAlt}
                      loading="eager"
                      decoding="async"
                    />
                  ) : (
                    <div className="about-photo about-photo--placeholder" aria-hidden="true">
                      <span>預留照片</span>
                    </div>
                  )}
                </div>
              </Reveal>

              <div className="about-info-list">
                {aboutInfoItems.map((item, index) => {
                  const Icon = aboutInfoIconMap[item.icon];

                  return (
                    <Reveal key={item.label} delay={130 + index * 50}>
                      <article className="about-info-item">
                        <span className="about-info-icon" aria-hidden="true">
                          <Icon size={22} stroke={1.8} />
                        </span>
                        <div>
                          <h3>{item.label}</h3>
                          <p>{item.description}</p>
                        </div>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>

            <div className="about-right">
              <div className="about-copy">
                {aboutContent.paragraphs.map((paragraph, index) => (
                  <Reveal key={paragraph} delay={100 + index * 60}>
                    <p className="section-lead about-lead">{paragraph}</p>
                  </Reveal>
                ))}
                <Reveal delay={220}>
                  <div className="about-rule" aria-hidden="true" />
                </Reveal>
                <Reveal delay={260}>
                  <p className="section-lead about-lead about-lead--closing">
                    我相信好的前端，不只是完成畫面，而是協助團隊把產品做好。
                  </p>
                </Reveal>
              </div>

              <div className="about-capability-grid">
                {aboutCapabilities.map((item, index) => {
                  const Icon = aboutCapabilityIconMap[item.icon];

                  return (
                    <Reveal key={item.title} delay={300 + index * 45}>
                      <article className="about-capability-card">
                        <span className="about-capability-icon" aria-hidden="true">
                          <Icon size={34} stroke={1.8} />
                        </span>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollSection>

        <ScrollSection id="skills" className="scroll-section--skills-map">
          <div className="skills-map-shell">
            <div className="skills-map-main">
              <Reveal>
                <p className="section-kicker">&nbsp;&nbsp;Skills &amp; Expertise</p>
                <h2 className="section-title skills-map-title">Core Skills &amp; Technologies</h2>
                <p className="section-subtitle skills-map-subtitle">
                  將前端技術放回產品情境中，建立穩定、可維護的實作能力。
                </p>
              </Reveal>

              <div className="skills-map-grid">
                {skillCategories.map((category, index) => {
                  const Icon = skillCategoryIconMap[category.icon];

                  return (
                    <Reveal key={category.title} delay={80 + index * 45}>
                      <article className="skill-map-card">
                        <div className="skill-map-card-head">
                          <span className="skill-map-icon" aria-hidden="true">
                            <Icon size={24} stroke={1.8} />
                          </span>
                          <h3>{category.title}</h3>
                        </div>
                        <div className="tag-row skill-map-tags">
                          {category.items.map((item) => (
                            <Tag key={item.label} label={item.label} level={item.level} />
                          ))}
                        </div>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>

            <aside className="skills-map-aside">
              <Reveal delay={120}>
                <section className="skills-note">
                  <h3>我的技術觀點</h3>
                  <div className="about-rule" aria-hidden="true" />
                  <p>{skillPerspective.statement}</p>
                </section>
              </Reveal>

              <Reveal delay={220}>
                <section className="skills-note skills-note--strengths">
                  <h3>核心優勢</h3>
                  <div className="about-rule" aria-hidden="true" />
                  <ul className="skills-strength-list">
                    {skillPerspective.strengths.map((item) => (
                      <li key={item}>
                        <span aria-hidden="true">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              </Reveal>
            </aside>
          </div>
        </ScrollSection>

        <ScrollSection id="timeline" tone="soft" className="scroll-section--career-journey">
          <div className="career-journey-shell">
            <div className="career-journey-intro">
              <Reveal>
                <p className="section-kicker">Experience</p>
                <h2 className="section-title career-journey-title">Career Journey</h2>
                <p className="section-subtitle career-journey-subtitle">
                  這些經歷讓我的前端能力，從需求理解、系統維護，逐步走向產品交付。
                </p>
              </Reveal>
            </div>

            <div className="career-timeline">
              {careerTimeline.map((step, index) => (
                <Reveal key={step.company} delay={index * 80}>
                  <article className="career-timeline-item">
                    <div className="career-timeline-marker" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="career-timeline-card">
                      <div className="career-timeline-head">
                        <p className="career-period">{step.period}</p>
                      </div>
                      <h3 className="career-title">{step.company}</h3>
                      <p className="career-role">{step.role}</p>
                      <p className="career-description">{step.summary}</p>
                      <ul className="career-highlight-list">
                        {step.highlights.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </ScrollSection>

        <ScrollSection id="josui-overview" className="scroll-section--josui-overview">
          <div className="josui-overview-shell">
            <div className="josui-overview-copy">
              <Reveal>
                <p className="section-kicker">Project 01</p>
                <h2 className="section-title josui-overview-title">Style shadcn UI beautifully</h2>
                <p className="section-subtitle">{josuiOverview.title}｜{josuiOverview.subtitle}</p>
                {josuiOverview.url ? (
                  <a
                    className="project-link project-link--josui"
                    href={josuiOverview.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconLink size={18} stroke={1.9} aria-hidden="true" />
                    <span>{josuiOverview.url.replace('https://', '')}</span>
                  </a>
                ) : null}
              </Reveal>
              <Reveal delay={80}>
                <p className="section-lead josui-overview-lead">{josuiOverview.background}</p>
              </Reveal>

              <div className="josui-overview-panels">
                <Reveal delay={140}>
                  <article className="josui-overview-panel">
                    <span className="nuxt-website-label">My Role</span>
                    <ul className="plain-list josui-compact-list">
                      {josuiOverview.role.slice(0, 5).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
                <Reveal delay={200}>
                  <article className="josui-overview-panel">
                    <span className="nuxt-website-label">Focus</span>
                    <ul className="plain-list josui-compact-list">
                      {josuiOverview.features.slice(0, 5).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </div>
            </div>

            <Reveal delay={140} className="josui-overview-showcase">
              <div className="josui-browser-mock">
                <div className="josui-browser-bar" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <div className='josui-preview-surface'>
                  {josuiPreviewState !== 'failed' ? (
                    <img
                      className={'josui-preview-image' + (josuiPreviewState === 'loaded' ? ' is-loaded' : '')}
                      src={JOSUI_PREVIEW_IMAGE_URL}
                      alt='JOSUI theme playground preview'
                      loading='eager'
                      decoding='async'
                      onLoad={() => setJosuiPreviewState('loaded')}
                      onError={() => setJosuiPreviewState('failed')}
                    />
                  ) : null}
                  <div
                    className={'josui-preview-fallback' + (josuiPreviewState === 'loaded' ? ' is-hidden' : '')}
                    aria-hidden={josuiPreviewState === 'loaded'}
                  >
                    <div className='josui-preview-header'>
                      <div>
                        <p>JOSUI</p>
                        <strong>Theme Playground</strong>
                      </div>
                      <span>Live Preview</span>
                    </div>
                    <div className='josui-preview-grid'>
                      <div className='josui-color-panel'>
                        <span className='josui-swatch josui-swatch--primary' />
                        <span className='josui-swatch josui-swatch--accent' />
                        <span className='josui-swatch josui-swatch--soft' />
                      </div>
                      <div className='josui-component-stack'>
                        <div className='josui-mini-card' />
                        <div className='josui-mini-card josui-mini-card--wide' />
                        <div className='josui-mini-actions'>
                          <span />
                          <span />
                        </div>
                      </div>
                    </div>
                    <div className='josui-token-row'>
                      <code>--primary</code>
                      <code>--accent</code>
                      <code>Copy tokens</code>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tag-row josui-tech-row">
                {josuiOverview.tech.map((tech) => (
                  <Tag key={tech} label={tech} />
                ))}
              </div>
            </Reveal>
          </div>
        </ScrollSection>

        <ScrollSection id="josui-technical" tone="soft" className="scroll-section--josui-technical">
          <div className="josui-technical-shell">
            <div className="josui-technical-copy">
              <Reveal>
                <p className="section-kicker">Project 01 · Technical</p>
                <h2 className="section-title josui-technical-title">Real-time Theme Preview and Token Export</h2>
                <p className="section-subtitle">
                  將色彩 token 的變更直接回到 CSS variables，讓元件預覽與匯出流程保持同步。
                </p>
              </Reveal>

              <div className="josui-technical-grid">
                <Reveal delay={100}>
                  <article className="josui-tech-card josui-tech-card--challenge">
                    <span className="josui-tech-label">Challenge</span>
                    <h3>設計與開發難以即時對齊色彩結果</h3>
                    <ul className="plain-list josui-tech-list">
                      {josuiTechnical.challenges.slice(0, 4).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
                <Reveal delay={180}>
                  <article className="josui-tech-card josui-tech-card--solution">
                    <span className="josui-tech-label">Approach</span>
                    <h3>讓 CSS variables 成為主題狀態來源</h3>
                    <ul className="plain-list josui-tech-list">
                      {josuiTechnical.solutions.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </div>
            </div>

            <Reveal delay={160} className="josui-technical-flow-wrap">
              <div className="josui-flow-panel">
                <div className="josui-flow-panel-head">
                  <span>架構流程</span>
                  <strong>CSSOM 與 CSS Variables</strong>
                </div>
                <div className="josui-flow-stack">
                  {[
                    '使用者調整顏色',
                    'Color Picker / Theme Panel',
                    'CSSOM 更新 CSS variables',
                    'shadcn/ui 元件即時更新',
                    'Copy Dialog 匯出 Tailwind tokens',
                  ].map((step, index) => (
                    <div key={step} className="josui-flow-node">
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <p>{step}</p>
                    </div>
                  ))}
                </div>
                <div className="josui-flow-note">
                  <p>React 負責互動狀態，主題色彩的實際來源回到 CSS custom properties。</p>
                </div>
              </div>
            </Reveal>
          </div>
        </ScrollSection>

        <ScrollSection id="josui-ai" className="scroll-section--josui-ai">
          <div className="josui-ai-shell">
            <div className="josui-ai-intro">
              <Reveal>
                <p className="section-kicker">Project 01 · AI Workflow</p>
                <h2 className="section-title josui-ai-title">Using AI as a Workflow Partner</h2>
                <p className="section-subtitle">
                  在 JOSUI 中，我把 AI 視為協助拆解與產出初稿的工具，但不把判斷責任交給 AI。
                </p>
              </Reveal>
            </div>

            <div className="josui-ai-board">
              <Reveal delay={90}>
                <article className="josui-ai-column">
                  <div className="josui-ai-column-head">
                    <span>01</span>
                    <h3>AI 協作情境</h3>
                  </div>
                  <ul className="josui-ai-list">
                    {josuiAiWorkflow.usage.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>

              <Reveal delay={170}>
                <article className="josui-ai-column josui-ai-column--review">
                  <div className="josui-ai-column-head">
                    <span>02</span>
                    <h3>工程審查方式</h3>
                  </div>
                  <ul className="josui-ai-list">
                    {josuiAiWorkflow.review.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </div>
          </div>
        </ScrollSection>

        <ScrollSection id="cityprobe-overview" tone="soft" className="scroll-section--cityprobe-overview">
          <div className="cityprobe-overview-shell">
            <div className="cityprobe-overview-copy">
              <Reveal>
                <p className="section-kicker">Project 02</p>
                <h2 className="section-title cityprobe-overview-title">City Probe</h2>
                <p className="section-subtitle">Nuxt 3 企業管理後台</p>
              </Reveal>
              <Reveal delay={80}>
                <p className="section-lead cityprobe-overview-lead">{cityProbeOverview.background}</p>
              </Reveal>

              <div className="cityprobe-info-grid">
                <Reveal delay={130}>
                  <article className="cityprobe-info-card">
                    <span className="nuxt-website-label">My Role</span>
                    <ul className="plain-list cityprobe-compact-list">
                      {cityProbeOverview.role.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
                <Reveal delay={190}>
                  <article className="cityprobe-info-card">
                    <span className="nuxt-website-label">Focus</span>
                    <ul className="plain-list cityprobe-compact-list">
                      {cityProbeOverview.features.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </div>
            </div>

            <Reveal delay={150} className="cityprobe-showcase">
              <div className="cityprobe-dashboard-mock">
                {cityProbeDashboardState !== 'failed' ? (
                  <img
                    className={
                      'cityprobe-dashboard-image' +
                      (cityProbeDashboardState === 'loaded' ? ' is-loaded' : '')
                    }
                    src={CITY_PROBE_PREVIEW_IMAGE_URLS[0]}
                    alt="City Probe dashboard preview"
                    loading="eager"
                    decoding="async"
                    onLoad={() => setCityProbeDashboardState('loaded')}
                    onError={() => setCityProbeDashboardState('failed')}
                  />
                ) : null}
                <div
                  className={
                    'cityprobe-dashboard-fallback' +
                    (cityProbeDashboardState === 'loaded' ? ' is-hidden' : '')
                  }
                  aria-hidden={cityProbeDashboardState === 'loaded'}
                >
                  <div className="cityprobe-dashboard-head">
                    <div>
                      <p>City Probe</p>
                      <strong>Admin Dashboard</strong>
                    </div>
                    <span>Nuxt 3</span>
                  </div>
                  <div className="cityprobe-dashboard-stats">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="cityprobe-dashboard-body">
                    <div className="cityprobe-table-mock">
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="cityprobe-map-mock">
                      <span />
                    </div>
                  </div>
                </div>
              </div>
              <div className="tag-row cityprobe-tech-row">
                {cityProbeOverview.tech.map((tech) => (
                  <Tag key={tech} label={tech} />
                ))}
              </div>
            </Reveal>
          </div>
        </ScrollSection>

        <ScrollSection id="cityprobe-technical" className="scroll-section--cityprobe-technical">
          <div className="cityprobe-technical-shell">
            <div className="cityprobe-technical-main">
              <Reveal>
                <p className="section-kicker">Project 02 · Technical</p>
                <h2 className="section-title cityprobe-technical-title">Data State and Interaction Complexity</h2>
                <p className="section-subtitle">
                  管理後台的難度不只在畫面，而是在資料狀態、權限、表格、地圖與 SSR / CSR 邊界。
                </p>
              </Reveal>

              <div className="cityprobe-tech-grid">
                <Reveal delay={100}>
                  <article className="cityprobe-tech-card cityprobe-tech-card--challenge">
                    <span className="cityprobe-tech-label">Challenge</span>
                    <ul className="plain-list cityprobe-tech-list">
                      {cityProbeTechnical.challenges.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
                <Reveal delay={170}>
                  <article className="cityprobe-tech-card cityprobe-tech-card--solution">
                    <span className="cityprobe-tech-label">Approach</span>
                    <ul className="plain-list cityprobe-tech-list">
                      {cityProbeTechnical.solutions.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </div>
            </div>

            <Reveal delay={160} className="cityprobe-preview-wrap">
              <div className="cityprobe-product-preview">
                <div className="cityprobe-preview-main">
                  {selectedCityProbePreviewState !== 'failed' ? (
                    <img
                      key={selectedCityProbePreview.id}
                      className={
                        'cityprobe-preview-image' +
                        (selectedCityProbePreviewState === 'loaded' ? ' is-loaded' : '')
                      }
                      src={selectedCityProbePreview.src}
                      alt={'City Probe ' + selectedCityProbePreview.title + ' preview'}
                      loading="eager"
                      decoding="async"
                      onLoad={() =>
                        setCityProbeTechnicalImageStates((states) => ({
                          ...states,
                          [selectedCityProbePreview.id]: 'loaded',
                        }))
                      }
                      onError={() =>
                        setCityProbeTechnicalImageStates((states) => ({
                          ...states,
                          [selectedCityProbePreview.id]: 'failed',
                        }))
                      }
                    />
                  ) : null}
                  <div
                    className={
                      'cityprobe-preview-fallback' +
                      (selectedCityProbePreviewState === 'loaded' ? ' is-hidden' : '')
                    }
                    aria-hidden={selectedCityProbePreviewState === 'loaded'}
                  >
                    <div className="cityprobe-loading-preview">
                      <span className="cityprobe-loading-spinner" aria-hidden="true" />
                      <div>
                        <p>Loading Preview</p>
                        <strong>資料載入中</strong>
                        <small>保留畫面回饋，降低等待時的不確定感。</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cityprobe-preview-tabs" aria-label="City Probe preview selector">
                  {CITY_PROBE_TECHNICAL_PREVIEWS.map((preview, index) => {
                    const isSelected = preview.id === selectedCityProbePreviewId;

                    return (
                      <button
                        key={preview.id}
                        type="button"
                        className={
                          'cityprobe-preview-tab' + (isSelected ? ' is-active' : '')
                        }
                        aria-pressed={isSelected}
                        onClick={() => setSelectedCityProbePreviewId(preview.id)}
                      >
                        <img
                          src={preview.src}
                          alt=""
                          loading="lazy"
                          decoding="async"
                          aria-hidden="true"
                        />
                        <span className="cityprobe-preview-tab-index">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="cityprobe-preview-tab-copy">
                          <strong>{preview.title}</strong>
                          <small>{preview.description}</small>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </ScrollSection>

        <ScrollSection id="nuxt-websites" tone="soft" className="scroll-section--nuxt-websites">
          <div className="nuxt-website-shell">
            <div className="nuxt-website-copy">
              <Reveal>
                <p className="section-kicker">Project 03 · Website</p>
                <h2 className="section-title nuxt-website-title">FUKUKU 樂勁雲數位服務官網</h2>
                <p className="section-subtitle">{fukukuWebsite.summary}</p>
                {fukukuWebsite.url ? (
                  <a
                    className="project-link project-link--nuxt-website"
                    href={fukukuWebsite.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconLink size={18} stroke={1.9} aria-hidden="true" />
                    <span>{fukukuWebsite.url.replace('https://', '')}</span>
                  </a>
                ) : null}
              </Reveal>

              <div className="nuxt-website-grid">
                <Reveal delay={150}>
                  <article className="nuxt-website-card">
                    <span className="nuxt-website-label">My Role</span>
                    <ul className="plain-list nuxt-website-list">
                      {fukukuWebsite.role.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
                <Reveal delay={210}>
                  <article className="nuxt-website-card">
                    <span className="nuxt-website-label">Focus</span>
                    <ul className="plain-list nuxt-website-list">
                      {fukukuWebsite.focus.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </div>
            </div>

            <Reveal delay={170} className="nuxt-website-preview-wrap">
              <div className="nuxt-website-preview">
                <div className="nuxt-website-browserbar">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="nuxt-website-preview-surface">
                  {fukukuPreviewState !== 'failed' ? (
                    <img
                      className={
                        'nuxt-website-preview-image' +
                        (fukukuPreviewState === 'loaded' ? ' is-loaded' : '')
                      }
                      src={FUKUKU_PREVIEW_IMAGE_URL}
                      alt="FUKUKU website preview"
                      loading="eager"
                      decoding="async"
                      onLoad={() => setFukukuPreviewState('loaded')}
                      onError={() => setFukukuPreviewState('failed')}
                    />
                  ) : null}
                  <div
                    className={
                      'nuxt-website-preview-fallback' +
                      (fukukuPreviewState === 'loaded' ? ' is-hidden' : '')
                    }
                    aria-hidden={fukukuPreviewState === 'loaded'}
                  >
                    <div className="nuxt-website-hero-mock">
                      <div>
                        <p>FUKUKU</p>
                        <strong>樂勁雲數位服務</strong>
                        <span>AI 智慧瓦斯配送服務平台官網</span>
                      </div>
                      <i />
                    </div>
                    <div className="nuxt-website-section-mock">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              </div>
              <div className="tag-row nuxt-website-tech-row">
                {fukukuWebsite.tech.map((tech) => (
                  <Tag key={tech} label={tech} />
                ))}
              </div>
            </Reveal>
          </div>
        </ScrollSection>

        <ScrollSection id="where-im-heading" tone="soft" className="scroll-section--heading">
          <div className="heading-shell">
            <Reveal>
              <div className="heading-intro">
                <div>
                  <p className="section-kicker">Where I&apos;m Heading</p>
                  <h2 className="section-title heading-title">Where I&apos;m Heading</h2>
                </div>
                <p className="heading-statement">{careerDirection.statement}</p>
              </div>
            </Reveal>

            <div className="heading-trajectory" aria-label="Career direction timeline">
              {careerDirection.stages.map((stage, index) => (
                <Reveal key={stage.id} delay={100 + index * 70}>
                  <article className="heading-step">
                    <div className="heading-step-icon" aria-hidden="true">
                      {(() => {
                        const StageIcon =
                          headingStageIconMap[stage.id as keyof typeof headingStageIconMap];
                        return <StageIcon size={44} stroke={1.7} />;
                      })()}
                    </div>
                    <span className="heading-step-index">0{index + 1}</span>
                    <p className="heading-step-title">{stage.title}</p>
                    <h3>{stage.subtitle}</h3>
                    <p className="heading-step-description">{stage.description}</p>
                    <ul className="plain-list heading-step-list">
                      {stage.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={340}>
              <aside className="heading-outcome">
                <span className="heading-outcome-icon" aria-hidden="true">
                  <IconRocket size={30} stroke={1.8} />
                </span>
                <p>
                  <span>長期目標：</span>
                  成為兼具<strong>技術深度與產品視角</strong>的前端工程師，持續創造有價值的產品與影響力。
                </p>
              </aside>
            </Reveal>
          </div>
        </ScrollSection>

        <ScrollSection id="thanks" tone="dark" className="scroll-section--thanks">
          <div className="thanks-art" aria-hidden="true">
            <div className="thanks-orb" />
            <div className="thanks-grid" />
            <div className="thanks-dots thanks-dots--left" />
            <div className="thanks-dots thanks-dots--right" />
            <div className="thanks-lines" />
          </div>

          <div className="thanks-content">
            <Reveal>
              {/* <p className="section-kicker section-kicker--on-dark">Thank You</p> */}
              <h2 className="thanks-title">THANK YOU</h2>
              <div className="thanks-accent" aria-hidden="true" />
            </Reveal>
            <Reveal delay={100}>
              <p className="thanks-name">
                {deckMeta.candidateNameEn}｜{deckMeta.candidateName}
              </p>
              <p className="thanks-role">{deckMeta.role}</p>
            </Reveal>
            <Reveal delay={150}>
              <div className="thanks-url">
                <span>Presentation URL</span>
                <a href="https://my-resume.josui.space/interview/microprogram" target="_blank" rel="noopener noreferrer"><strong>my-resume.josui.space/interview/microprogram</strong></a>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <ul className="thanks-contact">
                {[
                  { label: 'Email', value: contactItems[0].value, icon: IconMail },
                  { label: 'GitHub', value: contactItems[1].value, icon: IconBrandGithub },
                  {
                    label: 'Resume', value: contactItems[2].value, icon: IconLink,
                  },
                ].map((item) => {
                  const ContactIcon = item.icon;

                  return (
                    <li key={item.label}>
                      <span className="thanks-contact-icon" aria-hidden="true">
                        <ContactIcon size={28} stroke={1.8} />
                      </span>
                      <span className="thanks-contact-label">{item.label}</span>
                      <a href={item.value} target="_blank" rel="noopener noreferrer"><strong>{item.value}</strong></a>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>
        </ScrollSection>
      </main>
    </div>
  );
}
