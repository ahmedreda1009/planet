function username(name: string): string {
    if (name.length > 15) {
        return `${name.slice(0, 15)}...`;
    } else {
        return name;
    }
}

module.exports = username;
// export default username;