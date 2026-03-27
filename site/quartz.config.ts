import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Lenny's Podcast Wiki",
    pageTitleSuffix: " | Lenny's Wiki",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "lennyrachitsky.wiki",
    ignorePatterns: ["private", "templates", ".obsidian", "_templates"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Space Grotesk",
        body: "Plus Jakarta Sans",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#f8f8ec",       // paper
          lightgray: "#e8e4dc",   // mist
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#0a1628",        // navy
          secondary: "#567cff",   // electric (Lenny accent)
          tertiary: "#c9a961",    // gold
          highlight: "rgba(86, 124, 255, 0.12)",
          textHighlight: "rgba(86, 124, 255, 0.25)",
        },
        darkMode: {
          light: "#0a1628",       // navy
          lightgray: "#162440",
          gray: "#4a5568",
          darkgray: "#e8e4dc",    // mist
          dark: "#f8f8ec",        // paper
          secondary: "#567cff",   // electric
          tertiary: "#c9a961",    // gold
          highlight: "rgba(86, 124, 255, 0.12)",
          textHighlight: "rgba(86, 124, 255, 0.25)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
