
/**
* Use this file to define custom functions and blocks.
* Read more at https://minecraft.makecode.com/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function build(): void {
        let time = 0
        let list2: number[][] = []
        let length = 0
        let count = 0
        player.say("Starting...")
        count = 0
        let start = true
        time = gameplay.timeQuery(GAME_TIME)
        loops.runInBackground(function worker() {
            let bps: number;
            loops.pause(1000)
            while (start == true) {
                bps = Math.trunc(count / ((gameplay.timeQuery(GAME_TIME) - time) / 20))
                player.say("" + ("" + count) + "/" + ("" + ("" + length)) + "(" + bps + "bps)" + " ETA: " + Math.trunc((length - count) / bps) + "s")
                loops.pause(3000)
            }
        })
        let position = positions.groundPosition(player.position())
        list2 = [[20, 0, 0, 0], [20, 0, 0, 38], [20, 1, 0, 0], [20, 1, 0, 38], [20, 2, 0, 0], [20, 2, 0, 38], [20, 3, 0, 0], [20, 3, 0, 38], [20, 4, 0, 0], [20, 4, 0, 38], [20, 5, 0, 0], [20, 5, 0, 38], [20, 6, 0, 0], [42, 6, 0, 7], [42, 6, 0, 31], [20, 6, 0, 38], [20, 7, 0, 0], [20, 7, 0, 38], [20, 8, 0, 0], [20, 8, 0, 38], [20, 9, 0, 0], [20, 9, 0, 38], [20, 10, 0, 0], [20, 10, 0, 38], [20, 11, 0, 0], [20, 11, 0, 38], [20, 12, 0, 0], [20, 12, 0, 38], [20, 13, 0, 0], [20, 13, 0, 38], [20, 14, 0, 0], [20, 14, 0, 38], [20, 15, 0, 0], [20, 15, 0, 38], [20, 16, 0, 0], [20, 16, 0, 38], [20, 17, 0, 0], [20, 17, 0, 38], [20, 18, 0, 0], [20, 18, 0, 38], [20, 19, 0, 0], [20, 19, 0, 38], [20, 20, 0, 0], [20, 20, 0, 38], [20, 21, 0, 0], [20, 21, 0, 38], [20, 22, 0, 0], [20, 22, 0, 38], [20, 23, 0, 0], [20, 23, 0, 38], [20, 24, 0, 0], [20, 24, 0, 38], [20, 25, 0, 0], [20, 25, 0, 38], [20, 26, 0, 0], [20, 26, 0, 38], [20, 27, 0, 0], [20, 27, 0, 38], [20, 28, 0, 0], [20, 28, 0, 38], [20, 29, 0, 0], [20, 29, 0, 38], [20, 30, 0, 0], [42, 30, 0, 7], [42, 30, 0, 31], [20, 30, 0, 38], [20, 31, 0, 0], [20, 31, 0, 38], [20, 32, 0, 0], [20, 32, 0, 38], [20, 33, 0, 0], [20, 33, 0, 38], [20, 34, 0, 0], [20, 34, 0, 38], [20, 35, 0, 0], [20, 35, 0, 38], [20, 36, 0, 0], [20, 36, 0, 38], [20, 37, 0, 0], [20, 37, 0, 1], [20, 37, 0, 2], [20, 37, 0, 3], [20, 37, 0, 4], [20, 37, 0, 5], [20, 37, 0, 6], [20, 37, 0, 7], [20, 37, 0, 8], [20, 37, 0, 9], [20, 37, 0, 10], [20, 37, 0, 11], [20, 37, 0, 12], [20, 37, 0, 13], [20, 37, 0, 14], [20, 37, 0, 15], [20, 37, 0, 16], [20, 37, 0, 17], [20, 37, 0, 21], [20, 37, 0, 22], [20, 37, 0, 23], [20, 37, 0, 24], [20, 37, 0, 25], [20, 37, 0, 26], [20, 37, 0, 27], [20, 37, 0, 28], [20, 37, 0, 29], [20, 37, 0, 30], [20, 37, 0, 31], [20, 37, 0, 32], [20, 37, 0, 33], [20, 37, 0, 34], [20, 37, 0, 35], [20, 37, 0, 36], [20, 37, 0, 37], [20, 37, 0, 38], [20, 0, 1, 1], [20, 0, 1, 2], [20, 0, 1, 3], [20, 0, 1, 4], [20, 0, 1, 5], [20, 0, 1, 6], [20, 0, 1, 7], [20, 0, 1, 8], [20, 0, 1, 9], [20, 0, 1, 10], [20, 0, 1, 11], [20, 0, 1, 12], [20, 0, 1, 13], [20, 0, 1, 14], [20, 0, 1, 15], [20, 0, 1, 16], [20, 0, 1, 17], [20, 0, 1, 18], [20, 0, 1, 19], [20, 0, 1, 20], [20, 0, 1, 21], [20, 0, 1, 22], [20, 0, 1, 23], [20, 0, 1, 24], [20, 0, 1, 25], [20, 0, 1, 26], [20, 0, 1, 27], [20, 0, 1, 28], [20, 0, 1, 29], [20, 0, 1, 30], [20, 0, 1, 31], [20, 0, 1, 32], [20, 0, 1, 33], [20, 0, 1, 34], [20, 0, 1, 35], [20, 0, 1, 36], [20, 0, 1, 37], [20, 1, 1, 1], [20, 1, 1, 37], [20, 2, 1, 1], [20, 2, 1, 37], [20, 3, 1, 1], [20, 3, 1, 37], [20, 4, 1, 1], [20, 4, 1, 37], [20, 5, 1, 1], [20, 5, 1, 37], [20, 6, 1, 1], [20, 6, 1, 37], [20, 7, 1, 1], [20, 7, 1, 37], [20, 8, 1, 1], [20, 8, 1, 37], [20, 9, 1, 1], [20, 9, 1, 37], [20, 10, 1, 1], [20, 10, 1, 37], [20, 11, 1, 1], [20, 11, 1, 37], [20, 12, 1, 1], [20, 12, 1, 37], [20, 13, 1, 1], [20, 13, 1, 37], [20, 14, 1, 1], [20, 14, 1, 37], [20, 15, 1, 1], [20, 15, 1, 37], [20, 16, 1, 1], [20, 16, 1, 37], [20, 17, 1, 1], [20, 17, 1, 37], [20, 18, 1, 1], [20, 18, 1, 37], [20, 19, 1, 1], [20, 19, 1, 37], [20, 20, 1, 1], [20, 20, 1, 37], [20, 21, 1, 1], [20, 21, 1, 37], [20, 22, 1, 1], [20, 22, 1, 37], [20, 23, 1, 1], [20, 23, 1, 37], [20, 24, 1, 1], [20, 24, 1, 37], [20, 25, 1, 1], [20, 25, 1, 37], [20, 26, 1, 1], [20, 26, 1, 37], [20, 27, 1, 1], [20, 27, 1, 37], [20, 28, 1, 1], [20, 28, 1, 37], [20, 29, 1, 1], [20, 29, 1, 37], [20, 30, 1, 1], [20, 30, 1, 37], [20, 31, 1, 1], [20, 31, 1, 37], [20, 32, 1, 1], [20, 32, 1, 37], [20, 33, 1, 1], [20, 33, 1, 37], [20, 34, 1, 1], [20, 34, 1, 37], [20, 35, 1, 1], [20, 35, 1, 37], [20, 36, 1, 1], [20, 36, 1, 2], [20, 36, 1, 3], [20, 36, 1, 4], [20, 36, 1, 5], [20, 36, 1, 6], [20, 36, 1, 7], [20, 36, 1, 8], [20, 36, 1, 9], [20, 36, 1, 10], [20, 36, 1, 11], [20, 36, 1, 12], [20, 36, 1, 13], [20, 36, 1, 14], [20, 36, 1, 15], [20, 36, 1, 16], [20, 36, 1, 17], [20, 36, 1, 21], [20, 36, 1, 22], [20, 36, 1, 23], [20, 36, 1, 24], [20, 36, 1, 25], [20, 36, 1, 26], [20, 36, 1, 27], [20, 36, 1, 28], [20, 36, 1, 29], [20, 36, 1, 30], [20, 36, 1, 31], [20, 36, 1, 32], [20, 36, 1, 33], [20, 36, 1, 34], [20, 36, 1, 35], [20, 36, 1, 36], [20, 36, 1, 37], [20, 1, 2, 2], [20, 1, 2, 3], [20, 1, 2, 4], [20, 1, 2, 5], [20, 1, 2, 6], [20, 1, 2, 7], [20, 1, 2, 8], [20, 1, 2, 9], [20, 1, 2, 10], [20, 1, 2, 11], [20, 1, 2, 12], [20, 1, 2, 13], [20, 1, 2, 14], [20, 1, 2, 15], [20, 1, 2, 16], [20, 1, 2, 17], [20, 1, 2, 18], [20, 1, 2, 19], [20, 1, 2, 20], [20, 1, 2, 21], [20, 1, 2, 22], [20, 1, 2, 23], [20, 1, 2, 24], [20, 1, 2, 25], [20, 1, 2, 26], [20, 1, 2, 27], [20, 1, 2, 28], [20, 1, 2, 29], [20, 1, 2, 30], [20, 1, 2, 31], [20, 1, 2, 32], [20, 1, 2, 33], [20, 1, 2, 34], [20, 1, 2, 35], [20, 1, 2, 36], [20, 2, 2, 2], [20, 2, 2, 36], [20, 3, 2, 2], [20, 3, 2, 36], [20, 4, 2, 2], [20, 4, 2, 36], [20, 5, 2, 2], [20, 5, 2, 36], [20, 6, 2, 2], [20, 6, 2, 36], [20, 7, 2, 2], [20, 7, 2, 36], [20, 8, 2, 2], [20, 8, 2, 36], [20, 9, 2, 2], [20, 9, 2, 36], [20, 10, 2, 2], [20, 10, 2, 36], [20, 11, 2, 2], [20, 11, 2, 36], [20, 12, 2, 2], [20, 12, 2, 36], [20, 13, 2, 2], [20, 13, 2, 36], [20, 14, 2, 2], [20, 14, 2, 36], [20, 15, 2, 2], [20, 15, 2, 36], [20, 16, 2, 2], [20, 16, 2, 36], [20, 17, 2, 2], [20, 17, 2, 36], [20, 18, 2, 2], [20, 18, 2, 36], [20, 19, 2, 2], [20, 19, 2, 36], [20, 20, 2, 2], [20, 20, 2, 36], [20, 21, 2, 2], [20, 21, 2, 36], [20, 22, 2, 2], [20, 22, 2, 36], [20, 23, 2, 2], [20, 23, 2, 36], [20, 24, 2, 2], [20, 24, 2, 36], [20, 25, 2, 2], [20, 25, 2, 36], [20, 26, 2, 2], [20, 26, 2, 36], [20, 27, 2, 2], [20, 27, 2, 36], [20, 28, 2, 2], [20, 28, 2, 36], [20, 29, 2, 2], [20, 29, 2, 36], [20, 30, 2, 2], [20, 30, 2, 36], [20, 31, 2, 2], [20, 31, 2, 36], [20, 32, 2, 2], [20, 32, 2, 36], [20, 33, 2, 2], [20, 33, 2, 36], [20, 34, 2, 2], [20, 34, 2, 36], [20, 35, 2, 2], [20, 35, 2, 3], [20, 35, 2, 4], [20, 35, 2, 5], [20, 35, 2, 6], [20, 35, 2, 7], [20, 35, 2, 8], [20, 35, 2, 9], [20, 35, 2, 10], [20, 35, 2, 11], [20, 35, 2, 12], [20, 35, 2, 13], [20, 35, 2, 14], [20, 35, 2, 15], [20, 35, 2, 16], [20, 35, 2, 17], [20, 35, 2, 21], [20, 35, 2, 22], [20, 35, 2, 23], [20, 35, 2, 24], [20, 35, 2, 25], [20, 35, 2, 26], [20, 35, 2, 27], [20, 35, 2, 28], [20, 35, 2, 29], [20, 35, 2, 30], [20, 35, 2, 31], [20, 35, 2, 32], [20, 35, 2, 33], [20, 35, 2, 34], [20, 35, 2, 35], [20, 35, 2, 36], [20, 2, 3, 3], [20, 2, 3, 4], [20, 2, 3, 5], [20, 2, 3, 6], [20, 2, 3, 7], [20, 2, 3, 8], [20, 2, 3, 9], [20, 2, 3, 10], [20, 2, 3, 11], [20, 2, 3, 12], [20, 2, 3, 13], [20, 2, 3, 14], [20, 2, 3, 15], [20, 2, 3, 16], [20, 2, 3, 17], [20, 2, 3, 18], [20, 2, 3, 19], [20, 2, 3, 20], [20, 2, 3, 21], [20, 2, 3, 22], [20, 2, 3, 23], [20, 2, 3, 24], [20, 2, 3, 25], [20, 2, 3, 26], [20, 2, 3, 27], [20, 2, 3, 28], [20, 2, 3, 29], [20, 2, 3, 30], [20, 2, 3, 31], [20, 2, 3, 32], [20, 2, 3, 33], [20, 2, 3, 34], [20, 2, 3, 35], [20, 3, 3, 3], [20, 3, 3, 35], [20, 4, 3, 3], [20, 4, 3, 35], [20, 5, 3, 3], [20, 5, 3, 35], [20, 6, 3, 3], [20, 6, 3, 35], [20, 7, 3, 3], [20, 7, 3, 35], [20, 8, 3, 3], [20, 8, 3, 35], [20, 9, 3, 3], [20, 9, 3, 35], [20, 10, 3, 3], [20, 10, 3, 35], [20, 11, 3, 3], [20, 11, 3, 35], [20, 12, 3, 3], [20, 12, 3, 35], [20, 13, 3, 3], [20, 13, 3, 35], [20, 14, 3, 3], [20, 14, 3, 35], [20, 15, 3, 3], [20, 15, 3, 35], [20, 16, 3, 3], [20, 16, 3, 35], [20, 17, 3, 3], [20, 17, 3, 35], [20, 18, 3, 3], [20, 18, 3, 35], [20, 19, 3, 3], [20, 19, 3, 35], [20, 20, 3, 3], [20, 20, 3, 35], [20, 21, 3, 3], [20, 21, 3, 35], [20, 22, 3, 3], [20, 22, 3, 35], [20, 23, 3, 3], [20, 23, 3, 35], [20, 24, 3, 3], [20, 24, 3, 35], [20, 25, 3, 3], [20, 25, 3, 35], [20, 26, 3, 3], [20, 26, 3, 35], [20, 27, 3, 3], [20, 27, 3, 35], [20, 28, 3, 3], [20, 28, 3, 35], [20, 29, 3, 3], [20, 29, 3, 35], [20, 30, 3, 3], [20, 30, 3, 35], [20, 31, 3, 3], [20, 31, 3, 35], [20, 32, 3, 3], [20, 32, 3, 35], [20, 33, 3, 3], [20, 33, 3, 35], [20, 34, 3, 3], [20, 34, 3, 4], [20, 34, 3, 5], [20, 34, 3, 6], [20, 34, 3, 7], [20, 34, 3, 8], [20, 34, 3, 9], [20, 34, 3, 10], [20, 34, 3, 11], [20, 34, 3, 12], [20, 34, 3, 13], [20, 34, 3, 14], [20, 34, 3, 15], [20, 34, 3, 16], [20, 34, 3, 17], [20, 34, 3, 18], [20, 34, 3, 19], [20, 34, 3, 20], [20, 34, 3, 21], [20, 34, 3, 22], [20, 34, 3, 23], [20, 34, 3, 24], [20, 34, 3, 25], [20, 34, 3, 26], [20, 34, 3, 27], [20, 34, 3, 28], [20, 34, 3, 29], [20, 34, 3, 30], [20, 34, 3, 31], [20, 34, 3, 32], [20, 34, 3, 33], [20, 34, 3, 34], [20, 34, 3, 35], [20, 3, 4, 4], [20, 3, 4, 5], [20, 3, 4, 6], [20, 3, 4, 7], [20, 3, 4, 8], [20, 3, 4, 9], [20, 3, 4, 10], [20, 3, 4, 11], [20, 3, 4, 12], [20, 3, 4, 13], [20, 3, 4, 14], [20, 3, 4, 15], [20, 3, 4, 16], [20, 3, 4, 17], [20, 3, 4, 18], [20, 3, 4, 19], [20, 3, 4, 20], [20, 3, 4, 21], [20, 3, 4, 22], [20, 3, 4, 23], [20, 3, 4, 24], [20, 3, 4, 25], [20, 3, 4, 26], [20, 3, 4, 27], [20, 3, 4, 28], [20, 3, 4, 29], [20, 3, 4, 30], [20, 3, 4, 31], [20, 3, 4, 32], [20, 3, 4, 33], [20, 3, 4, 34], [20, 4, 4, 4], [20, 4, 4, 34], [20, 5, 4, 4], [20, 5, 4, 34], [20, 6, 4, 4], [20, 6, 4, 34], [20, 7, 4, 4], [20, 7, 4, 34], [20, 8, 4, 4], [20, 8, 4, 34], [20, 9, 4, 4], [20, 9, 4, 34], [20, 10, 4, 4], [20, 10, 4, 34], [20, 11, 4, 4], [20, 11, 4, 34], [20, 12, 4, 4], [20, 12, 4, 34], [20, 13, 4, 4], [20, 13, 4, 34], [20, 14, 4, 4], [20, 14, 4, 34], [20, 15, 4, 4], [20, 15, 4, 34], [20, 16, 4, 4], [20, 16, 4, 34], [20, 17, 4, 4], [20, 17, 4, 34], [20, 18, 4, 4], [20, 18, 4, 34], [20, 19, 4, 4], [20, 19, 4, 34], [20, 20, 4, 4], [20, 20, 4, 34], [20, 21, 4, 4], [20, 21, 4, 34], [20, 22, 4, 4], [20, 22, 4, 34], [20, 23, 4, 4], [20, 23, 4, 34], [20, 24, 4, 4], [20, 24, 4, 34], [20, 25, 4, 4], [20, 25, 4, 34], [20, 26, 4, 4], [20, 26, 4, 34], [20, 27, 4, 4], [20, 27, 4, 34], [20, 28, 4, 4], [20, 28, 4, 34], [20, 29, 4, 4], [20, 29, 4, 34], [20, 30, 4, 4], [20, 30, 4, 34], [20, 31, 4, 4], [20, 31, 4, 34], [20, 32, 4, 4], [20, 32, 4, 34], [20, 33, 4, 4], [20, 33, 4, 5], [20, 33, 4, 6], [20, 33, 4, 7], [20, 33, 4, 8], [20, 33, 4, 9], [20, 33, 4, 10], [20, 33, 4, 11], [20, 33, 4, 12], [20, 33, 4, 13], [20, 33, 4, 14], [20, 33, 4, 15], [20, 33, 4, 16], [20, 33, 4, 17], [20, 33, 4, 18], [20, 33, 4, 19], [20, 33, 4, 20], [20, 33, 4, 21], [20, 33, 4, 22], [20, 33, 4, 23], [20, 33, 4, 24], [20, 33, 4, 25], [20, 33, 4, 26], [20, 33, 4, 27], [20, 33, 4, 28], [20, 33, 4, 29], [20, 33, 4, 30], [20, 33, 4, 31], [20, 33, 4, 32], [20, 33, 4, 33], [20, 33, 4, 34], [20, 4, 5, 5], [20, 4, 5, 6], [20, 4, 5, 7], [20, 4, 5, 8], [20, 4, 5, 9], [20, 4, 5, 10], [20, 4, 5, 11], [20, 4, 5, 12], [20, 4, 5, 13], [20, 4, 5, 14], [20, 4, 5, 15], [20, 4, 5, 16], [20, 4, 5, 17], [20, 4, 5, 18], [20, 4, 5, 19], [20, 4, 5, 20], [20, 4, 5, 21], [20, 4, 5, 22], [20, 4, 5, 23], [20, 4, 5, 24], [20, 4, 5, 25], [20, 4, 5, 26], [20, 4, 5, 27], [20, 4, 5, 28], [20, 4, 5, 29], [20, 4, 5, 30], [20, 4, 5, 31], [20, 4, 5, 32], [20, 4, 5, 33], [20, 5, 5, 5], [20, 5, 5, 33], [20, 6, 5, 5], [20, 6, 5, 33], [20, 7, 5, 5], [20, 7, 5, 33], [20, 8, 5, 5], [20, 8, 5, 33], [20, 9, 5, 5], [20, 9, 5, 33], [20, 10, 5, 5], [20, 10, 5, 33], [20, 11, 5, 5], [20, 11, 5, 33], [20, 12, 5, 5], [20, 12, 5, 33], [20, 13, 5, 5], [20, 13, 5, 33], [20, 14, 5, 5], [20, 14, 5, 33], [20, 15, 5, 5], [20, 15, 5, 33], [20, 16, 5, 5], [20, 16, 5, 33], [20, 17, 5, 5], [20, 17, 5, 33], [20, 18, 5, 5], [20, 18, 5, 33], [20, 19, 5, 5], [20, 19, 5, 33], [20, 20, 5, 5], [20, 20, 5, 33], [20, 21, 5, 5], [20, 21, 5, 33], [20, 22, 5, 5], [20, 22, 5, 33], [20, 23, 5, 5], [20, 23, 5, 33], [20, 24, 5, 5], [20, 24, 5, 33], [20, 25, 5, 5], [20, 25, 5, 33], [20, 26, 5, 5], [20, 26, 5, 33], [20, 27, 5, 5], [20, 27, 5, 33], [20, 28, 5, 5], [20, 28, 5, 33], [20, 29, 5, 5], [20, 29, 5, 33], [20, 30, 5, 5], [20, 30, 5, 33], [20, 31, 5, 5], [20, 31, 5, 33], [20, 32, 5, 5], [20, 32, 5, 6], [20, 32, 5, 7], [20, 32, 5, 8], [20, 32, 5, 9], [20, 32, 5, 10], [20, 32, 5, 11], [20, 32, 5, 12], [20, 32, 5, 13], [20, 32, 5, 14], [20, 32, 5, 15], [20, 32, 5, 16], [20, 32, 5, 17], [20, 32, 5, 18], [20, 32, 5, 19], [20, 32, 5, 20], [20, 32, 5, 21], [20, 32, 5, 22], [20, 32, 5, 23], [20, 32, 5, 24], [20, 32, 5, 25], [20, 32, 5, 26], [20, 32, 5, 27], [20, 32, 5, 28], [20, 32, 5, 29], [20, 32, 5, 30], [20, 32, 5, 31], [20, 32, 5, 32], [20, 32, 5, 33], [20, 5, 6, 6], [20, 5, 6, 7], [20, 5, 6, 8], [20, 5, 6, 9], [20, 5, 6, 10], [20, 5, 6, 11], [20, 5, 6, 12], [20, 5, 6, 13], [20, 5, 6, 14], [20, 5, 6, 15], [20, 5, 6, 16], [20, 5, 6, 17], [20, 5, 6, 18], [20, 5, 6, 19], [20, 5, 6, 20], [20, 5, 6, 21], [20, 5, 6, 22], [20, 5, 6, 23], [20, 5, 6, 24], [20, 5, 6, 25], [20, 5, 6, 26], [20, 5, 6, 27], [20, 5, 6, 28], [20, 5, 6, 29], [20, 5, 6, 30], [20, 5, 6, 31], [20, 5, 6, 32], [20, 6, 6, 6], [20, 6, 6, 32], [20, 7, 6, 6], [20, 7, 6, 32], [20, 8, 6, 6], [20, 8, 6, 32], [20, 9, 6, 6], [20, 9, 6, 32], [20, 10, 6, 6], [20, 10, 6, 32], [20, 11, 6, 6], [20, 11, 6, 32], [20, 12, 6, 6], [20, 12, 6, 32], [20, 13, 6, 6], [20, 13, 6, 32], [20, 14, 6, 6], [20, 14, 6, 32], [20, 15, 6, 6], [20, 15, 6, 32], [20, 16, 6, 6], [20, 16, 6, 32], [20, 17, 6, 6], [20, 17, 6, 32], [20, 18, 6, 6], [20, 18, 6, 32], [20, 19, 6, 6], [20, 19, 6, 32], [20, 20, 6, 6], [20, 20, 6, 32], [20, 21, 6, 6], [20, 21, 6, 32], [20, 22, 6, 6], [20, 22, 6, 32], [20, 23, 6, 6], [20, 23, 6, 32], [20, 24, 6, 6], [20, 24, 6, 32], [20, 25, 6, 6], [20, 25, 6, 32], [20, 26, 6, 6], [20, 26, 6, 32], [20, 27, 6, 6], [20, 27, 6, 32], [20, 28, 6, 6], [20, 28, 6, 32], [20, 29, 6, 6], [20, 29, 6, 32], [20, 30, 6, 6], [20, 30, 6, 32], [20, 31, 6, 6], [20, 31, 6, 7], [20, 31, 6, 8], [20, 31, 6, 9], [20, 31, 6, 10], [20, 31, 6, 11], [20, 31, 6, 12], [20, 31, 6, 13], [20, 31, 6, 14], [20, 31, 6, 15], [20, 31, 6, 16], [20, 31, 6, 17], [20, 31, 6, 18], [20, 31, 6, 19], [20, 31, 6, 20], [20, 31, 6, 21], [20, 31, 6, 22], [20, 31, 6, 23], [20, 31, 6, 24], [20, 31, 6, 25], [20, 31, 6, 26], [20, 31, 6, 27], [20, 31, 6, 28], [20, 31, 6, 29], [20, 31, 6, 30], [20, 31, 6, 31], [20, 31, 6, 32], [20, 6, 7, 7], [20, 6, 7, 8], [20, 6, 7, 9], [20, 6, 7, 10], [20, 6, 7, 11], [20, 6, 7, 12], [20, 6, 7, 13], [20, 6, 7, 14], [20, 6, 7, 15], [20, 6, 7, 16], [20, 6, 7, 17], [20, 6, 7, 18], [20, 6, 7, 19], [20, 6, 7, 20], [20, 6, 7, 21], [20, 6, 7, 22], [20, 6, 7, 23], [20, 6, 7, 24], [20, 6, 7, 25], [20, 6, 7, 26], [20, 6, 7, 27], [20, 6, 7, 28], [20, 6, 7, 29], [20, 6, 7, 30], [20, 6, 7, 31], [20, 7, 7, 7], [20, 7, 7, 31], [20, 8, 7, 7], [20, 8, 7, 31], [20, 9, 7, 7], [20, 9, 7, 31], [20, 10, 7, 7], [20, 10, 7, 31], [20, 11, 7, 7], [20, 11, 7, 31], [20, 12, 7, 7], [20, 12, 7, 31], [20, 13, 7, 7], [20, 13, 7, 31], [20, 14, 7, 7], [20, 14, 7, 31], [20, 15, 7, 7], [20, 15, 7, 31], [20, 16, 7, 7], [20, 16, 7, 31], [20, 17, 7, 7], [20, 17, 7, 31], [20, 18, 7, 7], [20, 18, 7, 31], [20, 19, 7, 7], [20, 19, 7, 31], [20, 20, 7, 7], [20, 20, 7, 31], [20, 21, 7, 7], [20, 21, 7, 31], [20, 22, 7, 7], [20, 22, 7, 31], [20, 23, 7, 7], [20, 23, 7, 31], [20, 24, 7, 7], [20, 24, 7, 31], [20, 25, 7, 7], [20, 25, 7, 31], [20, 26, 7, 7], [20, 26, 7, 31], [20, 27, 7, 7], [20, 27, 7, 31], [20, 28, 7, 7], [20, 28, 7, 31], [20, 29, 7, 7], [20, 29, 7, 31], [20, 30, 7, 7], [20, 30, 7, 8], [20, 30, 7, 9], [20, 30, 7, 10], [20, 30, 7, 11], [20, 30, 7, 12], [20, 30, 7, 13], [20, 30, 7, 14], [20, 30, 7, 15], [20, 30, 7, 16], [20, 30, 7, 17], [20, 30, 7, 18], [20, 30, 7, 19], [20, 30, 7, 20], [20, 30, 7, 21], [20, 30, 7, 22], [20, 30, 7, 23], [20, 30, 7, 24], [20, 30, 7, 25], [20, 30, 7, 26], [20, 30, 7, 27], [20, 30, 7, 28], [20, 30, 7, 29], [20, 30, 7, 30], [20, 30, 7, 31], [20, 7, 8, 8], [20, 7, 8, 9], [20, 7, 8, 10], [20, 7, 8, 11], [20, 7, 8, 12], [20, 7, 8, 13], [20, 7, 8, 14], [20, 7, 8, 15], [20, 7, 8, 16], [20, 7, 8, 17], [20, 7, 8, 18], [20, 7, 8, 19], [20, 7, 8, 20], [20, 7, 8, 21], [20, 7, 8, 22], [20, 7, 8, 23], [20, 7, 8, 24], [20, 7, 8, 25], [20, 7, 8, 26], [20, 7, 8, 27], [20, 7, 8, 28], [20, 7, 8, 29], [20, 7, 8, 30], [20, 8, 8, 8], [20, 8, 8, 30], [20, 9, 8, 8], [20, 9, 8, 30], [20, 10, 8, 8], [20, 10, 8, 30], [20, 11, 8, 8], [20, 11, 8, 30], [20, 12, 8, 8], [20, 12, 8, 30], [20, 13, 8, 8], [20, 13, 8, 30], [20, 14, 8, 8], [20, 14, 8, 30], [20, 15, 8, 8], [20, 15, 8, 30], [20, 16, 8, 8], [20, 16, 8, 30], [20, 17, 8, 8], [20, 17, 8, 30], [20, 18, 8, 8], [20, 18, 8, 30], [20, 19, 8, 8], [20, 19, 8, 30], [20, 20, 8, 8], [20, 20, 8, 30], [20, 21, 8, 8], [20, 21, 8, 30], [20, 22, 8, 8], [20, 22, 8, 30], [20, 23, 8, 8], [20, 23, 8, 30], [20, 24, 8, 8], [20, 24, 8, 30], [20, 25, 8, 8], [20, 25, 8, 30], [20, 26, 8, 8], [20, 26, 8, 30], [20, 27, 8, 8], [20, 27, 8, 30], [20, 28, 8, 8], [20, 28, 8, 30], [20, 29, 8, 8], [20, 29, 8, 9], [20, 29, 8, 10], [20, 29, 8, 11], [20, 29, 8, 12], [20, 29, 8, 13], [20, 29, 8, 14], [20, 29, 8, 15], [20, 29, 8, 16], [20, 29, 8, 17], [20, 29, 8, 18], [20, 29, 8, 19], [20, 29, 8, 20], [20, 29, 8, 21], [20, 29, 8, 22], [20, 29, 8, 23], [20, 29, 8, 24], [20, 29, 8, 25], [20, 29, 8, 26], [20, 29, 8, 27], [20, 29, 8, 28], [20, 29, 8, 29], [20, 29, 8, 30], [20, 8, 9, 9], [20, 8, 9, 10], [20, 8, 9, 11], [20, 8, 9, 12], [20, 8, 9, 13], [20, 8, 9, 14], [20, 8, 9, 15], [20, 8, 9, 16], [20, 8, 9, 17], [20, 8, 9, 18], [20, 8, 9, 19], [20, 8, 9, 20], [20, 8, 9, 21], [20, 8, 9, 22], [20, 8, 9, 23], [20, 8, 9, 24], [20, 8, 9, 25], [20, 8, 9, 26], [20, 8, 9, 27], [20, 8, 9, 28], [20, 8, 9, 29], [20, 9, 9, 9], [20, 9, 9, 29], [20, 10, 9, 9], [20, 10, 9, 29], [20, 11, 9, 9], [20, 11, 9, 29], [20, 12, 9, 9], [20, 12, 9, 29], [20, 13, 9, 9], [20, 13, 9, 29], [20, 14, 9, 9], [20, 14, 9, 29], [20, 15, 9, 9], [20, 15, 9, 29], [20, 16, 9, 9], [20, 16, 9, 29], [20, 17, 9, 9], [20, 17, 9, 29], [20, 18, 9, 9], [20, 18, 9, 29], [20, 19, 9, 9], [20, 19, 9, 29], [20, 20, 9, 9], [20, 20, 9, 29], [20, 21, 9, 9], [20, 21, 9, 29], [20, 22, 9, 9], [20, 22, 9, 29], [20, 23, 9, 9], [20, 23, 9, 29], [20, 24, 9, 9], [20, 24, 9, 29], [20, 25, 9, 9], [20, 25, 9, 29], [20, 26, 9, 9], [20, 26, 9, 29], [20, 27, 9, 9], [20, 27, 9, 29], [20, 28, 9, 9], [20, 28, 9, 10], [20, 28, 9, 11], [20, 28, 9, 12], [20, 28, 9, 13], [20, 28, 9, 14], [20, 28, 9, 15], [20, 28, 9, 16], [20, 28, 9, 17], [20, 28, 9, 18], [20, 28, 9, 19], [20, 28, 9, 20], [20, 28, 9, 21], [20, 28, 9, 22], [20, 28, 9, 23], [20, 28, 9, 24], [20, 28, 9, 25], [20, 28, 9, 26], [20, 28, 9, 27], [20, 28, 9, 28], [20, 28, 9, 29], [20, 9, 10, 10], [20, 9, 10, 11], [20, 9, 10, 12], [20, 9, 10, 13], [20, 9, 10, 14], [20, 9, 10, 15], [20, 9, 10, 16], [20, 9, 10, 17], [20, 9, 10, 18], [20, 9, 10, 19], [20, 9, 10, 20], [20, 9, 10, 21], [20, 9, 10, 22], [20, 9, 10, 23], [20, 9, 10, 24], [20, 9, 10, 25], [20, 9, 10, 26], [20, 9, 10, 27], [20, 9, 10, 28], [20, 10, 10, 10], [20, 10, 10, 28], [20, 11, 10, 10], [20, 11, 10, 28], [20, 12, 10, 10], [20, 12, 10, 28], [20, 13, 10, 10], [20, 13, 10, 28], [20, 14, 10, 10], [20, 14, 10, 28], [20, 15, 10, 10], [20, 15, 10, 28], [20, 16, 10, 10], [20, 16, 10, 28], [20, 17, 10, 10], [20, 17, 10, 28], [20, 18, 10, 10], [20, 18, 10, 28], [20, 19, 10, 10], [20, 19, 10, 28], [20, 20, 10, 10], [20, 20, 10, 28], [20, 21, 10, 10], [20, 21, 10, 28], [20, 22, 10, 10], [20, 22, 10, 28], [20, 23, 10, 10], [20, 23, 10, 28], [20, 24, 10, 10], [20, 24, 10, 28], [20, 25, 10, 10], [20, 25, 10, 28], [20, 26, 10, 10], [20, 26, 10, 28], [20, 27, 10, 10], [20, 27, 10, 11], [20, 27, 10, 12], [20, 27, 10, 13], [20, 27, 10, 14], [20, 27, 10, 15], [20, 27, 10, 16], [20, 27, 10, 17], [20, 27, 10, 18], [20, 27, 10, 19], [20, 27, 10, 20], [20, 27, 10, 21], [20, 27, 10, 22], [20, 27, 10, 23], [20, 27, 10, 24], [20, 27, 10, 25], [20, 27, 10, 26], [20, 27, 10, 27], [20, 27, 10, 28], [20, 10, 11, 11], [20, 10, 11, 12], [20, 10, 11, 13], [20, 10, 11, 14], [20, 10, 11, 15], [20, 10, 11, 16], [20, 10, 11, 17], [20, 10, 11, 18], [20, 10, 11, 19], [20, 10, 11, 20], [20, 10, 11, 21], [20, 10, 11, 22], [20, 10, 11, 23], [20, 10, 11, 24], [20, 10, 11, 25], [20, 10, 11, 26], [20, 10, 11, 27], [20, 11, 11, 11], [20, 11, 11, 27], [20, 12, 11, 11], [20, 12, 11, 27], [20, 13, 11, 11], [20, 13, 11, 27], [20, 14, 11, 11], [20, 14, 11, 27], [20, 15, 11, 11], [20, 15, 11, 27], [20, 16, 11, 11], [20, 16, 11, 27], [20, 17, 11, 11], [20, 17, 11, 27], [20, 18, 11, 11], [20, 18, 11, 27], [20, 19, 11, 11], [20, 19, 11, 27], [20, 20, 11, 11], [20, 20, 11, 27], [20, 21, 11, 11], [20, 21, 11, 27], [20, 22, 11, 11], [20, 22, 11, 27], [20, 23, 11, 11], [20, 23, 11, 27], [20, 24, 11, 11], [20, 24, 11, 27], [20, 25, 11, 11], [20, 25, 11, 27], [20, 26, 11, 11], [20, 26, 11, 12], [20, 26, 11, 13], [20, 26, 11, 14], [20, 26, 11, 15], [20, 26, 11, 16], [20, 26, 11, 17], [20, 26, 11, 18], [20, 26, 11, 19], [20, 26, 11, 20], [20, 26, 11, 21], [20, 26, 11, 22], [20, 26, 11, 23], [20, 26, 11, 24], [20, 26, 11, 25], [20, 26, 11, 26], [20, 26, 11, 27], [20, 11, 12, 12], [20, 11, 12, 13], [20, 11, 12, 14], [20, 11, 12, 15], [20, 11, 12, 16], [20, 11, 12, 17], [20, 11, 12, 18], [20, 11, 12, 19], [20, 11, 12, 20], [20, 11, 12, 21], [20, 11, 12, 22], [20, 11, 12, 23], [20, 11, 12, 24], [20, 11, 12, 25], [20, 11, 12, 26], [20, 12, 12, 12], [20, 12, 12, 26], [20, 13, 12, 12], [20, 13, 12, 26], [20, 14, 12, 12], [20, 14, 12, 26], [20, 15, 12, 12], [20, 15, 12, 26], [20, 16, 12, 12], [20, 16, 12, 26], [20, 17, 12, 12], [20, 17, 12, 26], [20, 18, 12, 12], [20, 18, 12, 26], [20, 19, 12, 12], [20, 19, 12, 26], [20, 20, 12, 12], [20, 20, 12, 26], [20, 21, 12, 12], [20, 21, 12, 26], [20, 22, 12, 12], [20, 22, 12, 26], [20, 23, 12, 12], [20, 23, 12, 26], [20, 24, 12, 12], [20, 24, 12, 26], [20, 25, 12, 12], [20, 25, 12, 13], [20, 25, 12, 14], [20, 25, 12, 15], [20, 25, 12, 16], [20, 25, 12, 17], [20, 25, 12, 18], [20, 25, 12, 19], [20, 25, 12, 20], [20, 25, 12, 21], [20, 25, 12, 22], [20, 25, 12, 23], [20, 25, 12, 24], [20, 25, 12, 25], [20, 25, 12, 26], [20, 12, 13, 13], [20, 12, 13, 14], [20, 12, 13, 15], [20, 12, 13, 16], [20, 12, 13, 17], [20, 12, 13, 18], [20, 12, 13, 19], [20, 12, 13, 20], [20, 12, 13, 21], [20, 12, 13, 22], [20, 12, 13, 23], [20, 12, 13, 24], [20, 12, 13, 25], [20, 13, 13, 13], [20, 13, 13, 25], [20, 14, 13, 13], [20, 14, 13, 25], [20, 15, 13, 13], [20, 15, 13, 25], [20, 16, 13, 13], [20, 16, 13, 25], [20, 17, 13, 13], [20, 17, 13, 25], [20, 18, 13, 13], [20, 18, 13, 25], [20, 19, 13, 13], [20, 19, 13, 25], [20, 20, 13, 13], [20, 20, 13, 25], [20, 21, 13, 13], [20, 21, 13, 25], [20, 22, 13, 13], [20, 22, 13, 25], [20, 23, 13, 13], [20, 23, 13, 25], [20, 24, 13, 13], [20, 24, 13, 14], [20, 24, 13, 15], [20, 24, 13, 16], [20, 24, 13, 17], [20, 24, 13, 18], [20, 24, 13, 19], [20, 24, 13, 20], [20, 24, 13, 21], [20, 24, 13, 22], [20, 24, 13, 23], [20, 24, 13, 24], [20, 24, 13, 25], [20, 13, 14, 14], [20, 13, 14, 15], [20, 13, 14, 16], [20, 13, 14, 17], [20, 13, 14, 18], [20, 13, 14, 19], [20, 13, 14, 20], [20, 13, 14, 21], [20, 13, 14, 22], [20, 13, 14, 23], [20, 13, 14, 24], [20, 14, 14, 14], [20, 14, 14, 24], [20, 15, 14, 14], [20, 15, 14, 24], [20, 16, 14, 14], [20, 16, 14, 24], [20, 17, 14, 14], [20, 17, 14, 24], [20, 18, 14, 14], [20, 18, 14, 24], [20, 19, 14, 14], [20, 19, 14, 24], [20, 20, 14, 14], [20, 20, 14, 24], [20, 21, 14, 14], [20, 21, 14, 24], [20, 22, 14, 14], [20, 22, 14, 24], [20, 23, 14, 14], [20, 23, 14, 15], [20, 23, 14, 16], [20, 23, 14, 17], [20, 23, 14, 18], [20, 23, 14, 19], [20, 23, 14, 20], [20, 23, 14, 21], [20, 23, 14, 22], [20, 23, 14, 23], [20, 23, 14, 24], [20, 14, 15, 15], [20, 14, 15, 16], [20, 14, 15, 17], [20, 14, 15, 18], [20, 14, 15, 19], [20, 14, 15, 20], [20, 14, 15, 21], [20, 14, 15, 22], [20, 14, 15, 23], [20, 15, 15, 15], [20, 15, 15, 23], [20, 16, 15, 15], [20, 16, 15, 23], [20, 17, 15, 15], [20, 17, 15, 23], [20, 18, 15, 15], [20, 18, 15, 23], [20, 19, 15, 15], [20, 19, 15, 23], [20, 20, 15, 15], [20, 20, 15, 23], [20, 21, 15, 15], [20, 21, 15, 23], [20, 22, 15, 15], [20, 22, 15, 16], [20, 22, 15, 17], [20, 22, 15, 18], [20, 22, 15, 19], [20, 22, 15, 20], [20, 22, 15, 21], [20, 22, 15, 22], [20, 22, 15, 23], [20, 15, 16, 16], [20, 15, 16, 17], [20, 15, 16, 18], [20, 15, 16, 19], [20, 15, 16, 20], [20, 15, 16, 21], [20, 15, 16, 22], [20, 16, 16, 16], [20, 16, 16, 22], [20, 17, 16, 16], [20, 17, 16, 22], [20, 18, 16, 16], [20, 18, 16, 22], [20, 19, 16, 16], [20, 19, 16, 22], [20, 20, 16, 16], [20, 20, 16, 22], [20, 21, 16, 16], [20, 21, 16, 17], [20, 21, 16, 18], [20, 21, 16, 19], [20, 21, 16, 20], [20, 21, 16, 21], [20, 21, 16, 22], [20, 16, 17, 17], [20, 16, 17, 18], [20, 16, 17, 19], [20, 16, 17, 20], [20, 16, 17, 21], [20, 17, 17, 17], [20, 17, 17, 21], [20, 18, 17, 17], [20, 18, 17, 21], [20, 19, 17, 17], [20, 19, 17, 21], [20, 20, 17, 17], [20, 20, 17, 18], [20, 20, 17, 19], [20, 20, 17, 20], [20, 20, 17, 21], [20, 17, 18, 18], [20, 17, 18, 19], [20, 17, 18, 20], [20, 18, 18, 18], [20, 18, 18, 20], [20, 19, 18, 18], [20, 19, 18, 19], [20, 19, 18, 20], [20, 18, 19, 19], [20, 0, 20, 38], [20, 37, 20, 0],]
        length = list2.length
        for (let value of list2) {
            blocks.place(value[0], positions.add(position, pos(value[1], value[2], value[3])))
            count += 1
        }
        start = false
        player.say("Completed. (" + (gameplay.timeQuery(GAME_TIME) - time) / 20 + " seconds.) ( " + ("" + (Math.trunc(count / ((gameplay.timeQuery(GAME_TIME) - time) / 20)) + "bps)")))

    }
}
