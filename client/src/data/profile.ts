import moment from 'moment';

const profile = {
  name: 'Nguyen Truong Giang',
  career: 'Software Engineer (Node.js, React.js, AWS)',

  about: `
  Currently, i have 3 years experience in my career.

  My career path is to become an expert Full-stack programmer.

  I look forward to learning and working with the new technologies in the current 4.0
  generation economy, practicing my skills so I can adapt well to the needs and flexible
  changes of the market.

  It would be great if I had the opportunity to work in an environment where English is the
  key because I want to train my ability to communicate and work in English.
  `,

  personals: [
    {
      image: 'today',
      content: moment('1995/11/17').format('LL'),
    },
    {
      image: 'face',
      content: 'Male',
    },
    {
      image: 'location_on',
      content: 'Go Vap District, HCMC',
    },
    {
      image: 'school',
      content: 'International UniverSity - HCMC',
      subContent: 'Electrical Engineering (GPA: 2.8/4.0)',
    },
  ],

  contacts: [
    {
      image: 'phone_iphone',
      content: '0978205130',
      type: 'text',
    },
    {
      image: 'email',
      content: 'nguyentruonggiang1711@gmail.com',
      type: 'text',
    },
    {
      image: 'message',
      content: 'live:nguyentruonggiang1711',
      type: 'text',
    },
    {
      image: 'facebook',
      content: 'www.facebook.com/gknguyen1711',
      type: 'url',
    },
    {
      image: 'work',
      content: 'www.linkedin.com/in/gknguyen1711',
      type: 'url',
    },
    {
      image: 'integration_instructions',
      content: 'www.github.com/gknguyen',
      type: 'url',
    },
  ],

  skills: [
    {
      category: 'Languages',
      image: 'g_translate',
      list: ['English (IELTS 6.5)', 'French (DELF A2)'],
    },
    {
      category: 'Programming Languages',
      image: 'code',
      list: ['Javascript, Typescript', 'Golang'],
    },
    {
      category: 'Back-end',
      image: 'storage',
      list: [
        'Node.js, Express.js',
        'MySQL, PostgreSQL',
        'MongoDB',
        'Redis',
        'Docker',
        'Electron.js',
      ],
    },
    {
      category: 'Front-end',
      image: 'devices_other',
      list: ['HTML5, CSS3, Bootstrap 4', 'React.js, Redux, Material-UI'],
    },
    {
      category: 'Automation test',
      image: 'build_circle',
      list: ['Mocha, Chai, Istanbul', 'Jest, Enzyme', 'Puppeteer'],
    },
    {
      category: 'AWS Cloud',
      image: 'cloud',
      list: ['EC2, ASG, VPC', 'S3, Cloudfront', 'RDS, IAM'],
    },
  ],

  experiences: [
    {
      period: 'Jun 2017 – Sep 2017',
      title: 'REETECH INDUSTRY SUMMER INTERSHIP',
      position: 'Mechanical/Electrical Engineer',
      descriptions: [
        'Learned how to build and fix switchboards',
        'Learned how to use some automatic machines like QUADA AE2510 NT',
        'Learned some knowledge of some type of air-conditioner products',
      ],
    },
    {
      period: 'Sep 2018 - Jan 2020',
      title: 'CAPGEMINI VIETNAM',
      position: 'Software Engineer',
      descriptions: [
        'Providing IT solutions for AXA Insurance corporation in France',
        'Working with backend systems based on COBOL language',
        'Communicating in French with co-workers and clients',
      ],
    },
    {
      period: 'Feb 2020 - Now',
      title: 'GEO SYSTEM SOLUTIONS VIETNAM',
      position: 'Full-stack Engineer',
      descriptions: [
        'Providing IT solutions for GEO corporation in Japan',
        'Handling full life cycle of projects - from Front-end, Back-end to deployment',
        'communicating in Japan with co-workers and clients',
      ],
    },
  ],

  projects: [
    {
      period: 'Sep 2017 – Jun 2018',
      title: 'BUILD A GAS LEAKED MONITORING SYSTEM BASED ON WIRELESS NETWORKS',
      type: 'Graduation project',
      descriptions: [
        'Using Arduino for processor and Lora network',
        'Studying C/C++ language as well as HTML, CSS, Javascript for Web platform',
        'Learning the knowledge of wireless sensor networks',
      ],
    },
    {
      period: 'Jul 2019 – Dec 2019',
      title: 'CENTURY RESTAURANT MANAGEMENT SYSTEM',
      type: 'Personal project',
      descriptions: [
        'Application features: create booking, create contract, storage management, financial management, employee management',
        'Using React.js (Typescript) for Web platform',
        'Using Express.js (Typescript) for server',
        'Using MySQL server for database',
      ],
    },
    {
      period: 'Jun 2020 - Feb 2021',
      title: 'SMARTVIETSOLUTION',
      type: 'Freelance project',
      descriptions: [
        'An e-commercial web app which provides website templates for customers with many kinds of business aspect such as food, clothes, electronic and enterprises.',
        'Based on PHP language with Laravel MVC framework',
        'Using Bootstrap to build Web platform',
        'Using MySQL for database',
      ],
    },
    {
      period: 'Jul 2020 - Now',
      title: 'MY CV TEMPLATE',
      type: 'Personal project',
      descriptions: [
        'The web version of my Curriculum Vitae (CV)',
        'Using React.js (Typescript) & Material-UI for Web platform',
        'Using Golang for server',
        'Deploy in Heroku cloud server',
      ],
    },
    {
      period: 'Mar 2021 - Now',
      title: 'COLEAD network',
      type: 'Freelance project',
      descriptions: [
        'A social platform aims to connect people in business & startup fields',
        'Using React Native for Mobile platform',
        'Using Express.js (Typescript) for server',
        'Using PostgesSQL server for database',
        'Deploy in AWS cloud server',
      ],
    },
  ],
};

export type ProfileType = typeof profile;
export type PersonalType = typeof profile.personals[0];
export type ContactType = typeof profile.contacts[0];
export type SkillType = typeof profile.skills[0];
export type ProjectType = typeof profile.projects[0];

export default profile;
