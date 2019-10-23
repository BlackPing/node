function node() {
    return new Promise((resolve, reject) => {
        resolve("test");
    });
}
const a = async node => node;

a;