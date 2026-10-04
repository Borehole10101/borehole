// ============================================================
//  THE DOWNLOAD SWITCH. This is the only file you need to touch.
//
//  downloadOpen: false  ->  the button says SEALED and nobody can download.
//  downloadOpen: true   ->  the button downloads the game from downloadUrl.
//
//  downloadUrl: the link to the game zip (see WEBSITE_GUIDE.md, step 4).
// ============================================================
window.BOREHOLE = {
  downloadOpen: false,
  maintenance: true,   // true -> the button says MAINTENANCE instead of SEALED
  downloadUrl: "",
  version: "0.9.0",
  size: "30 MB",
};
