const { description } = require('../../package')

module.exports = {
    title: 'Chevere',
    description: 'A framework for building extensible applications',
    head: [
        ['link', { rel: 'icon', href: `/logo.svg` }],
        ['meta', { name: 'theme-color', content: '#23a8e0' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['meta', { name: 'keywords', content: 'chevere, chevere, chevere, chevere, chevere, chevere, chevere, chevere, chevere, chevere, chevere, chevere'} ]
    ],
    themeConfig: {
        logo: '/logo.svg',
        repo: 'chevere/chevere',
        docsRepo: 'chevere/docs',
        editLinks: true,
        lastUpdated: true,
        nav: [
            {
                text: 'Get Started',
                link: '/get-started/',
            },
            {
                text: 'Architecture',
                link: '/architecture/',
            },
            {
                text: 'Application',
                link: '/application/',
            },
            {
                text: 'Components',
                ariaLabel: 'Components Menu',
                items: [
                    { text: 'Cache', link: '/components/cache' },
                    { text: 'Console', link: '/components/console' },
                    { text: 'Controller', link: '/components/controller' },
                    { text: 'Filesystem', link: '/components/filesystem' },
                    { text: 'Message', link: '/components/message' },
                    { text: 'Plugin', link: '/components/plugin' },
                    { text: 'Routing', link: '/components/routing' },
                    { text: 'Str', link: '/components/str' },
                    { text: 'ThrowableHandler', link: '/components/throwablehandler' },
                    { text: 'VarDump', link: '/components/vardump' },
                    { text: 'Writer', link: '/components/writer' },
                ]
            },
        ],
        sidebar: {
            '/get-started/': [
                {
                    title: 'Get Started',
                    collapsable: false,
                    children: [
                        '',
                        'overview',
                        'installing',
                    ]
                }
            ],
            '/architecture/': [
                {
                    title: 'Architecture',
                    collapsable: false,
                    sidebarDepth: 2,
                    children: [
                        '',
                        'coding-standard',
                        'immutability',
                    ]
                },
                {
                    title: 'Spec',
                    collapsable: false,
                    children: [
                        'components',
                        'interfaces',
                        'exceptions',
                        'testing',
                    ]
                },
                {
                    title: 'Development',
                    collapsable: false,
                    children: [
                        'workspace'
                    ]
                }
            ],
            '/application/': [
                {
                    collapsable: false,
                    children: [
                        'state',
                        'recommendations'
                    ]
                }
            ],
            '/components': 'auto'
        }
    }
}
