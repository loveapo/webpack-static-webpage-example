export const SCROLL = {
    getNestedScroll: (target: HTMLElement) => {
        let x = 0,
            y = 0
        ;
        while (target = target.parentElement) {
            x += target.scrollLeft;
            y += target.scrollTop;
        }
        return {
            x: x,
            y: y
        };
    }
};
