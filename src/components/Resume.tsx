import { useState } from 'react';
import {
  IconBrandGithub,
  IconExternalLink,
  IconMail,
  IconMapPin,
  IconPhone,
  IconPhoto,
} from '@tabler/icons-react';
import type { ContactItem } from '../data/resumeData';
import { resumeData } from '../data/resumeData';
import ScreenshotLightbox from './ScreenshotLightbox';
import '../styles/Resume.css';

const AVATAR_SRC = import.meta.env.VITE_AVATAR_URL ?? '';

function Avatar({ name }: { name: string }) {
  const [imgError, setImgError] = useState(false);
  return (
    <div className="sb-avatar" aria-hidden="true">
      {imgError ? (
        name.charAt(0)
      ) : (
        <img
          src={AVATAR_SRC}
          alt=""
          className="sb-avatar-img"
          onError={() => setImgError(true)}
        />
      )}
    </div>
  );
}

const contactIcons = {
  mail: IconMail,
  phone: IconPhone,
  github: IconBrandGithub,
  location: IconMapPin,
};

function SbContactRow({ item }: { item: ContactItem }) {
  const Icon = contactIcons[item.icon];
  return (
    <div className="sb-contact-row">
      <Icon className="sb-contact-icon" aria-hidden="true" stroke={1.5} />
      {item.href ? (
        <a
          href={item.href}
          target={item.icon === 'github' ? '_blank' : undefined}
          rel="noreferrer"
        >
          {item.label}
        </a>
      ) : (
        item.label
      )}
    </div>
  );
}

export default function Resume() {
  const {
    name,
    titleEn,
    titlePill,
    srTitle,
    contact,
    summary,
    jobs,
    projects,
    skillGroups,
    education,
    languages,
    certifications,
    articles,
  } = resumeData;

  const [lightbox, setLightbox] = useState<{
    title: string;
    images: string[];
  } | null>(null);

  return (
    <>
      <h1 className="sr-only">{srTitle}</h1>

      <div className="rw">
        {/* ── SIDEBAR ── */}
        <aside className="sidebar">
          {/* Profile */}
          <div>
            <Avatar name={name} />
            <div className="sb-name">{name}</div>
            <div className="sb-title-en">{titleEn}</div>
            <div className="sb-pill">
              <span className="sb-pill-text">{titlePill}</span>
            </div>
          </div>

          {/* Contact */}
          <div className="sb-section">
            <div className="sb-section-title">聯絡方式</div>
            {contact.map((item) => (
              <SbContactRow key={item.label} item={item} />
            ))}
          </div>

          {/* Skills */}
          <div className="sb-section">
            <div className="sb-section-title">技術技能</div>
            {skillGroups.map((group) => (
              <div key={group.title} className="sb-skill-group">
                <div className="sb-skill-group-name">{group.title}</div>
                <div className="sb-tags">
                  {group.tags.map((tag) => (
                    <span key={tag.label} className={tag.primary ? 'sb-tag primary' : 'sb-tag'}>
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="sb-section">
            <div className="sb-section-title">學歷</div>
            <div className="sb-edu-school">{education.school}</div>
            <div className="sb-edu-period">{education.period}</div>
            <div className="sb-edu-dept">{education.department}</div>
          </div>

          {/* Language */}
          <div className="sb-section">
            <div className="sb-section-title">語言能力</div>
            {languages.map((lang) => (
              <div key={lang.name} className="sb-lang-item">
                <span>{lang.name}</span>
                {lang.level && <span className="sb-lang-level">{lang.level}</span>}
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="sb-section">
            <div className="sb-section-title">證照</div>
            {certifications.map((cert) => (
              <div key={cert.title}>
                <div className="sb-cert-title">{cert.title}</div>
                <div className="sb-cert-meta">{cert.meta}</div>
              </div>
            ))}
          </div>
        </aside>

        {/* ── MAIN ── */}
        <main className="main">
          {/* Summary */}
          <div className="main-section">
            <div className="main-section-title">關於我</div>
            <p className="summary">{summary}</p>
          </div>

          {/* Jobs */}
          <div className="main-section">
            <div className="main-section-title">工作經歷</div>
            <div className="jobs">
              {jobs.map((job) => (
                <article key={`${job.company}-${job.period[0]}`} className="job">
                  <div className="job-header">
                    <h3 className="job-role">{job.title}</h3>
                    <span className="job-period">
                      {job.period[0]} – {job.period[1]}
                    </span>
                  </div>
                  <div className="job-meta">
                    {job.company}
                    {job.location ? ` · ${job.location}` : ''}
                  </div>
                  <ul className="job-desc">
                    {job.highlights.map((h) => (
                      <li key={h.slice(0, 24)}>{h}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="main-section">
            <div className="main-section-title">專案作品</div>
            <div className="projects">
              {projects.map((proj) => (
                <div key={proj.name} className="proj-card">
                  <div className="proj-card-header">
                    <div className="proj-name">{proj.name}</div>
                    {proj.screenshots ? (
                      <button
                        type="button"
                        className="proj-link proj-link-btn"
                        onClick={() =>
                          setLightbox({ title: proj.name, images: proj.screenshots! })
                        }
                      >
                        <IconPhoto className="proj-link-icon" aria-hidden="true" stroke={1.5} />
                        <span className="proj-link">Preview</span>
                      </button>
                    ) : (
                      proj.link && (
                        <a
                          className="proj-link"
                          href={proj.link.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <IconExternalLink
                            className="proj-link-icon"
                            aria-hidden="true"
                            stroke={1.5}
                          />
                          Link
                        </a>
                      )
                    )}
                  </div>
                  <div className="proj-card-tech">
                    {proj.tech.map((t) => (
                      <span key={t} className="proj-tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="proj-desc">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Articles */}
          <div className="main-section">
            <div className="main-section-title">技術文章</div>
            <div className="articles">
              {articles.map((article) => (
                <div key={article.url} className="article-item">
                  <a href={article.url} target="_blank" rel="noreferrer">
                    {article.title}
                  </a>
                  <span className="article-meta">{article.meta}</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {lightbox && (
        <ScreenshotLightbox
          title={lightbox.title}
          images={lightbox.images}
          open={!!lightbox}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}
