module.exports = {
    title: 'Chevere',
    description: 'A PHP framework for building extensible server-side applications',
    head: [
        ['link', {
            rel: 'icon',
            href: `/logo.svg`
        }],
        ['link', {
            rel: 'manifest',
            href: '/manifest.json'
        }],
        ['meta', {
            name: 'theme-color',
            content: '#23a8e0'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ['link', {
            rel: 'apple-touch-icon',
            href: '/logo.svg'
        }],
        ['link', {
            rel: 'mask-icon',
            href: '/logo.svg',
            color: '#3eaf7c'
        }],
        ['meta', {
            name: 'msapplication-TileImage',
            content: '/logo.svg'
        }],
        ['meta', {
            name: 'msapplication-TileColor',
            content: '#000000'
        }]
    ],
    themeConfig: {
        logo: '/logo-transparent.svg',
        repo: 'chevere/chevere',
        docsRepo: 'chevere/docs',
        docsBranch: 'main',
        smoothScroll: true,
        editLinks: true,
        lastUpdated: true,
        algolia: {
            appId: 'E23304Y20V',
            apiKey: '11dc8f9a3f9c8069dc4e98456c3c556c',
            indexName: 'chevere'
        }
    },
};
