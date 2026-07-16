import SlideLayout from '../components/SlideLayout';
import { deckMeta } from '../data';

interface SlideProps {
  index: number;
  total: number;
}

export default function CoverSlide({ index, total }: SlideProps) {
  return (
    <SlideLayout index={index} total={total} title={deckMeta.candidateName} bare>
      <div className="cover-slide">
        <div className="cover-main">
          <p className="cover-eyebrow">{deckMeta.company} · 前端工程師面試</p>
          <h1 className="cover-name">
            {deckMeta.candidateName}
            <span className="cover-name-en"> / {deckMeta.candidateNameEn}</span>
          </h1>
          <p className="cover-role">{deckMeta.role}</p>
          <p className="cover-stack">Vue 3 · Nuxt 3 · TypeScript</p>
          <p className="cover-date">{deckMeta.interviewDate}</p>
        </div>
        <div className="cover-visual" aria-hidden="true">
          <pre className="cover-code">{`<template>
  <Component
    :is="currentSlide"
    v-bind="props"
  />
</template>

<script setup lang="ts">
const { index, next, prev } =
  usePresentation(total)
</script>`}</pre>
        </div>
      </div>
    </SlideLayout>
  );
}
