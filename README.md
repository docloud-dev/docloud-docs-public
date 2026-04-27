# 🦖 Docloud Documentation Engine

This repository houses the **Docusaurus** infrastructure for the official Docloud Framework documentation, accessible at [dev.docloud.lk](https://dev.docloud.lk).

## ⚠️ READ BEFORE EDITING

This is a **Deployment-Only** repository. To maintain a clean separation between website code and technical content, we use a two-repo architecture.

### Where do I make changes?

| If you want to...               | Go to this Repository                                       |
| :------------------------------ | :---------------------------------------------------------- |
| **Edit/Add Documentation**      | [docloud-wiki](https://github.com/docloud-dev/docloud-wiki) |
| **Write a Blog Post**           | [docloud-wiki](https://github.com/docloud-dev/docloud-wiki) |
| **Update API References**       | [docloud-wiki](https://github.com/docloud-dev/docloud-wiki) |
| **Change Website Theme/Colors** | **This Repo** (`docloud-docs-public`)                       |
| **Update Sidebar Logic**        | **This Repo** (`docloud-docs-public`)                       |
| **Add Docusaurus Plugins**      | **This Repo** (`docloud-docs-public`)                       |

---

## ⚙️ How it Works (The Workflow)

We use a **Docs-as-Code** pipeline to ensure our documentation is always synchronized with our framework development:

1.  **Content Creation:** Team members or AI agents push `.md` files to the `/docs`, `/blog`, or `/api` folders in the `docloud-wiki` repository.
2.  **Trigger:** A GitHub Action in the Wiki repo "pings" this repository via a `repository_dispatch` event.
3.  **Automated Build:** This repository wakes up, pulls the latest content from the Wiki, and builds a static site using **Docusaurus**.
4.  **Live Deployment:** The built site is automatically deployed to **GitHub Pages** and served via our custom domain: `dev.docloud.lk`.

---

## 🛠 Tech Stack

- **Framework:** [Docusaurus 3](https://docusaurus.io/)
- **Hosting:** GitHub Pages
- **Automation:** GitHub Actions
- **Custom Domain:** dev.docloud.lk

---

## 🚀 Local Development

If you need to test website settings or theme changes locally on your Mac:

1. **Clone this repo:**
   ```bash
   git clone [https://github.com/docloud-dev/docloud-docs-public.git](https://github.com/docloud-dev/docloud-docs-public.git)
   ```
