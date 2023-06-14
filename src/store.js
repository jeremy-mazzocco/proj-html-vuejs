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
    ],
    action_and_projects_menu: {
        all: 'all',
        institutional: 'institutional',
        social: 'social',
        events: 'events',
        innovation: 'innovation',
        enviroment: 'enviroment',
        technology: 'technology'
    },
    action_and_projects_cards: [
        {
            img: './src/assets/images/project-1.jpg',
            description: 'Academic professional program in social media'
        },
        {
            img: './src/assets/images/project-2.jpg',
            description: 'President"s speech at the annual meeting'
        },
        {
            img: './src/assets/images/project-3.jpg',
            description: 'International business trip in Shanghai'
        },
        {
            img: './src/assets/images/project-4.jpg',
            description: 'Technology workshop with education theme'
        },
        {
            img: './src/assets/images/project-5.jpg',
            description: 'Donation of clothes and food to the partner NGO'
        },
        {
            img: './src/assets/images/project-6.jpg',
            description: 'Cofraternisation of the procurement team'
        }
    ]
})