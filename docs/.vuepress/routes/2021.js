const genSidebarConfig = require('./getSidebarConfig')

module.exports = [
    {
        title: '怦然心动(Flipped)',
        collapsable: false,
        children: [
            '2021/Flipped/Diving Under',
            '2021/Flipped/Flipped',
            '2021/Flipped/Buddy,Beware',
            '2021/Flipped/The Sycamore Tree',
            '2021/Flipped/Brawk-Brawk-Brawk',
            '2021/Flipped/The Eggs',
            '2021/Flipped/Get a Grip, Man',
            '2021/Flipped/The Yard',
            '2021/Flipped/Looming Large and Smelly',
            '2021/Flipped/The Visit',
            '2021/Flipped/The Serious Willies',
            '2021/Flipped/The Dinner',
            '2021/Flipped/Flipped ',
            '2021/Flipped/The Basket Boys',
        ]
    },
    {
        title: '2021二月(February)',
        collapsable: true,
        children: genSidebarConfig('english/2021/February', false)
    },
    {
        title: '2021一月(January)',
        collapsable: true,
        children: genSidebarConfig('english/2021/January', false)
    },
]
