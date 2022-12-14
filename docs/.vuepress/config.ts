import { defineUserConfig, defaultTheme } from 'vuepress'
import { path } from '@vuepress/utils'


export default defineUserConfig({
    lang: 'zh-CN',
    title: '你好， VuePress ！',
    description: '这是我的第一个 VuePress 站点',
    // pagePatterns: ['**/*.md', '!.vuepress', '!node_modules', '!MyBlog/*.md'],

    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'en-US',
            title: 'VuePress',
            description: 'Vue-powered Static Site Generator',
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'VuePress',
            description: 'Vue 驱动的静态网站生成器',
        },
    },
    base: '/bar/',
    markdown: {
        anchor: false,
        emoji: false,
        code: {
            // lineNumbers: false,
            // highlightLines: false
        },
        importCode: {
            handleImportPath: (str) =>
                str.replace(/^@vuepress/, path.resolve(__dirname, './')),
        },
    },
    theme: defaultTheme({
        locales: {
            '/': {
                selectLanguageName: 'English',
                selectLanguageText: 'Languages',
            },
            '/zh/': {
                selectLanguageName: '简体中文',
                selectLanguageText: '选择语言',
            },
        },
    }),
})