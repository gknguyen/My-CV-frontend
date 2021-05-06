import React from 'react';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import StorageIcon from '@material-ui/icons/Storage';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SettingsIcon from '@material-ui/icons/Settings';
import CodeIcon from '@material-ui/icons/Code';
import BuildIcon from '@material-ui/icons/Build';
import GTranslateIcon from '@material-ui/icons/GTranslate';

const profile = {
  skills: [
    {
      category: 'Languages',
      image: <GTranslateIcon className="icon" fontSize="large" />,
      list: ['English (IELTS 6.5)', 'French (DELF A2)'],
    },
    {
      category: 'Programming Languages',
      image: <CodeIcon className="icon" fontSize="large" />,
      list: ['Javascript, Typescript', 'Golang'],
    },
    {
      category: 'Back-end',
      image: <StorageIcon className="icon" fontSize="large" />,
      list: ['Node.js, Express.js', 'MySQL, PostgreSQL', 'MongoDB', 'Redis', 'Docker'],
    },
    {
      category: 'Front-end',
      image: <ImportantDevicesIcon className="icon" fontSize="large" />,
      list: ['HTML5, CSS3, Bootstrap 4', 'React.js, Redux, Material-UI'],
    },
    {
      category: 'Automation test',
      image: <BuildIcon className="icon" fontSize="large" />,
      list: ['Mocha, Chai, Istanbul', 'Jest, Enzyme', 'Puppeteer'],
    },
    {
      category: 'AWS Cloud',
      image: <CloudUploadIcon className="icon" fontSize="large" />,
      list: ['EC2, ASG, VPC', 'S3, Cloudfront', 'RDS, IAM'],
    },
  ],
};

export type Profile = typeof profile;
export type Skill = typeof profile.skills[0];

export default profile;
