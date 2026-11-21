/* ==========================================================
   BLOG POSTS - this is the only file you edit to add a post.

   HOW TO ADD A POST
   1. Save your photo in the "images" folder (keep it under ~300 KB).
   2. Copy one whole { ... }, block below and paste it at the TOP of the list
      (newest post first). Keep the comma after the closing brace.
   3. Change the id, date, title, image, summary and body.
      - id: unique, lowercase, words joined by dashes, no spaces
      - date: optional, e.g. "15 November 2026" (use "" to hide it)
      - image: the picture shown on the Blog page and at the top of the post
      - summary: one or two sentences shown on the Blog page
      - body: the full text. Each "..." line is one paragraph.
   4. Save, then upload the folder again (see README.md).

   Tips: write inside the quote marks. If you need a quote mark inside
   the text, use the ' mark instead of ".

   EXTRA THINGS YOU CAN PUT IN "body" (see the Regatta post below for examples)
      { "heading": "A heading" }
      { "image": "images/photo.jpg", "alt": "what the photo shows", "caption": "optional caption" }
      { "gallery": [ { "image": "...", "alt": "..." }, { "image": "...", "alt": "..." } ] }   two photos side by side
      { "text": "Some text", "link": { "label": "link words", "href": "https://..." } }
      { "table": { "caption": "...", "head": ["A","B"], "rows": [["1","2"]] } }
      { "note": "small print" }
   ========================================================== */

