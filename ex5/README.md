/*

body shrinks when html given a bkgr-color
some how the viewport zindex must have content both bele and above on the stack

div relative keeps the pre-offset space


absolute remove it from the document flow(completely or maintings stacking?)

static to relative enters stacking mode

absolute element loses block autowidth



static passes coordinate system origin to its children


The html and body elements are distinct block-level entities, in a parent/child relationship.

The html element's height and width are controlled by the browser window.
It is the html element which has (by default) overflow:auto, causing scrollbars to appear when needed.

The body element is (by default) position:static,
which means that positioned children of it are positioned relative to the html element's coordinate system.

In almost all modern browsers, the built-in offset from the edge of the page is applied through a margin on the body element, not padding on the html element.


body size is complicated

    body is not a good theorhetical container unlike div,
    because size is special because it always shows

*/
