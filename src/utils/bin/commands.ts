// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commandList = Object.keys(bin).sort();
  let output = '';

  // adjust this value for spacing width
  const colWidth = 20;

  for (let i = 0; i < commandList.length; i += 2) {
    const first = `  ~${commandList[i]}`.padEnd(colWidth);
    const second = commandList[i + 1] ? `  ~${commandList[i + 1]}` : '';
    output += `${first}${second}\n`;
  }

  return `Welcome! Here are all the available commands:\n\n${output}
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.

Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}.
  ${config.description}
  
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

export const leetcode = async (args: string[]): Promise<string> => {
  window.open(`https://www.leetcode.com/${config.social.leetcode}/`);

  return 'Opening leetcode...';
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `System32
SysWOW64
Program Files
Program Files (x86)
Microsoft.NET
Firmware`
/*
a
bunch
of
fake
directories`*/;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, hire me as an intern.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Access denied. But at least you get a... musical surprise. 🎶 `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
<span style="color: #00FFFF;">
${config.ascii}
</span>
Welcome To My Portfolio Website!

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'weather' to shows the forecast of any city.

Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.

`;
};
