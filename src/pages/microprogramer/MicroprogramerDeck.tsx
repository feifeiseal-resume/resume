import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Reveal from './components/Reveal';
import ScrollNav from './components/ScrollNav';
import ScrollSection from './components/ScrollSection';
import Tag from './components/Tag';
import { useSectionNavigation } from './hooks/useSectionNavigation';
import {
  aboutHighlights,
  aboutKeywords,
  careerTimeline,
  cityProbeOverview,
  cityProbeTechnical,
  collaborationRoles,
  componentReuse,
  contactItems,
  deckMeta,
  designThinking,
  josuiAiWorkflow,
  josuiOverview,
  josuiTechnical,
  motivation,
  problemSolvingFlow,
  skillCategories,
  slideOutline,
  workflowSteps,
} from './data';
import './styles/presentation.css';
import './styles/print.css';

const sectionIds = slideOutline.map((item) => item.id);

export default function MicroprogramerDeck() {
  const navigate = useNavigate();
  const rootRef = useRef<HTMLDivElement>(null);
  const { activeId, jumpTo } = useSectionNavigation(sectionIds, rootRef);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = '面試簡報 · 微程式資訊 — 郭珮語';
    return () => {
      document.title = previousTitle;
    };
  }, []);

  const handlePrint = () => window.print();

  return (
    <div className="scroll-root" ref={rootRef}>
      <ScrollNav
        activeId={activeId}
        rootRef={rootRef}
        onExit={() => navigate('/')}
        onPrint={handlePrint}
        onJump={jumpTo}
      />

      <main className="scroll-main">
        <ScrollSection id="cover" tone="dark" className="scroll-section--hero">
          <Reveal>
            <p className="hero-eyebrow">
              {deckMeta.company} · 前端工程師面試 · {deckMeta.interviewDate}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="hero-title">
              The story behind
              <br />
              <span>{deckMeta.candidateName}</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="hero-lead">
              {deckMeta.candidateNameEn} · {deckMeta.role}
              <br />
              Vue 3 / Nuxt 3 / TypeScript
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p className="hero-hint">向下捲動，或按 Space / ↓ 前往下一段</p>
          </Reveal>
        </ScrollSection>

        <ScrollSection id="about">
          <Reveal>
            <p className="section-kicker">About Me</p>
            <h2 className="section-title">關於我</h2>
          </Reveal>
          <div className="about-layout">
            <Reveal delay={60}>
              <p className="section-lead">
                我是一位以 Vue 3、Nuxt 3、TypeScript 為主力的前端工程師，具備近四年前端實務經驗。過去參與企業系統、官網與 SaaS
                產品開發，也透過 JOSUI 實際把 AI 協作導入前端工具開發流程。
              </p>
            </Reveal>
            <Reveal delay={120}>
              <ul className="plain-list">
                {aboutHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={180}>
            <div className="tag-row">
              {aboutKeywords.map((keyword) => (
                <Tag key={keyword} label={keyword} />
              ))}
            </div>
          </Reveal>
          <Reveal delay={220}>
            <div className="stat-row">
              <div className="stat-item">
                <p className="stat-value">4+</p>
                <p className="stat-label">years of frontend</p>
              </div>
              <div className="stat-item">
                <p className="stat-value">2</p>
                <p className="stat-label">companies shipped</p>
              </div>
              <div className="stat-item">
                <p className="stat-value">1</p>
                <p className="stat-label">AI side project live</p>
              </div>
            </div>
          </Reveal>
        </ScrollSection>

        <ScrollSection id="timeline" tone="soft">
          <Reveal>
            <p className="section-kicker">Career</p>
            <h2 className="section-title">從 PM 到前端工程師</h2>
          </Reveal>
          <div className="career-list">
            {careerTimeline.map((step, index) => (
              <Reveal key={`${step.period}-${step.title}`} delay={index * 70}>
                <article className="career-item">
                  <p className="career-period">{step.period}</p>
                  <div>
                    <h3 className="career-title">{step.title}</h3>
                    <p className="career-description">{step.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </ScrollSection>

        <ScrollSection id="skills">
          <Reveal>
            <p className="section-kicker">Skills</p>
            <h2 className="section-title">我的技術能力</h2>
          </Reveal>
          <div className="skills-board">
            {skillCategories.map((category, index) => (
              <Reveal key={category.title} delay={index * 80}>
                <div className="skill-group">
                  <h3 className="skill-group-title">{category.title}</h3>
                  <div className="tag-row">
                    {category.items.map((item) => (
                      <Tag key={item.label} label={item.label} level={item.level} />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </ScrollSection>

        <ScrollSection id="workflow" tone="soft">
          <Reveal>
            <p className="section-kicker">Workflow</p>
            <h2 className="section-title">從需求到正式上線</h2>
          </Reveal>
          <div className="workflow-board">
            {workflowSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 40}>
                <article className="workflow-card">
                  <span className="workflow-index">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </ScrollSection>

        <ScrollSection id="josui-overview">
          <Reveal>
            <p className="section-kicker">Project 01</p>
            <h2 className="section-title">{josuiOverview.title}</h2>
            <p className="section-subtitle">{josuiOverview.subtitle}</p>
          </Reveal>
          <Reveal delay={80}>
            <p className="section-lead">{josuiOverview.background}</p>
          </Reveal>
          <div className="two-col">
            <Reveal delay={120}>
              <h3 className="block-title">我的角色</h3>
              <ul className="plain-list">
                {josuiOverview.role.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={180}>
              <h3 className="block-title">核心功能</h3>
              <ul className="plain-list">
                {josuiOverview.features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={220}>
            <div className="tag-row">
              {josuiOverview.tech.map((tech) => (
                <Tag key={tech} label={tech} />
              ))}
            </div>
          </Reveal>
        </ScrollSection>

        <ScrollSection id="josui-technical" tone="soft">
          <Reveal>
            <p className="section-kicker">Project 01 · Technical</p>
            <h2 className="section-title">如何讓主題色彩即時預覽與匯出</h2>
          </Reveal>
          <div className="two-col">
            <Reveal delay={80}>
              <h3 className="block-title">挑戰</h3>
              <ul className="plain-list">
                {josuiTechnical.challenges.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={140}>
              <h3 className="block-title">解法</h3>
              <ul className="plain-list">
                {josuiTechnical.solutions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div className="flow-row">
              {josuiTechnical.flow.map((step, index) => (
                <span key={step} className="flow-chip">
                  {step}
                  {index < josuiTechnical.flow.length - 1 ? <span className="flow-arrow">→</span> : null}
                </span>
              ))}
            </div>
          </Reveal>
        </ScrollSection>

        <ScrollSection id="josui-ai">
          <Reveal>
            <p className="section-kicker">Project 01 · AI</p>
            <h2 className="section-title">我如何使用 AI，但不依賴 AI</h2>
          </Reveal>
          <div className="two-col">
            <Reveal delay={80}>
              <h3 className="block-title">使用 AI 的情境</h3>
              <ul className="plain-list">
                {josuiAiWorkflow.usage.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={140}>
              <h3 className="block-title">我的審查方式</h3>
              <ul className="plain-list">
                {josuiAiWorkflow.review.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </ScrollSection>

        <ScrollSection id="cityprobe-overview" tone="soft">
          <Reveal>
            <p className="section-kicker">Project 02</p>
            <h2 className="section-title">{cityProbeOverview.title}</h2>
            <p className="section-subtitle">{cityProbeOverview.subtitle}</p>
          </Reveal>
          <Reveal delay={80}>
            <p className="section-lead">{cityProbeOverview.background}</p>
          </Reveal>
          <div className="two-col">
            <Reveal delay={120}>
              <h3 className="block-title">我的角色</h3>
              <ul className="plain-list">
                {cityProbeOverview.role.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={180}>
              <h3 className="block-title">核心功能</h3>
              <ul className="plain-list">
                {cityProbeOverview.features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={220}>
            <div className="tag-row">
              {cityProbeOverview.tech.map((tech) => (
                <Tag key={tech} label={tech} />
              ))}
            </div>
          </Reveal>
        </ScrollSection>

        <ScrollSection id="cityprobe-technical">
          <Reveal>
            <p className="section-kicker">Project 02 · Technical</p>
            <h2 className="section-title">如何處理管理後台中的複雜資料與互動</h2>
          </Reveal>
          <div className="two-col">
            <Reveal delay={80}>
              <h3 className="block-title">挑戰</h3>
              <ul className="plain-list">
                {cityProbeTechnical.challenges.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={140}>
              <h3 className="block-title">解法</h3>
              <ul className="plain-list">
                {cityProbeTechnical.solutions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div className="flow-row">
              {cityProbeTechnical.flow.map((step, index) => (
                <span key={step} className="flow-chip">
                  {step}
                  {index < cityProbeTechnical.flow.length - 1 ? <span className="flow-arrow">→</span> : null}
                </span>
              ))}
            </div>
          </Reveal>
        </ScrollSection>

        <ScrollSection id="components" tone="soft">
          <Reveal>
            <p className="section-kicker">Engineering</p>
            <h2 className="section-title">從單一功能到可重複使用的設計</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="section-lead">{componentReuse.background}</p>
          </Reveal>
          <div className="two-col">
            <Reveal delay={120}>
              <h3 className="block-title">我的做法</h3>
              <ul className="plain-list">
                {componentReuse.approach.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={180}>
              <h3 className="block-title">可展示元件範例</h3>
              <div className="tag-row">
                {componentReuse.examples.map((example) => (
                  <Tag key={example} label={example} />
                ))}
              </div>
            </Reveal>
          </div>
        </ScrollSection>

        <ScrollSection id="thinking">
          <Reveal>
            <p className="section-kicker">Mindset</p>
            <h2 className="section-title">我在寫程式前會先思考什麼</h2>
          </Reveal>
          <div className="thinking-board">
            {designThinking.aspects.map((aspect, index) => (
              <Reveal key={aspect.title} delay={index * 70}>
                <article className="thinking-card">
                  <span>{aspect.tag}</span>
                  <h3>{aspect.title}</h3>
                  <p>{aspect.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={280}>
            <div className="flow-row">
              {designThinking.flow.map((step, index) => (
                <span key={step} className="flow-chip">
                  {step}
                  {index < designThinking.flow.length - 1 ? <span className="flow-arrow">→</span> : null}
                </span>
              ))}
            </div>
          </Reveal>
        </ScrollSection>

        <ScrollSection id="collaboration" tone="soft">
          <Reveal>
            <p className="section-kicker">Collaboration</p>
            <h2 className="section-title">前端開發不只是完成畫面</h2>
          </Reveal>
          <div className="collab-board">
            {collaborationRoles.map((role, index) => (
              <Reveal key={role.role} delay={index * 70}>
                <article className="collab-card">
                  <h3>{role.role}</h3>
                  <ul className="plain-list">
                    {role.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={240}>
            <div className="flow-row">
              {problemSolvingFlow.map((step, index) => (
                <span key={step} className="flow-chip">
                  {step}
                  {index < problemSolvingFlow.length - 1 ? <span className="flow-arrow">→</span> : null}
                </span>
              ))}
            </div>
          </Reveal>
        </ScrollSection>

        <ScrollSection id="motivation">
          <Reveal>
            <p className="section-kicker">Motivation & Plan</p>
            <h2 className="section-title">我期待的下一個階段</h2>
          </Reveal>
          <div className="two-col">
            <Reveal delay={80}>
              <h3 className="block-title">為什麼想加入微程式</h3>
              <ul className="plain-list">
                {motivation.reasons.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={140}>
              <h3 className="block-title">我的職涯規劃</h3>
              <ul className="plain-list">
                {motivation.careerPlan.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="motivation-pitch">{motivation.pitch}</p>
          </Reveal>
        </ScrollSection>

        <ScrollSection id="thanks" tone="dark" className="scroll-section--thanks">
          <Reveal>
            <p className="section-kicker section-kicker--on-dark">Thank You</p>
            <h2 className="thanks-title">Let&apos;s continue the conversation.</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="thanks-name">
              {deckMeta.candidateName} / {deckMeta.candidateNameEn} · {deckMeta.role}
            </p>
          </Reveal>
          <Reveal delay={160}>
            <ul className="thanks-contact">
              {contactItems.map((item) => (
                <li key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </li>
              ))}
            </ul>
          </Reveal>
        </ScrollSection>
      </main>
    </div>
  );
}
