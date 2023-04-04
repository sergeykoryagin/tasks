const enum State {
    START = 'START',
    ONE = 'ONE',
    MANY = 'MANY'
}

// function isMatch(target: string, template: string): boolean {
//     let targetIndex = 0;
//     let state = State.ONE;
//
//     for (let i = template.length; i >= 0; i--) {
//         switch (state) {
//             case State.ONE:
//                 const letter = target[targetIndex]
//                 break;
//             case State.MANY:
//                 break;
//         }
//     }
//
// };