window.POSTS = [
  {
    "id": "htbc-regatta-2026",
    "date": "15 November 2026",
    "title": "HTBC Regatta 2026: results and photos",
    "image": "images/regatta-2026-1.jpg",
    "imageAlt": "Two scullers on the lake in front of the dragon sculpture",
    "summary": "25 rowers, eight events: photos and handicap-adjusted results from the HTBC Regatta on 15 November 2026.",
    "body": [
      "The HTBC Regatta 2026 was held on 15 November 2026. 25 rowers took part in eight events: single sculls, mixed doubles, family (parent and child) doubles and a mixed quad.",
      {
        "gallery": [
          {
            "image": "images/regatta-2026-2.jpg",
            "alt": "The HTBC floating boathouse with club flags and members in yellow caps",
            "caption": "The HTBC floating boathouse, with club flags flying."
          },
          {
            "image": "images/regatta-2026-3.jpg",
            "alt": "A sculler beside a colourful flag in the haze",
            "caption": "A sculler passes a colourful flag in the haze."
          }
        ]
      },
      {
        "heading": "Results"
      },
      {
        "text": "Rowers of different ages raced against each other, so finishing times were adjusted with the World Rowing Masters handicap. Ranks below follow the adjusted times. In doubles and quads, a crew's age category is based on the average age of its rowers.",
        "link": {
          "label": "World Rowing handicap calculator",
          "href": "https://masters.worldrowing.com/handicap"
        }
      },
      {
        "table": {
          "caption": "Men's single scull · categories F & G",
          "head": ["Rank", "Rower", "Cat.", "Time", "Adjusted"],
          "cols": ["rank", "", "cat", "time", "time"],
          "rows": [
            ["1", "Nguyễn Quang Tuấn", "F", "5:19", "5:19"],
            ["2", "Dương Trí Thành", "G", "5:31", "5:23"],
            ["3", "Trần Phương", "D", "5:16", "5:26"],
            ["4", "Nguyễn Ngọc Long", "E", "5:38", "5:44"]
          ],
          "note": "Times adjusted to category F."
        }
      },
      {
        "table": {
          "caption": "Women's single scull · categories B & F",
          "head": ["Rank", "Rower", "Cat.", "Time", "Adjusted"],
          "cols": ["rank", "", "cat", "time", "time"],
          "rows": [
            ["1", "Trương Hồng", "B", "4:58", "4:58"],
            ["2", "Dương Bạch Liên", "F", "5:58", "5:38"]
          ],
          "note": "Times adjusted to category B."
        }
      },
      {
        "table": {
          "caption": "Men's single scull · categories D & E",
          "head": ["Rank", "Rower", "Cat.", "Time", "Adjusted"],
          "cols": ["rank", "", "cat", "time", "time"],
          "rows": [
            ["1", "Trương Quang Dũng", "E", "4:23", "4:18"],
            ["2", "Phạm Quang Vinh", "E", "4:35", "4:30"],
            ["3", "Đặng Đức Dũng", "E", "4:40", "4:35"],
            ["4", "Phạm Gia Vinh", "D", "4:39", "4:39"]
          ],
          "note": "Times adjusted to category D."
        }
      },
      {
        "table": {
          "caption": "Men's single scull · Youth",
          "head": ["Rank", "Rower", "Cat.", "Time", "Adjusted"],
          "cols": ["rank", "", "cat", "time", "time"],
          "rows": [
            ["1", "Dương Trí Đức", "Y", "4:21", "4:21"],
            ["2", "Đinh Tường Văn", "Y", "4:34", "4:34"]
          ]
        }
      },
      {
        "table": {
          "caption": "Men's single scull · categories A & C",
          "head": ["Rank", "Rower", "Cat.", "Time", "Adjusted"],
          "cols": ["rank", "", "cat", "time", "time"],
          "rows": [
            ["1", "Dương Trí Dũng", "A", "4:00", "4:00"],
            ["2", "Phạm Vũ Thiều Quang", "Y", "4:06", "4:06"],
            ["3", "Ngô Văn Cam", "C", "4:14", "4:09"],
            ["4", "Kaisei", "A", "4:25", "4:25"],
            ["5", "Lê Hồng Quang", "D", "5:22", "5:13"]
          ],
          "note": "Times adjusted to category A."
        }
      },
      {
        "table": {
          "caption": "Mixed double scull (2x)",
          "head": ["Rank", "Crew", "Cat.", "Time", "Adjusted"],
          "cols": ["rank", "", "cat", "time", "time"],
          "rows": [
            ["1", "Trương Hồng\nTrần Phương", "C", "4:33", "4:33"],
            ["2", "Trần Thị Vân Trang\nPhạm Gia Vinh", "D", "4:42", "4:38"],
            ["3", "Trương Thị Thu Hà\nLê Đức Trung", "D", "4:43", "4:39"],
            ["4", "Dương Bạch Liên\nDương Trí Dũng", "C", "5:02", "5:02"]
          ],
          "note": "Times adjusted to category C."
        }
      },
      {
        "table": {
          "caption": "Family double scull (2x)",
          "head": ["Rank", "Crew", "Cat.", "Time", "Adjusted"],
          "cols": ["rank", "", "cat", "time", "time"],
          "rows": [
            ["1", "Phạm Quang Vinh\nPhạm Vũ Thiều Quang", "B", "3:53", "3:53"],
            ["2", "Dương Trí Thành\nDương Trí Đức", "B", "4:05", "4:05"],
            ["3", "Trương Quang Dũng\nTrương Minh Sơn", "B", "4:23", "4:23"],
            ["4", "Vương Phúc Chính\nVương Chí Hiếu", "B", "5:41", "5:41"]
          ],
          "note": "Times adjusted to category B."
        }
      },
      {
        "table": {
          "caption": "Mixed quad scull (4x)",
          "head": ["Rank", "Crew", "Cat.", "Time", "Adjusted"],
          "cols": ["rank", "", "cat", "time", "time"],
          "rows": [
            ["1", "Lê Đức Trung\nTrương Minh Sơn\nTrương Quang Dũng\nTrương Hồng", "B", "4:11", "4:11"],
            ["2", "Trần Thị Vân Trang\nNgô Văn Cam\nPhạm Vũ Thiều Quang\nPhạm Quang Vinh", "C", "4:19", "4:16"],
            ["3", "Dương Bạch Liên\nDương Trí Đức\nDương Trí Dũng\nDương Trí Thành", "C", "4:31", "4:28"],
            ["4", "Vương Bùi Phúc Nguyên\nVương Phúc Chính\nVương Phúc Nghĩa\nVương Chí Hiếu", "A", "5:14", "5:26"]
          ],
          "note": "Times adjusted to category B."
        }
      },
      {
        "note": "Age categories: Y 13–26 · A 27–35 · B 36–42 · C 43–49 · D 50–54 · E 55–59 · F 60–64 · G 65–69 · H 70–74. Cat. is the rower's category, or the crew's average-age category."
      }
    ]
  },
  {
    id: "single-scull-west-lake",
    date: "",
    title: "Single scull on West Lake",
    image: "images/blog-single-scull.jpg",
    imageAlt: "A single sculler rowing on West Lake with the Hanoi skyline behind",
    summary: "One rower, two oars and the Hanoi skyline across the water.",
    body: [
      "A single sculler glides across West Lake with the high-rises of Hanoi on the horizon.",
      "A single scull is a boat for one rower, who handles both oars alone. It rewards balance, patience and good technique.",
      "Would you like to try rowing at the club? Take a look at how to join."
    ]
  },
  {
    id: "double-scull-west-lake",
    date: "",
    title: "Double scull on West Lake",
    image: "images/blog-double-scull.jpg",
    imageAlt: "Two rowers in a double scull on a blue West Lake under a clear sky",
    summary: "Two rowers in time under a wide blue sky.",
    body: [
      "Two rowers pull together in a double scull on the open water of West Lake, under a bright blue sky.",
      "In a double, each rower has two oars and the pair must keep perfect time with each other, which makes it a great way to learn teamwork on the water.",
      "Would you like to try rowing at the club? Take a look at how to join."
    ]
  }
];
