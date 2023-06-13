import { reactive } from "vue";

export const store = reactive({
    contact: {
        open_hours: 'Open Hours: Mon-Sat - 9:00-18:00 ',
        phone_number: '+1(305)1234-5678',
        email: 'hello@example.com'
    },
    jumbotron_nav: {
        home: 'home',
        services: 'services',
        about: 'about',
        projects: 'projects',
        results: 'results'
    },
    services_cards: [
        {
            icon: '../src/assets/svgs/svg-1.svg',
            title: 'Audit & Assurance',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            icon: '../src/assets/svgs/svg-2.svg',
            title: 'Finacial Advisory',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            icon: '../src/assets/svgs/svg-3.svg',
            title: 'Analytics M&A',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            icon: '../src/assets/svgs/svg-4.svg',
            title: 'Middle Marketing',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            icon: '../src/assets/svgs/svg-5.svg',
            title: 'Legal Consulting',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            icon: '../src/assets/svgs/svg-6.svg',
            title: 'Regulatory Risk',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        }
    ],
    thecompany_cards: [
        {
            icon: '../src/assets/svgs/award.svg',
            title: 'Tradition',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            icon: '../src/assets/svgs/lock.svg',
            title: 'Security',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            icon: '../src/assets/svgs/certificate.svg',
            title: 'Certificate',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            icon: '../src/assets/svgs/graduation.svg',
            title: 'Expertise',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
    ]
})