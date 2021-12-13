import {useEffect} from 'react';
export default function useBodyClass(className) {
    useEffect(
        () => {
          function isTouchDevice() {
            return (('ontouchstart' in window) ||
               (navigator.maxTouchPoints > 0) ||
               (navigator.msMaxTouchPoints > 0));
          }
          const isTouchDevices = (isTouchDevice()) ? `touchevents` : `-touchevents`;
          const addBodyClass = className => document.body.classList.add(className + isTouchDevices);
          const removeBodyClass = className => document.body.classList.remove(className);
            // Set up
            className instanceof Array ? className.map(addBodyClass) : addBodyClass(className);
            // Clean up
            return () => {
                className instanceof Array
                    ? className.map(removeBodyClass)
                    : removeBodyClass(className);
            };

        },
        [className]
    );
}
