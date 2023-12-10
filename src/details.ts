import { ofetch } from 'ofetch';
import { format, formatDistance, parseISO } from 'date-fns';
import ora from 'ora';

interface Framework {
  name: string;
  repo: string;
  pkg: string;
  color: string;
  publishedAt: string;
  author: string | string[];
  website: string;
  initCommend: string[];
}

export enum FrameworkName {
  Angular = 'angular',
  React = 'react',
  'Vue.js' = 'vue',
  Svelte = 'svelte',
  Preact = 'preact',
  'Solid.js' = 'solid',
  Remix = 'remix',
  Qwik = 'qwik',
  Lit = 'lit',
  'Alpine.js' = 'alpine',
  'Stencil' = 'stencil',
  'Mithril' = 'mithril',
  Astro = 'astro',
  Vuepress = 'vuepress',
  Vitepress = 'vitepress',
  Docus = 'docus',
  'Express' = 'express',
  'Feathers' = 'feathers',
  'NestJS' = 'nestjs',
  'Nitro' = 'nitro',
  Analog = 'analog',
  'Next.js' = 'next',
  Gatsby = 'gatsby',
  Nuxt = 'nuxt',
  'Gridsome' = 'gridsome',
  'Svelte Kit' = 'svelte-kit',
}

export const frameworks: Record<FrameworkName, Framework> = {
  angular: {
    name: 'Angular',
    repo: 'angular/angular',
    pkg: '@angular/core',
    color: '#DD0032',
    publishedAt: '2016-04-28T04:23:30.108Z',
    author: 'Google',
    website: 'https://angular.io',
    initCommend: ['npm install -g @angular/cli', 'ng new'],
  },
  react: {
    name: 'React',
    repo: 'facebook/react',
    pkg: 'react',
    color: '#149ECA',
    publishedAt: '2011-10-26T17:46:22.746Z',
    author: 'Facebook',
    website: 'https://react.dev',
    initCommend: ['npm create vite@latest -- --template react'],
  },
  vue: {
    name: 'Vue.js',
    repo: 'vuejs/core',
    pkg: 'vue',
    color: '#40B983',
    publishedAt: '2013-12-07T06:09:48.297Z',
    author: 'Evan You',
    website: 'https://vuejs.org',
    initCommend: ['npm create vue@latest'],
  },
  /* ------------- Published At Updated till here ------------ */
  svelte: {
    name: 'Svelte',
    repo: 'sveltejs/svelte',
    pkg: 'svelte',
    color: '#FF3E00',
    publishedAt: '2016-11-28T00:00:00.000Z',
    author: 'Rich Harris',
    website: 'https://svelte.dev',
    initCommend: ['npm create vite@latest -- --template svelte'],
  },
  preact: {
    name: 'Preact',
    repo: 'preactjs/preact',
    pkg: 'preact',
    color: '#673AB8',
    publishedAt: '2015-11-12T00:00:00.000Z',
    author: 'Jason Miller',
    website: 'https://preactjs.com',
    initCommend: ['npm init preact'],
  },
  solid: {
    name: 'Solid.js',
    repo: 'solidjs/solid',
    pkg: 'solid-js',
    color: '#4A80C1',
    publishedAt: '2021-04-05T00:00:00.000Z',
    author: 'Ryan Carniato',
    website: 'https://www.solidjs.com',
    initCommend: ['npm create vite@latest -- --template solid'],
  },
  remix: {
    name: 'Remix',
    repo: 'remix-run/remix',
    pkg: 'remix',
    color: '#E8F2FF',
    publishedAt: '2021-09-30T00:00:00.000Z',
    author: 'Michael Jackson',
    website: 'https://remix.run',
    initCommend: ['npx create-remix@latest --template remix-run/indie-stack'],
  },
  qwik: {
    name: 'Qwik',
    repo: 'BuilderIO/qwik',
    pkg: '@builder.io/qwik',
    color: '#AC7Ef4',
    publishedAt: '2022-09-19T00:00:00.000Z',
    author: 'Misko Hevery',
    website: 'https://qwik.builder.io',
    initCommend: ['npm create qwik@latest'],
  },
  lit: {
    name: 'Lit',
    repo: 'lit/lit',
    pkg: 'lit',
    color: '#324FFF',
    publishedAt: '2021-04-20T00:00:00.000Z',
    author: 'Kevin Christiansen',
    website: 'https://lit.dev',
    initCommend: ['npm init @open-wc', 'npm i lit'],
  },
  alpine: {
    name: 'Alpine.js',
    repo: 'alpinejs/alpine',
    pkg: 'alpinejs',
    color: '#77C1D2',
    publishedAt: '2019-11-28T00:00:00.000Z',
    author: 'Caleb Porzio',
    website: 'https://alpinejs.dev',
    initCommend: ['npm install alpinejs'],
  },
  stencil: {
    name: 'Stencil',
    repo: 'ionic-team/stencil',
    pkg: '@stencil/core',
    color: '#4942FF',
    publishedAt: '2017-01-01T00:00:00.000Z',
    author: 'Ionic Framework Team',
    website: 'https://stenciljs.com',
    initCommend: ['npm init stencil']
  },
  mithril: {
    name: 'Mithril',
    repo: 'MithrilJS/mithril.js',
    pkg: 'mithril',
    color: '#000000',
    publishedAt: '2014-04-02T02:27:07.149Z',
    author: 'Leo Horie',
    website: 'https://mithril.js.org',
    initCommend: ['npm init -y', 'npm install mithril --save']
  },
  astro: {
    name: 'Astro',
    repo: 'withastro/astro',
    pkg: 'astro',
    color: '#DC3E8B',
    publishedAt: '2022-06-07T00:00:00.000Z',
    author: 'Fred K. Schott',
    website: 'https://astro.build',
    initCommend: ['npm create astro@latest'],
  },
  vuepress: {
    name: 'Vuepress',
    repo: 'vuejs/vuepress',
    pkg: 'vuepress',
    color: '#61BF85',
    publishedAt: '2018-04-12T00:00:00.000Z',
    author: 'Vue.js',
    website: 'https://vuepress.vuejs.org',
    initCommend: ['npx create-vuepress-site my-app']
  },
  vitepress: {
    name: 'Vitepress',
    repo: 'vuejs/vitepress',
    pkg: 'vitepress',
    color: '#837EFF',
    publishedAt: '2020-04-30T00:00:00.000Z',
    author: 'Evan You',
    website: 'https://vitepress.dev',
    initCommend: ['npm add -D vitepress']
  },
  docus: {
    name: 'Docus',
    repo: 'nuxt-themes/docus',
    pkg: '@nuxt-themes/docus',
    color: '#E8F2FF',
    publishedAt: '2020-11-11T00:00:00.000Z',
    author: 'Sébastien Chopin',
    website: 'https://docus.dev',
    initCommend: ['npx nuxi@latest init -t themes/docus'],
  },
  express: {
    name: 'Express',
    repo: 'expressjs/express',
    pkg: 'express',
    color: '#000000',
    publishedAt: '2010-12-29T19:38:25.450Z',
    author: 'TJ Holowaychuk',
    website: 'https://expressjs.com',
    initCommend: ['npx express-generator'],
  },
  feathers: {
    name: "Feather",
    repo: 'feathersjs/feathers',
    pkg: '@feathersjs/feathers',
    color: '#FFFFFF',
    publishedAt: '2017-10-20T23:40:48.540Z',
    author: '',
    website: 'https://feathersjs.com',
    initCommend: ['npm create feathers my-app']
  },
  nestjs: {
    name: 'NestJS',
    repo: 'nestjs/nest',
    pkg: '@nestjs/core',
    color: '#CE3951',
    publishedAt: '2017-05-14T13:40:50.632Z',
    author: 'Kamil Myśliwiec',
    website: 'https://nestjs.com',
    initCommend: ['npm i -g @nestjs/cli', 'nest new my-app']
  },
  nitro: {
    name: 'Nitro',
    repo: 'unjs/nitro',
    pkg: 'nitropack',
    color: '#F478CF',
    publishedAt: '2021-11-04T11:43:49.855Z',
    author: 'Pooya Parsa',
    website: 'https://nitro.unjs.io',
    initCommend: ['npx giget@latest nitro', 'cd nitro-app', 'npm install']
  },
  analog: {
    name: 'Analog',
    repo: 'analogjs/analog',
    pkg: '@analogjs/platform',
    color: '#DD0430',
    publishedAt: '2022-05-21T00:00:00.000Z',
    author: 'Brandon Roberts',
    website: 'https://analogjs.org',
    initCommend: ['npm create analog@latest'],
  },
  next: {
    name: 'Next.js',
    repo: 'vercel/next.js',
    pkg: 'next',
    color: '#000000',
    publishedAt: '2016-10-24T00:00:00.000Z',
    author: 'Guillermo Rauch',
    website: 'https://nextjs.org',
    initCommend: ['npx create-next-app@latest'],
  },
  gatsby: {
    name: 'Gatsby',
    repo: 'gatsbyjs/gatsby',
    pkg: 'gatsby',
    color: '#663399',
    publishedAt: '2022-11-07T00:00:00.000Z',
    author: 'Kyle Mathews',
    website: 'https://www.gatsbyjs.com',
    initCommend: ['npm init gatsby'],
  },
  nuxt: {
    name: 'Nuxt',
    repo: 'nuxt/nuxt',
    pkg: 'nuxt',
    color: '#00dC82',
    publishedAt: '2016-10-25T00:00:00.000Z',
    author: 'Sébastien Chopin',
    website: 'https://nuxt.com',
    initCommend: ['npx nuxi@latest init'],
  },
  gridsome: {
    name: 'Gridsome',
    repo: 'gridsome/gridsome',
    pkg: 'gridsome',
    color: '#52CAA1',
    publishedAt: '2018-09-16T00:00:00.000Z',
    author: 'Lindsay Kwardell',
    website: 'https://gridsome.org',
    initCommend: [
      'npm install --global @gridsome/cli',
      'gridsome create my-app',
    ],
  },
  'svelte-kit': {
    name: 'Svelte Kit',
    repo: 'sveltejs/kit',
    pkg: '@sveltejs/kit',
    color: '#FF3E00',
    publishedAt: '2022-11-30T00:00:00.000Z',
    author: 'Rich Harris',
    website: 'https://kit.svelte.dev',
    initCommend: ['npm create svelte@latest'],
  },
};

