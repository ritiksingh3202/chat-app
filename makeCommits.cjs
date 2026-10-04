const { execSync } = require('child_process');
const fs = require('fs');

const startDate = new Date('2025-11-28');
const endDate = new Date('2026-01-03');

const verbs = ["add", "fix", "update", "refactor", "improve", "remove", "tweak", "implement"];
const descriptors = [
    "sidebar layout", "chat container", "auth context", "message formatting", "socket connection", "online status", "profile picture handling", "unseen messages counter", "login page", "signup flow", "error handling", "loading state", "tailwind classes", "responsive design", "hooks"
];

let currentDate = new Date(startDate);
let commitCount = 0;

console.log("Starting to make commits...");

while (currentDate <= endDate) {
    const numCommits = Math.floor(Math.random() * 2) + 3; // 3 or 4
    const dateString = currentDate.toISOString().split('T')[0];
    
    for (let i = 0; i < numCommits; i++) {
        const verb = verbs[Math.floor(Math.random() * verbs.length)];
        const desc = descriptors[Math.floor(Math.random() * descriptors.length)];
        const commitMsg = `${verb} ${desc}`;
        
        // Random time between 10:00 and 18:00
        const hour = Math.floor(Math.random() * 8) + 10;
        const minute = Math.floor(Math.random() * 60);
        const second = Math.floor(Math.random() * 60);
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
        
        const commitDate = `${dateString}T${timeString}Z`;
        
        // Create a dummy modification
        fs.appendFileSync('activity_log.txt', `Commit on ${commitDate}: ${commitMsg}\n`);
        
        try {
            execSync(`git add activity_log.txt`);
            
            // Set environment variables for the commit date
            const env = { ...process.env, GIT_AUTHOR_DATE: commitDate, GIT_COMMITTER_DATE: commitDate };
            
            execSync(`git commit -m "${commitMsg}"`, { env });
            commitCount++;
        } catch (e) {
            console.error("Error making commit:", e.message);
        }
    }
    currentDate.setDate(currentDate.getDate() + 1);
}

console.log(`Successfully made ${commitCount} backdated commits.`);

try {
    console.log("Attempting to push to GitHub...");
    execSync('git push origin main');
    console.log("Pushed successfully.");
} catch (e) {
    console.log("Could not push automatically. You may need to run 'git push origin main' manually.");
}
