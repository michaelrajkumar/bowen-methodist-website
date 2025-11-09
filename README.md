# Bowen Memorial Methodist Church Website

Official website for Bowen Memorial Methodist Church, built with Hugo static site generator.

🌐 **Live Site:** [https://bowenmethodist.church](https://bowenmethodist.church)

## About

This is a modern, fast, and secure static website for Bowen Memorial Methodist Church. The site provides information about church services, ministries, events, and ways to get involved in the community.

## Features

- ⚡ Fast loading with static HTML generation
- 🔒 Secure HTTPS with Let's Encrypt SSL certificate
- 📱 Responsive design for mobile and desktop
- 🎨 Custom Hugo theme designed for the church
- 🖼️ Optimized WebP images for faster loading
- 🔍 SEO-friendly structure
- 📝 Easy content management through Markdown files

## Technology Stack

- **Static Site Generator:** [Hugo](https://gohugo.io/) v0.x
- **Web Server:** Hiawatha v11.8 (production)
- **SSL/TLS:** Let's Encrypt certificates with auto-renewal
- **Security:** fail2ban, iptables firewall, security headers
- **Deployment:** rsync over SSH

## Prerequisites

To work with this site locally, you'll need:

- [Hugo](https://gohugo.io/installation/) (extended version)
- Git
- A text editor (VS Code, Sublime, etc.)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/michaelrajkumar/bowen-methodist-website.git
cd bowen-methodist-website
```

2. Install Hugo (if not already installed):
```bash
# macOS
brew install hugo

# Linux
sudo apt install hugo  # or your package manager

# Windows
choco install hugo-extended
```

## Development

### Running Locally

Start the Hugo development server:

```bash
hugo server -D
```

The site will be available at `http://localhost:1313`

The `-D` flag includes draft content. Hugo will automatically reload when you make changes.

### Project Structure

```
.
├── archetypes/          # Content templates
├── content/             # Markdown content files
│   ├── _index.md
│   ├── beliefs.md
│   ├── giving.md
│   ├── ministries.md
│   └── ...
├── layouts/             # Custom layout overrides
│   └── _default/
├── static/              # Static assets
│   └── images/          # Image files (WebP format)
├── themes/              # Hugo themes
│   └── bowen-theme/     # Custom theme for the site
│       ├── layouts/
│       ├── static/
│       └── theme.toml
├── config.toml          # Hugo configuration
└── README.md
```

### Adding Content

Create new pages in the `content/` directory:

```bash
hugo new page-name.md
```

Edit the Markdown file with your content. Front matter controls page metadata:

```yaml
---
title: "Page Title"
date: 2025-11-09
draft: false
---

Your content here...
```

### Modifying the Theme

The custom theme is located in `themes/bowen-theme/`. Key files:

- `layouts/_default/baseof.html` - Base template
- `layouts/index.html` - Homepage template
- `layouts/partials/` - Reusable components
- `static/css/main.css` - Styles
- `static/js/main.js` - JavaScript

## Building for Production

Generate the static site files:

```bash
hugo
```

This creates the `public/` directory with all static files ready for deployment.

To build with minification:

```bash
hugo --minify
```

## Deployment

The site is deployed to a VPS server running Hiawatha web server.

### Deployment Process

1. Build the site:
```bash
hugo --minify
```

2. Deploy via rsync:
```bash
rsync -avz --delete public/ user@server:/var/www/bowenmethodist.church/
```

3. The server automatically serves the updated files over HTTPS

### Server Configuration

**Production Server:**
- OS: Slackware Linux 15.0
- Web Server: Hiawatha v11.8
- SSL: Let's Encrypt (auto-renewal via certbot)
- Security: fail2ban, iptables firewall, security headers
- SSH: Custom port 2574

**Security Features:**
- Automatic SSL certificate renewal
- HTTP to HTTPS redirect
- Security headers (HSTS, CSP, X-Frame-Options, etc.)
- IP-based banning for suspicious activity
- Minimal attack surface

## Configuration

Main configuration file: `config.toml`

Key settings:
```toml
baseURL = "https://bowenmethodist.church"
languageCode = "en-us"
title = "Bowen Memorial Methodist Church"
theme = "bowen-theme"

[minify]
  minifyOutput = true
```

## Content Management

All content is written in Markdown and stored in the `content/` directory:

- `content/_index.md` - Homepage content
- `content/beliefs.md` - Methodist beliefs
- `content/giving.md` - Donation information
- `content/ministries.md` - Church ministries
- `content/services.md` - Service times
- And more...

## Images

Images are stored in `static/images/` and are optimized in WebP format for better performance.

To add new images:
1. Convert to WebP format for optimal compression
2. Place in `static/images/`
3. Reference in Markdown: `![Alt text](/images/filename.webp)`

## Maintenance

### SSL Certificate Renewal

Certificates auto-renew daily via cron job:
```bash
/etc/cron.daily/renew-letsencrypt.sh
```

### Updating Content

1. Edit Markdown files in `content/`
2. Test locally: `hugo server -D`
3. Build: `hugo --minify`
4. Deploy: `rsync` to server
5. Commit changes: `git add . && git commit -m "Update content"`
6. Push: `git push origin main`

## Support

For technical issues or questions:
- Email: michael.and.mary@gmail.com
- GitHub Issues: [Create an issue](https://github.com/michaelrajkumar/bowen-methodist-website/issues)

## License

Copyright © 2025 Bowen Memorial Methodist Church. All rights reserved.

---

**Built with ❤️ for the Bowen Methodist Church community**