function getVersion(
  version: string | undefined,
  updatedAt: any
): string | undefined {
  return version
    ? `${version} (${formatDistance(parseISO(updatedAt[version]), new Date(), {
      addSuffix: true,
    })})`
    : undefined;
}

export async function getDetails(framework: FrameworkName) {
  const spinner = ora('Loading Details').start();

  let { repo, pkg, publishedAt, author, website, initCommend } =
    frameworks[framework];

  const [{ repo: details }, release] = await Promise.all([
    ofetch(`/repos/${repo}`, { baseURL: 'https://ungh.cc' }),
    ofetch(`/${pkg}`, { baseURL: 'https://registry.npmjs.org' }),
  ]);

  spinner.succeed('Loaded Details');
  const { description: repoDescription, stars } = details;
  const { description: releaseDescription, time: updatedAt } = release;
  const versions = release['dist-tags'];

  return {
    description: repoDescription,
    releaseDescription,
    stars,
    publishedAt: `${format(
      parseISO(publishedAt),
      'dd MMM, yyyy'
    )} (${formatDistance(parseISO(publishedAt), new Date(), {
      addSuffix: true,
    })})`,
    version: {
      stable: getVersion(versions.latest, updatedAt),
      experimental: new Date(updatedAt[versions.next]).getTime() > new Date(updatedAt[versions.latest]).getTime() ? getVersion(versions.next, updatedAt) : undefined,
    },
    author: author,
    website: website,
    github: `https://github.com/${repo}`,
    npm: `https://www.npmjs.com/package/${pkg}`,
    initCommend,
  };
}
