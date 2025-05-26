import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {

    return `
<div style="display:flex;align-items:flex-start;">
  <img src="/assets/profile-pic.png" alt="profile" style="width:300px;height:450px;border-radius:10px;margin-right:40px;"/>
  <pre style="font-size:16px;font-family:monospace;line-height:1.4;">

📟 sumfetch: short summary of me!
-----------
🪪 ABOUT
👤 ${config.name}
💻 ${config.ps1_hostname}
🎓 ${config.university}
📘 ${config.course}
📍 ${config.location}
💼 ${config.experience.title} at ${config.experience.company}

📝 <u><a href="${config.resume_url}" target="_blank">Resume</a></u>
🗂️ <u><a href="${config.repo}" target="_blank">Github Repo</a></u>
-----------
🔗 CONTACT
📧 <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
<a href="https://github.com/${config.social.github}" target="_blank" style="display:inline-flex;align-items:center;text-decoration:none;">
  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" alt="GitHub" style="width:16px;height:16px;filter:invert(1);margin-right:8px;"/>
  <span style="line-height:1;">github.com/${config.social.github}</span>
</a>
<a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank" style="display:inline-flex;align-items:center;text-decoration:none;">
  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" alt="LinkedIn" style="width:16px;height:16px;filter:invert(1);margin-right:8px;"/>
  <span style="line-height:1;">linkedin.com/in/${config.social.linkedin}</span>
</a>
<a href="https://leetcode.com/${config.social.leetcode}" target="_blank" style="display:inline-flex;align-items:center;text-decoration:none;">
  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/leetcode.svg" alt="LeetCode" style="width:16px;height:16px;filter:invert(1);margin-right:8px;"/>
  <span style="line-height:1;">leetcode.com/${config.social.leetcode}</span>
</a>
</pre>
</div>
`
};

export default sumfetch;
