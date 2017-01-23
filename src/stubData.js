export let data = {
    tasks: [{id: 1, categoryId: 2, name: 'Poland', done: true, description: 'My second home country'},
        {id: 2, categoryId: 2, name: 'Ukraine', done: true},
        {id: 3, categoryId: 2, name: 'Belarus', done: true, description: 'My homeland'},
        {id: 4, categoryId: 2, name: 'Russia', done: true},
        {id: 5, categoryId: 2, name: 'Romania', done: true},
        {id: 6, categoryId: 2, name: 'Moldova', done: true},
        {id: 7, categoryId: 2, name: 'Czech Republic', done: true, description:'Prague - the most beautiful city in Europe'},
        {id: 8, categoryId: 2, name: 'Hungary', done: true},
        {id: 9, categoryId: 2, name: 'Slovakia', done: true},
        {id: 12, categoryId: 4, name: 'Macedonia'},
        {id: 13, categoryId: 4, name: 'Montenegro'},
        {id: 14, categoryId: 4, name: 'Bosnia and Herzegovina'},
        {id: 15, categoryId: 4, name: 'Serbia'},
        {id: 16, categoryId: 4, name: 'Albania'},
        {id: 17, categoryId: 4, name: 'Croatia'},
        {id: 18, categoryId: 4, name: 'Slovenia'},
        {id: 19, categoryId: 3, name: 'Estonia'},
        {id: 20, categoryId: 3, name: 'Latvia', done: true},
        {id: 21, categoryId: 3, name: 'Lithuania'},
        {id: 22, categoryId: 23, name: 'Georgia'},
        {id: 23, categoryId: 23, name: 'Armenia'},
        {id: 24, categoryId: 23, name: 'Azerbaijan'},
        {id: 25, categoryId: 7, name: 'Austria', done: true},
        {id: 26, categoryId: 7, name: 'Belgium'},
        {id: 27, categoryId: 7, name: 'France', done: true},
        {id: 28, categoryId: 7, name: 'Germany', done: true},
        {id: 29, categoryId: 7, name: 'Liechtenstein'},
        {id: 30, categoryId: 7, name: 'Luxembourg'},
        {id: 31, categoryId: 7, name: 'Monaco'},
        {id: 32, categoryId: 7, name: 'Netherlands'},
        {id: 33, categoryId: 8, name: 'Portugal'},
        {id: 34, categoryId: 8, name: 'Spain', done: true},
        {id: 35, categoryId: 8, name: 'Italy', done: true},
        {id: 35, categoryId: 8, name: 'San Marino', done: true},
        {id: 36, categoryId: 8, name: 'Greece'},
        {id: 37, categoryId: 8, name: 'Cyprus'},
        {id: 38, categoryId: 8, name: 'Malta'},
        {id: 39, categoryId: 9, name: 'Iceland'},
        {id: 40, categoryId: 9, name: 'Ireland'},
        {id: 41, categoryId: 9, name: 'United Kingdom'},
        {id: 42, categoryId: 9, name: 'Norway'},
        {id: 43, categoryId: 9, name: 'Sweden'},
        {id: 44, categoryId: 9, name: 'Finland'},
        {id: 45, categoryId: 9, name: 'Denmark'},
        {id: 46, categoryId: 21, name: 'Thailand'},
        {id: 47, categoryId: 21, name: 'Vietnam', done: true},
        {id: 48, categoryId: 21, name: 'Indonesia'},
        {id: 49, categoryId: 21, name: 'Singapore'},
        {id: 50, categoryId: 21, name: 'Malaysia'},
        {id: 51, categoryId: 21, name: 'Cambodia'},
        {id: 52, categoryId: 21, name: 'Laos'},
        {id: 53, categoryId: 21, name: 'Philippines'},
        {id: 54, categoryId: 21, name: 'Burma'},
        {id: 55, categoryId: 22, name: 'Israel', done: true},
        {id: 56, categoryId: 22, name: 'Turkey'},
        {id: 57, categoryId: 22, name: 'Palestine', done: true},
        {id: 58, categoryId: 22, name: 'Jordan'},
        {id: 59, categoryId: 22, name: 'United Arab Emirates'},
        {id: 60, categoryId: 31, name: 'Moon'},
        {id: 61, categoryId: 31, name: 'Earth', done: true},
        {id: 62, categoryId: 31, name: 'Mars'},
        {id: 63, categoryId: 31, name: 'Venus'},


    ],
    categories: [{
        id: 0,
        name: 'Visit Europe',
        childNodes: [{
            id: 2,
            parentId: 0,
            name: 'Eastern Europe',
            childNodes: [
                {
                    id: 4,
                    parentId: 2,
                    name: 'Balkan Nation'
                }
            ]
        }, {
            id: 7,
            parentId: 0,
            name: 'Western Europe'
        }, {
            id: 8,
            parentId: 0,
            name: 'Southern Europe'
        }, {
            id: 9,
            parentId: 0,
            name: 'North Europe',
            childNides: [
                {
                    id: 3,
                    parentId: 9,
                    name: 'Baltic Nations'
                },
            ]
        }]
    }, {
        id: 20,
        name: 'Visit Asia',
        childNodes: [{
            id: 21,
            parentId: 1,
            name: 'Southeast Asia'
        }, {
            id: 22,
            parentId: 1,
            name: 'Western Asia',
            childNodes: [
                {
                    id: 23,
                    parentId: 22,
                    name: 'Transcaucasia'
                },
            ]

        }]
    }, {
        id: 30,
        name: 'Visit Other planets',
        childNodes: [{
            id: 31,
            name: 'Solar System'
        }

        ]
    }],
    editTask:null,
    taskFilter:null,
    toggleState:false
};