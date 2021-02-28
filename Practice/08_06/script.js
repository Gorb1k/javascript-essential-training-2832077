/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

function finder(selector) {
    let a = document.querySelector(selector);
    return a;
}
const main = finder('main');
const content = `<ul><li>Navi</li><li>VP</li><li>Secter</li></ul>`;
main.innerHTML = content;

const finder2 = {
    name: 'Finder',
    id: 1,
    selector: 'ul',
    find: (selector) => {
        this.selector = selector;
        let a = document.querySelector(this.selector);
        return a;
    }
}
const show = finder2.find(finder2.selector);
console.log(show);
