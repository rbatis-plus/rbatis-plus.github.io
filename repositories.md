# 仓库列表

> GitHub API 数据将在部署时自动注入。

<script setup lang="ts">
import { useData } from 'vitepress'

const repos = [
  // 由 GitHub Actions 在构建前注入
]
</script>

<div class="repos-grid">
  <div v-for="repo in repos" :key="repo.name" class="repo-card">
    <h3><a :href="repo.html_url">{{ repo.name }}</a></h3>
    <p>{{ repo.description || '—' }}</p>
    <p class="meta">
      <span v-if="repo.language">📝 {{ repo.language }}</span>
      <span>⭐ {{ repo.stargazers_count }}</span>
      <span v-if="repo.archived" class="archived">📦 Archived</span>
    </p>
  </div>
</div>

<style>
.repos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}
.repo-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 1rem;
  transition: border-color 0.2s;
}
.repo-card:hover {
  border-color: var(--vp-c-brand);
}
.repo-card h3 {
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
}
.repo-card h3 a {
  color: var(--vp-c-brand);
  text-decoration: none;
}
.repo-card p {
  margin: 0.25rem 0;
  font-size: 0.9rem;
  opacity: 0.85;
}
.repo-card .meta {
  display: flex;
  gap: 1rem;
  font-size: 0.8rem;
  opacity: 0.6;
  margin-top: 0.5rem;
}
.archived {
  color: var(--vp-c-warning);
}
</style>