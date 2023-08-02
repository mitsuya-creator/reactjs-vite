export class FadeInAnimation {
    constructor(node) {
        this.node = node
    }
    start(duration) {
        this.duration = duration;
        if (this.duration === 0) this.onProgress(1);
        else {
            this.onProgress(0);
            this.startTime = performance.now();
            this.frameId = requestAnimationFrame(() => this.onFrame);
        }
    }
    onFrame() {
        const timePassed = performance.now() - this.startTime;
        const progress = 
    }
}