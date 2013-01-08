/* 
 * TODO: Use draggable overlays on top of the images.
 *
 * Idea: On top of each content thumbnail (see ContentCardView) a bubble-like overlay with opacity = 0 can be placed,
 * which is set to draggable instead of the content thumbnail itself.
 * When the user drags a content item, he doesn't move the image but instead moves the bubble, which
 * becomes more opaque the more the user drags it away from the carousel's middle horizon. This behavior can be
 * implemented in CarouselController.onMouseMovement().
 * (Note: If there is an offset between the finger/mouse position and the bubble, it might be a good idea to keep the actual
 * draggable overlay invisible all the time and instead render another overlay with the visible bubble at the touch
 * position in CarouselController.onMouseMovement().)
 *
 * When the bubble is released while still inside the carousel, it automatically moves back to its origin
 * and fades back to invisible. The movement back to origin already implemented in
 * CarouselController.initCarouselDragging(); fade-out can be implemented in CarouselController.onDragEnd().
 *
 * When the bubble reaches a drop zone, the drop zone reacts in order to show the user that the bubble
 * can be dropped there. This can also be implemented in CarouselController.onMouseMovement().
 * Upon dropping the bubble inside the drop zone, it immediately disappears (and returns to its origin invisibly)
 * and an animation is started inside the drop zone at the release point that indicates that something has happened.
 * The disappearing of the bubble and start of the drop zone animation can be implemented in CarouselController.onDragEnd().
 *
 * In MainController.prepareContentCards() the index of the content items is encoded into the id field of each
 * content thumbnail. If any other element than the actual thumbnail becomes the draggable element, the id with
 * the content index has to be moved to the draggable element as well.
 *
 * Other points of the app still to be modified for the demo:
 * - If the coordination server is to be deployed elsewhere, the server's IP needs to be adjusted in
 * coordinationServer.js accordingly.
 * - The content cards of the carousel view defined in CarouselView need to be adapted to the actual demo content.
 *   They must be kept in the same order as the full-content files in the static_content folder.
 * - When the demo content in static_content is ready, it needs to be copied to the folder '9padcontent' of the
 *   content web server for the content viewer to be able to load it.
 */

