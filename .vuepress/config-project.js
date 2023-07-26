module.exports = {
    title: 'Chevere',
    description: 'High quality PHP software.',
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
            content: '#2a97ff'
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
            color: '#2a97ff'
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
        logo: '/logo.svg',
        pwa: false,
        repo: 'chevere/chevere',
        docsRepo: 'chevere/docs',
        docsBranch: 'main',
        smoothScroll: true,
        editLinks: true,
        lastUpdated: true,
        algolia: {
            apiKey: '5664ad27446dd05d69939957c8c81c4f',
            indexName: 'chevere',
            appId: 'E23304Y20V',
        }
    },
};
