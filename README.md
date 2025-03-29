# CICD Pipeline Project 🚀

This project demonstrates a working CI/CD (Continuous Integration / Continuous Deployment) pipeline using **GitHub Actions** and **Render**. The pipeline runs tests and deploys automatically when code is merged into the `main` branch.

## 🔧 Tech Stack
- Node.js
- TypeScript
- Vite
- Express (Backend)
- React (Frontend)
- PostgreSQL
- GitHub Actions
- Render

## ✅ CI/CD Workflow Summary

1. **Branching Strategy**
   - `develop`: used for active development.
   - `main`: stable branch for production deploys.
   - Feature branches are merged into `develop`, then into `main`.

2. **GitHub Actions**
   - `.github/workflows/deploy-to-render.yml` handles deployment.
   - The workflow:
     - Runs on `push` or `pull_request` to `main`.
     - Installs dependencies and runs tests.
     - Triggers Render deploy hook if tests pass.

3. **Secrets**
   - GitHub repository secret `RENDER_DEPLOY_HOOK_URL` securely stores the Render deploy hook URL.

4. **Render**
   - Auto-deploy is disabled on Render.
   - All deploys are triggered through GitHub Actions via a secure webhook.

## 💡 How It Works
When a feature is complete:
1. Create a PR from your feature branch into `develop`.
2. After merging into `develop`, create a PR from `develop` into `main`.
3. Once merged into `main`, GitHub Actions:
   - Runs the workflow
   - Triggers a deploy to Render using your webhook

## 🧪 Status
✅ CI/CD Pipeline: **Working!**  
✅ Automatic deploy to Render: **Success!**  
✅ GitHub Actions tested with logs and secret validation

---

### ✨ Bonus
You now have a fully working, secure, and professional deployment pipeline. Great for resumes, portfolio projects, and real-world apps.

---

### 🙌 Built by
Jen Thompson

