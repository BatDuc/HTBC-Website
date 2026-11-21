# Ho Tay Boat Club website

A simple, free, static website. No installs, no subscription.

## Files
- `index.html` - Home (poster banner, welcome, cards, training & location, committee)
- `history.html` - club history timeline (not in the menu; linked from the Home button and footer)
- `join.html` - how to join, fee table, enquiry form
- `contact.html` - telephone, address, enquiry form, Google Map
- `rules.html` and `rules.js` - the Club Rules page (operation rules and safety rules, English and Vietnamese)
- `blog.html` and `post.html` - the Blog list and a single post
- `posts.js` - **all blog posts live here** (the only file you edit to add a post)
- `blog.js` - builds the blog pages from `posts.js` (do not edit)
- `style.css` - colours, fonts and layout
- `script.js` - mobile menu
- `images/` - all photos and the logo

## Editing text
Open any page in a text editor (Notepad, VS Code). Search for `[` to find
placeholders still to fill in (training times, committee names, history).
Preview by double-clicking `index.html`, or use the Live Server extension in VS Code.

## Photos
Replace a photo by saving a new file with the SAME name in `images/`:
- `home-banner.jpg` - the big picture at the top of the Home page, shown whole at full width.
  Replace it with any wide photo (about 2400 pixels wide, under 700 KB) saved with the same name.
  A photo about 3:2 wide works best, and update the `alt` text in `index.html` to describe it.
- `members.jpg`, `boats.jpg`, `programmes.jpg`, `sunday-row.jpg` - the four Home cards
- `hero.jpg` - the dark banner behind the title on the inner pages
- `regatta-2026-1.jpg`, `-2.jpg`, `-3.jpg` - the photos in the Regatta 2026 blog post
- `logo.png` (header logo, transparent background) and `favicon.png` (browser tab icon)
Keep each photo under about 300 KB (resize it first) so the site loads fast.
Only post photos you have permission to use, and ask before showing children.

## Club Rules page
`rules.html` holds the rules twice: the English text inside `data-lang-block="en"` and the
Vietnamese text inside `data-lang-block="vi"`. Visitors switch with the English / Tiếng Việt
buttons (it opens in Vietnamese for visitors whose browser is set to Vietnamese). When a rule
changes, edit BOTH versions so they stay the same. Each rule is a `<li>` or `<p>` you can edit
in place, and the opening-hours table is a normal HTML table.
Note: the Word files you sent are not identical in English and Vietnamese (see the notes sent
with the site), and the page repeats each exactly as written.

## Blog: add a new post
1. Save the photo in `images/` (for example `regatta-day.jpg`).
2. Open `posts.js`. Copy one whole `{ ... },` block and paste it at the top of the list.
3. Change `id` (lowercase words joined by dashes), `date` (or leave `""`), `title`,
   `image`, `imageAlt`, `summary` (shown on the Blog page) and `body`
   (each line in quotes is one paragraph, separated by commas).
4. Save, check it in your browser, then upload again (see below).
To remove a post, delete its whole `{ ... },` block.
A post can also contain headings, photo galleries, links and results tables. The Regatta 2026
post at the top of `posts.js` is a working example to copy, and the list of options is in the
comment at the top of that file.
Common mistakes: a missing comma between posts, or a stray " inside the text.

## Contact and Join forms
They need a free Formspree form before they send anything:
1. Make an account at https://formspree.io and create a form that emails the club.
2. Copy the form ID (the part after /f/).
3. In `join.html` and `contact.html`, replace `YOUR_FORM_ID` with it.
Until then, remove the forms or leave the phone and email as the way to reach you.

## Put the website on the internet (free)
Netlify (recommended):
1. Unzip the download so you have the `hotay-site` folder.
2. Make a free account at https://www.netlify.com and log in.
3. Open your Sites page, choose Add new site > Deploy manually (or go to
   https://app.netlify.com/drop) and drag the whole `hotay-site` folder onto the box.
4. After a few seconds you get a public link like `random-name.netlify.app`.
   Change it under Site configuration > Change site name (for example `hotay-boat-club`).
5. Open the link on your phone to check it. Share it on the Facebook group.

To update the live site later: edit the files, then open the site in Netlify, go to the
Deploys tab and drag the updated folder onto the upload box. The link stays the same.

Other free hosts that work the same way: GitHub Pages and Cloudflare Pages.

## Custom domain (optional, paid)
A name like hotayboatclub.com costs roughly $10-15 a year. Register it in the club's name
with an email several committee members can reach, then add it under Domain management in Netlify.
