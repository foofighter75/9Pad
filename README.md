MatrixZ
=======

Interactive iPad matrix for showrooms

Content documents are placed in static_content and are named (C0 ... Cn) (.jpg | .mp4).
The navigation screens (3-tile-png-images, 1024x461 for iPad 3) are placed in client/9pad/resources/images.
There is a GIMP template for the navigation screens in the script folder.

In order to exchange the content of the application:
- Backup and remove old content (*.html, *.jpg, *.mp4) in static_content
- Place new content in static_content, named and indexed C(0..n).(jpg|mp4), e.g. C0.jpg, C15.mp4
- Place navigation screens into /client/9Pad/resources/images
- run the script create_content.sh in the script folder to create content pages
- run the script create_pages.sh in the script folder to create navigation pages

In order to install and run the system:
- Install Apache web server and node.js on the machine to act as a server
- Deploy the client-folder on the web server
- Place the server-folder somewhere on the same machine
- Modify the coordinator address in client/frontend.js to match the ip address of the server
- Start the node.js coordinator process:
	$ node server/server
- Point the iPads to the start page: http://server-address


Changelog:
* 2015
** Replaced Content
** Added documentation

* 2014
** Replaced content
** Added helper scripts
** Added multicolor bubbles
** Implemented debouncing of carousel messages
** Implemented reconnect for websockets (working on chrome but not on iPads?)