<div align="center">
  <img alt="Mention logo" src="/public/MentionLogo.svg" width="100" />
</div>

<h1 align="center">
  Mention Landing Page
</h1>

Mention by Peable. This is the landing page for Mention, a Social Network by Peable. It is a minimal, fast and SEO-friendly landing page built with NextJS and TailwindCSS.

<hr>

![Mention Mockup](/public/mention.png)

## Key Features:

-   Minimal styling (make it your own!)
-   Accessible, semantic HTML markup
-   Blazingly Fast
-   100/100 Lighthouse performance
-   Responsive & SEO-friendly with canonical URLs, OpenGraph data and Meta tags.
-   Sitemap support
-   Made with NextJS and TailwindCSS

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example).

If you want to deploy on Netlify, use the following build command under site settings:

```bash
npm run build
```

You also want to make sure the publish directory is out.

## Lighthouse Score

NutriTrack scores 100/100 in the Lighthouse performance audit.

![NutriTrack Lighthouse Score](/lighthouse-score.png)

## Demo

Check out the [Demo](https://mention.chrstnl.com/), hosted on Vercel.

## Commands

All commands are run from the root of the project, from a terminal:

| Command         | Action                                       |
| :-------------- | :------------------------------------------- |
| `npm install`   | Installs dependencies                        |
| `npm run dev`   | Starts local dev server at `localhost:3000`  |
| `npm run build` | Build your production site to `./next/`      |
| `npm run start` | Preview your build locally, before deploying |

## Update Site Metadata

```js
env: {
  siteTitle: 'Mention',
  siteDescription: 'Mention description.',
  siteKeywords: 'mention keywords',
  siteUrl: 'https://mention.earth/',
  siteImagePreviewUrl: '/images/preview.jpeg',
  twitterHandle: '@MentionbyPeable',
}
```

## Update Colors

You can update the colors in tailwind.config.js file.

## Update Favicon

Update the manifest.json file and the icons under the public/images/icons folder.

You can use free tools online such as https://realfavicongenerator.net/ to quickly generate all the different icon sizes and favicon.ico file.

## Feedback and Suggestions

If you have any suggestions/feedback feel free to open an issue if you find bugs or want to request new features.

---
