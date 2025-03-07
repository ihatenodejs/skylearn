# skylearn

The LMS built for people

## This app is not functional yet

This is a very large project which will cause this app to be non-functional for quite some time while I (and hopefully others) build it.

**Essentially, only use this in a development environment for now.**

## Build and test

These instructions were successfully reproduced on an Arch Linux system (07 Mar 2025).

I do all of my development work on Linux which means support is more exclusive to Linux than Windows. This app should work on Windows, although there may be issues along the road. Feel free to document them and contribute... Windows testing is important.

1. **Install Bun (optional)**

   I highly suggest you install [Bun](https://bun.sh) to build and test SkyLearn. It's much faster than `npm`!

   ```bash
   # Install bun (optional)
   curl -fsSL https://bun.sh/install | bash
   ```
   
2. **Clone the repo**

   *2a. Install `git` (if you haven't already)*

   ```bash
   sudo apt install git # Debian/Ubuntu
   sudo pacman -S git # Arch Linux
   sudo emerge --ask dev-vcs/git # Gentoo
   ```
   
   *2b. Clone repo*

   ```bash
   git clone https://github.com/ihatenodejs/skylearn
   ```
   
3. **Install dependencies**

   ```bash
   bun install # for bun
   npm install # for npm
   # if you use yarn or other pms, you know this process better than me!
   ```
   
### Deployment options
   
1. **Option One: Start development server**

   ```bash
   bun dev # bun
   npm run dev # npm
   ```

   Upon running this, a server should be started on `:3000` or the next available port. Changes will be auto-updated in the browser as you edit, as opposed to building a copy.
   
   Because of the compilation delay, it is not recommended to use a development server in a production environment (either way, you shouldn't run SkyLearn in prod yet).
   
2. **Option Two: Build for "production"**

   >⚠ **WARNING**
   >
   >Do **not** run SkyLearn in a production environment. This option should only be used for testing.
   
   ```bash
   # bun
   bun run build
   bun start
   
   # npm
   npm run build
   npm run start
   ```