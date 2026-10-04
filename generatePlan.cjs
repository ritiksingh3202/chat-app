const fs = require('fs');

const startDate = new Date('2025-11-28');
const endDate = new Date('2026-01-03');
const days = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;

const topics = [
    "setup", "components", "context", "auth", "chat", "ui", "bugfix", "refactor", "deps", "styling", "layout", "socket"
];

const verbs = ["add", "fix", "update", "refactor", "improve", "remove", "tweak", "implement"];
const descriptors = [
    "sidebar layout", "chat container", "auth context", "message formatting", "socket connection", "online status", "profile picture handling", "unseen messages counter", "login page", "signup flow", "error handling", "loading state", "tailwind classes", "responsive design", "hooks"
];

const plan = [];

let currentDate = new Date(startDate);
while (currentDate <= endDate) {
    const numCommits = Math.floor(Math.random() * 2) + 3; // 3 or 4
    const dateString = currentDate.toISOString().split('T')[0];
    
    const dayCommits = [];
    for (let i = 0; i < numCommits; i++) {
        const verb = verbs[Math.floor(Math.random() * verbs.length)];
        const desc = descriptors[Math.floor(Math.random() * descriptors.length)];
        dayCommits.push(`${verb} ${desc}`);
    }
    plan.push({ date: dateString, commits: dayCommits });
    currentDate.setDate(currentDate.getDate() + 1);
}

let md = "# Commit Plan (Nov 28, 2025 - Jan 3, 2026)\n\n";
md += "Here are the proposed daily commits for your review. Once you approve, I will run a script to automatically generate these commits on the corresponding dates!\n\n";

for (const day of plan) {
    md += `### ${day.date}\n`;
    for (const commit of day.commits) {
        md += `- ${commit}\n`;
    }
    md += '\n';
}

fs.writeFileSync('C:/Users/ritik/.gemini/antigravity/brain/1de56dd0-3e0a-403d-905a-26fe729b8d11/commit-plan.md', md);
console.log("Plan generated!");
