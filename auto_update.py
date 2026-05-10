import os
import random
from datetime import datetime

# Configure Git identity
os.system('git config --global user.name "SkkJodhpur"')
os.system('git config --global user.email "SkkJodhpur@users.noreply.github.com"')

# Add a new line to the log file
message = random.choice([
    "Profile auto-sync ✅",
    "CV metadata refreshed 💼",
    "Documentation update ✍️",
    "Auto commit routine complete 🔄",
    "Automation log updated 🕒"
])

with open("auto_update_log.md", "a") as f:
    f.write(f"- {datetime.now().strftime('%Y-%m-%d %H:%M:%S')} | {message}\n")

# Stage & commit
os.system("git add auto_update_log.md")
os.system(f'git commit -m "{message}" || echo "No new changes to commit"')

# Authenticated push
token = os.getenv("GITHUB_TOKEN")
repo = os.getenv("GITHUB_REPOSITORY")
os.system(f"git remote set-url origin https://x-access-token:{token}@github.com/{repo}.git")
os.system("git push origin HEAD:main --no-verify")

print("✅ Auto-update complete and pushed successfully!")
