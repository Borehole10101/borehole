// ============================================================
//  THE DOWNLOAD SWITCH. This is the only file you need to touch.
//
//  downloadOpen: false  ->  the button says SEALED and nobody can download.
//  downloadOpen: true   ->  the button downloads the game from downloadUrl.
//
//  downloadUrl: the link to the game zip (see WEBSITE_GUIDE.md, step 4).
// ============================================================
window.BOREHOLE = {
  downloadOpen: true,
  maintenance: false,   // true -> the button says MAINTENANCE instead of SEALED
  downloadUrl: "https://github.com/Borehole10101/borehole/releases/download/v0.10.2/Borehole_Setup_0.10.2.exe",
  version: "0.10.2",
  size: "30 MB",
};
